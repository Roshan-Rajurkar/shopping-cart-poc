import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../Queries/ProductQueries";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux-store/actions";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorBlock from "../components/ErrorBlock";

const ProductPage = () => {
  const { id } = useParams<{ id?: string }>();
  const dispatch = useDispatch();

  const useFetchProductById = (id: string) =>
    useQuery(["products", { productId: id }], () => fetchProductById(id), {
      enabled: !!id,
    });

  const { data: product, isLoading, isError } = useFetchProductById(id || "");

  if (isLoading) return <LoadingSpinner />;

  if (isError) return <ErrorBlock message="Error in fetching products data" />;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="flex w-88 h-88 items-center justify-center mt-4">
  <div className="flex w-full max-w-3xl h-88 items-center justify-center gap-4 border-2 p-5">
    <div className="mr-4 w-3/4 h-2/4 flex justify-center overflow-hidden">
      <img
        src={product.image}
        alt="Product"
        className="rounded object-contain w-64 h-80"
      />
    </div>
    <div className="w-full flex flex-col gap-2 max-w-md py-4">
      <h2 className="text-xl font-bold mb-2">{product.title}</h2>
      <p className="line-clamp-3 text-gray-500"><span>Summary:</span> {product.description}</p>
      <p className="text-gray-600">Category: {product.category}</p>
      <p className="text-green-500 font-semibold mb-1">Price: ₹{product.price?.toFixed(2)}</p>
      <p className="text-yellow-500 mb-2">Rating: {product.rating?.rate}</p>
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
