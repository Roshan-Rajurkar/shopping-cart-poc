import { CartAppState } from "../models/AppStates";

const initialState: CartAppState = {
  carts: [],
};

export const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        carts : [...state.carts, action.payload]
      };

    default:
      return state;
  }
};
