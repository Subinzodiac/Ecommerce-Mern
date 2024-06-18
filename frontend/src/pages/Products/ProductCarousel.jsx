import { useGetTopProductsQuery } from "../../redux/api/productApiSlice";
import Message from "../../components/Message";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import moment from "moment";
import {
  FaBox,
  FaClock,
  FaShoppingCart,
  FaStar,
  FaStore,
} from "react-icons/fa";

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="mb-4 lg:block xl:block md:block">
      {isLoading ? null : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <Slider {...settings} className="xl:w-[40rem] lg:w-[40rem] md:w-[46rem] sm:w-[40rem] sm:block">
          {products && products.length > 0 ? (
            products.map(
              ({
                image,
                _id,
                name,
                price,
                description,
                brand,
                createdAt,
                numReviews,
                rating,
                quantity,
                countInStock,
              }) => (
                <div key={_id}>
                  <img
                    src={image}
                    alt={name}
                    className="w-full rounded-lg object-cover h-[25rem]"
                  />

                  <div className="mt-4">
                    <h2 className="text-lg font-semibold">{name}</h2>
                    <p className="text-gray-600 mb-2">$ {price}</p>
                    <p className="text-gray-600 mb-2">{description.substring(0, 170)} ...</p>

                    <div className="flex flex-wrap justify-between">
                      <div className="flex items-center mb-2">
                        <FaStore className="mr-2" />
                        <span className="text-gray-600">Brand: {brand}</span>
                      </div>
                      <div className="flex items-center mb-2">
                        <FaClock className="mr-2" />
                        <span className="text-gray-600">Added: {moment(createdAt).fromNow()}</span>
                      </div>
                      <div className="flex items-center mb-2">
                        <FaStar className="mr-2" />
                        <span className="text-gray-600">Reviews: {numReviews}</span>
                      </div>
                      <div className="flex items-center mb-2">
                        <FaStar className="mr-2" />
                        <span className="text-gray-600">Ratings: {Math.round(rating)}</span>
                      </div>
                      <div className="flex items-center mb-2">
                        <FaShoppingCart className="mr-2" />
                        <span className="text-gray-600">Quantity: {quantity}</span>
                      </div>
                      <div className="flex items-center mb-2">
                        <FaBox className="mr-2" />
                        <span className="text-gray-600">In Stock: {countInStock}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )
          ) : (
            <Message variant="info">No products found.</Message>
          )}
        </Slider>
      )}
    </div>
  );
};

export default ProductCarousel;
