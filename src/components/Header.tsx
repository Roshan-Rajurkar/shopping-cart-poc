import { NavLink } from "react-router-dom";
import CartIcon from "./CartIcon";
import { useSelector } from "react-redux";
import { CartAppState} from "../models/AppStates";
const Header = () => {

  const carts = useSelector((state:CartAppState)=> state.carts )

  return (
    <div className="w-3/4 flex justify-between py-4 items-center lg:gap-1 fixed top-0 left-0 right-0 mx-auto backdrop-blur-md bg-white/30 z-10">
      <h1 className="font-bold text-blue-800 text-0.5xl lg:text-3xl">
        <NavLink to={"/"}>ShoppingCart</NavLink>
      </h1>

      <div className="flex gap-4">
      <div className="flex gap-1 items-center">
        <NavLink
          className="text-white-900 px-3 py-1 rounded-md text-blue-500 border border-blue-500 hover:underline"
          to={"/login"}
        >
          Log In
        </NavLink>
        <span className="text-sm text-slate-300">or</span>
        <NavLink
          className=" bg-blue-500 text-white px-3 py-1 rounded-md hover:underline"
          to={"/signup"}
        >
          Sign Up
        </NavLink>
      </div>

      <CartIcon NumberOfItems={carts?.length}/>  
      </div> 
    </div>
  );
};

export default Header;
