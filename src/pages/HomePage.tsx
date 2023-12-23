import { useQuery } from "react-query";
import ProductList from "../components/ProductList";
import { fetchProducts } from "../Queries/ProductQueries";

const HomePage = () => {
  
  const fetchedProducts = useQuery("products", fetchProducts);

  const {
    data: products,
    isLoading,
    isError,
  } = fetchedProducts;
  

  console.log(products);

  if (isLoading) return <p>Loading spinner</p>;
  if (isError) return <p>Error Block</p>;

  return (
    <ul>
      <h1>All Products Here</h1>
      <ProductList products={products} />
    </ul>
  );
};

export default HomePage;
