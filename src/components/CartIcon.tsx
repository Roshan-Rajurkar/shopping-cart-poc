import { NavLink } from "react-router-dom";
import notificationIconImage from "../assets/shopping-cart.png";

type IconCounterType = {
  NumberOfItems: number;
};

const CartIcon: React.FC<IconCounterType> = ({ NumberOfItems }) => {
  return (
    <NavLink to='/cart' className="relative inline-block">
      <img
        src={notificationIconImage}
        alt="Notification Icon"
        className="h-8 w-8 text-gray-600"
      />
      
        <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
          {NumberOfItems}
        </span>
      
    </NavLink>
  );
};

export default CartIcon;
