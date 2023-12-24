import { useState } from "react";
import { useQuery } from "react-query";
import ProductList from "../components/ProductList";
import { fetchProducts } from "../Queries/ProductQueries";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorBlock from "../components/ErrorBlock";
import Product from "../models/Product";
import { FiSearch } from "react-icons/fi";

const HomePage = () => {
  const fetchedProducts = useQuery("products", fetchProducts);

  const { data: products, isLoading, isError } = fetchedProducts;

  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products
    ? products.filter((product:Product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorBlock message="Error In fetching Data" />;

  return (
    <div className="w-full">
      {
        !isError && !isLoading && (
          <div className="mb-4 relative">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
          <FiSearch className="text-gray-500" />
        </span>
        <input
          type="text"
          placeholder="Search products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 border p-2 w-full outline-none border-1 hover:border-blue-200"
        />
      </div>
        )
      }
      
      {filteredProducts.length > 0 ? (
              <>
                <h1 className="my-4 text-lg font-semibold">All Available Products</h1>
                <ProductList products={filteredProducts} />
              </>
      ) : (
        <p>Sorry, product not found</p>
      )}

    </div>
  );
};

export default HomePage;
