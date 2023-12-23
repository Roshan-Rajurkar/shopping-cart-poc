import Product from "../models/Product";

export const addToCart = (
  newCart: Product
): {
  type: string;
  payload: Product;
} => {
  return {
    type: "ADD_TO_CART",
    payload: newCart,
  };
};
