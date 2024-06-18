import { Link } from "react-router-dom";
import HeartIcon from "./HeartIcon";

const SmallProduct = ({ product }) => {
  return (
    <div className="w-60 h-80 m-4 p-3 bg-[#1A1A1A] rounded-lg shadow-lg flex flex-col justify-between">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-40 w-full object-cover rounded"
        />
        <HeartIcon product={product} />
      </div>

      <div className="p-4 flex flex-col justify-between h-full">
        <Link to={`/product/${product._id}`}>
          <h2 className="flex justify-between items-center text-white">
            <div className="truncate">{product.name}</div>
            <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">
              ${product.price}
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default SmallProduct;
