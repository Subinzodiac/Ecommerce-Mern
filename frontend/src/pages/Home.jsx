import { Link, useParams } from "react-router-dom";
import { useGetProductsQuery } from "../redux/api/productApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Header from "../components/Header";
import Product from "./Products/Product";

const Home = () => {
  const { keyword } = useParams();
  const { data, isLoading, isError, error } = useGetProductsQuery({ keyword });

  // Log error for debugging (remove this in production)
  if (isError) {
    console.error(error);
  }

  return (
    <>
      {!keyword ? <Header /> : null}
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant="danger">
          {error?.data?.message || error?.message || "An unexpected error occurred"}
        </Message>
      ) : (
        <>
          <div className="flex justify-between items-center ">
            <h1 className="ml-[20rem] mt-[10rem] text-[3rem]">Special Products</h1>
            <Link
              to="/shop"
              className="bg-pink-600 text-white font-bold rounded-full py-2 px-10 mr-[18rem]"
            >
              Shop
            </Link>
          </div>

          <div className="flex justify-center flex-wrap mt-[2rem]">
            {data?.products.map((product) => (
              <div key={product._id} className="m-4">
                <Product product={product} />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
