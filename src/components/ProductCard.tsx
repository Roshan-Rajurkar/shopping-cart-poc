import Product from "../models/Product";
import { useNavigate } from "react-router-dom";
type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();

  const gotToProduct = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      onClick={gotToProduct}
      className="rounded-2xl w-72 h-88 overflow-hidden bg-slate-200 border-2 cursor-pointer"
    >
      <div className="w-full h-44 overflow-hidden ">
        <img
          src={product.image}
          alt="product look"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="h-44 px-4 flex flex-col gap-2 justify-between">
        <p className="my-2 text-lg font-bold line-clamp-2 text-center">
          {product.title}
        </p>
        <div className="flex justify-between px-3">
          <span className="text-slate-600">
            Price: &#8377;
            <span className="font-bold">{product.price}</span>
          </span>
          <span className="text-slate-600">Rating: {product.rating.rate}</span>
        </div>
        <button
          onClick={gotToProduct}
          className="w-full text-blue-500 border-2 border-blue-500 hover:bg-blue-500 hover:text-white py-2 mt-4 mb-2 rounded-lg"
        >
          View Product
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
