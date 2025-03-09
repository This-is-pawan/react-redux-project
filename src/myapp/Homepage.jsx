import { Outlet } from "react-router-dom";
import NavLinks from "./NavLinks";
import { FaCartFlatbed, FaCartPlus, FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import Login from "./Login";

const Homepage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div>
      <div className="sticky top-0 w-full bg-sky-900 flex justify-center py-4">
        <NavLinks />
        <div className="relative">
          <span className=" w-5 h-5.5 absolute bottom-6 rounded-2xl left-4 bg-amber-300 text-center text-amber-700">   {cartItems.length}</span>
         <FaCartShopping size={35}/>
        </div>
         {/* <Login/> */}
        
      </div>
      <Outlet />
    </div>
  );
};

export default Homepage;
