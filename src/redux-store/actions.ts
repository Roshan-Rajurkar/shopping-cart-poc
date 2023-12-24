import LoginData from "../models/LoginData";
import Product from "../models/Product";
import SignupData from "../models/SignupData";

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

export const login = (userData: LoginData) => {
  return {
    type: "LOG_IN",
    payload: userData,
  };
};

export const signUp = (userData: SignupData) => {
  return {
    type: "SIGN_UP",
    payload: userData,
  };
};
