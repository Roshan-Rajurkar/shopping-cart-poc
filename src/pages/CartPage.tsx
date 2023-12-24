import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import { CartAppState } from "../models/AppStates";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const CartPage = () => {
  const cartsProducts = useSelector((state : CartAppState) => state.carts)
  
  const totalCartPrice = () =>{
    return cartsProducts.reduce((acc, product)=> 
      acc + product.price
    ,0)
  }

  const sum = totalCartPrice().toFixed(2)

return (
  <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:mt-8">
    <div className="w-3/5 flex flex-col gap-3 ">
      { cartsProducts.length>0 ? 
        cartsProducts.map((product)=>{
          return (<CartProduct key={product.id * Math.random()} product={product}/>)
        }) : <p className="text-red-600">Cart is empty</p>
      }
    </div>
    <div className="w-2/5 border-slate-300 rounded-lg border-2 h-max p-4 ">
      <div className="flex justify-between items-center">
        <span>
          Total (No. of items : <b>{cartsProducts.length}</b>): 
        </span>
        <span className="text-green-600 text-xl font-bold" >₹{sum}</span>
      </div>
      <div>
        <Link to={'/checkout'}>
        <Button type="button" text="checkout"/>
        </Link>
      </div>
    </div>
  </div>
  )
};
export default CartPage;