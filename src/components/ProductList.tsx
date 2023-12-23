import Product from "../models/Product";
import ProductCard from "./ProductCard";

type ProductListComponentProps = {
  products: Product[];
};

const ProductCardList = ({ products }: ProductListComponentProps) => {
  return (
    <div>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              {product.id}
              <ProductCard product={product} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductCardList;
