import Product from '../models/Product'

export type CartAppState = {
  carts: Product[];
};

// export type userAppType = {
//   user : {
//     username : string,
//     email : string,
//     password?: string
//   } | null
// }