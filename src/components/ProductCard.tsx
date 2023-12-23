import Product from "../models/Product";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return <span>. {product.title}</span>;
};

export default ProductCard;
