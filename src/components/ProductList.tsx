import Product from "../models/Product";
import ProductCard from "./ProductCard";

type ProductListComponentProps = {
  products: Product[];
};

const ProductCardList = ({ products }: ProductListComponentProps) => {
  return (
    <div className="flex flex-wrap justify-start gap-10">
      {products.map((product) => {
        return <ProductCard key={product.title} product={product} />;
      })}
    </div>
  );
};

export default ProductCardList;
