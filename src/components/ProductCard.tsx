import Product from "../models/Product";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { addTOCart } from "../redux-store/actions";
type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useDispatch();

  const addingToCart = () => {
    dispatch(addTOCart(product));
  };

  return (
    <div className="rounded-2xl w-72 h-content overflow-hidden bg-slate-200 border-2">
      <div className="w-full h-44 overflow-hidden ">
        <img
          src={product.image}
          alt="product look"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="h-content px-4 flex flex-col gap-2 justify-between">
        <p className="my-2 text-lg font-bold line-clamp-1 text-center">
          {product.title}
        </p>
        <div className="flex justify-between px-3">
          <span className="text-slate-600">
            Price: &#8377;
            <span className="font-bold">{product.price}</span>
          </span>
          <span className="text-slate-600">Rating: {product.rating.rate}</span>
        </div>
        <button onClick={addingToCart}>send me to cart</button>
        <Button classname="my-3" type="button" text="Add To Card" />
      </div>
    </div>
  );
};

export default ProductCard;
