import Product from "../models/Product";

export type AppState = {
  carts: Product[];
};

const initialState: AppState = {
  carts: [],
};

const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return state;

    default:
      return state;
  }
};

export default cartReducer;
