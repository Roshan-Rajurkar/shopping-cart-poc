import { useQuery } from "react-query";
import ProductList from "../components/ProductList";
import { fetchProducts } from "../Queries/ProductQueries";
import { useSelector } from "react-redux";
import { AppState } from "../redux-store/reducers";

const HomePage = () => {
  const fetchedProducts = useQuery("products", fetchProducts);

  const { data: products, isLoading, isError } = fetchedProducts;
  const carts = useSelector((state: AppState) => state.carts);

  if (isLoading) return <p>Loading spinner</p>;
  if (isError) return <p>Error Block</p>;

  return (
    <div className="w-full">
      <p>{carts.length}</p>
      <h1 className="font-bold mb-10 text-center">All Available Products</h1>
      <ProductList products={products} />
    </div>
  );
};

export default HomePage;
