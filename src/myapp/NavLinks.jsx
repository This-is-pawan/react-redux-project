import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toggleLogin } from "./CartSlice";

const NavLinks = () => {
  const dispatch = useDispatch();
  const loginpage = useSelector((state) => state.cart.login);

  return (
    <div>
      <NavLink to="/" className='text-2xl capitalize text-sky-400 m-4'>Products</NavLink>
      <NavLink to="/cart" className='text-2xl capitalize text-sky-400 m-4'>Cart</NavLink>
      <NavLink to="/login" className='text-2xl capitalize text-sky-400 m-4' onClick={() => dispatch(toggleLogin())}>
      <button className="btn btn-accent" > {loginpage ? 'Logout' : 'Login'}</button> 
      </NavLink>
    </div>
  );
};
'4'

export default NavLinks;
