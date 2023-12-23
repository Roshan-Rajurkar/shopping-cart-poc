import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../Queries/ProductQueries";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux-store/actions";

const ProductPage = () => {
  const { id } = useParams<{ id?: string }>();
  const dispatch = useDispatch();

  const useFetchProductById = (id: string) =>
    useQuery(["products", { productId: id }], () => fetchProductById(id), {
      enabled: !!id,
    });

  const { data: product, isLoading, isError } = useFetchProductById(id || "");

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>Error in fetching...</p>;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="flex w-3/4 h-3/4 items-center justify-center bg-red-200">
      <div className="flex w-full mt-8 items-center justify-center">
        <div className=" mr-4">
          <img
            src={product.image}
            alt="Product"
            className="rounded w-44 h-44 object-cover"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">{product.title}</h2>
          <p className="text-gray-600 mb-1">{product.category}</p>
          <p className="text-green-500 font-semibold mb-1">₹{product.price}</p>
          <p className="text-yellow-500 mb-2">Rating: {product.rating.rate}</p>
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
