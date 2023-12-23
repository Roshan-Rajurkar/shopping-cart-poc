import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../Queries/ProductQueries";

const ProductPage = () => {
  const { id } = useParams<{ id?: string }>();
  console.log(id);

  const useFetchProductById = (id: string) =>
    useQuery(["products", { productId: id }], () => fetchProductById(id), {
      enabled: !!id,
    });

  const { data: product, isLoading, isError } = useFetchProductById(id || "");

  if (isLoading) return <p>loading...</p>;

  if (isError) return <p>Error in fetching...</p>;

  return (
    <div>
      <p>
        {product.id}. {product.title}
        <img src={product.image} alt="" className="w-44 h-44" />
      </p>
    </div>
  );
};

export default ProductPage;
