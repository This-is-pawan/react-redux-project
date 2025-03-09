import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Homepage, Product, Cart,  Login } from "./myapp/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    children: [
      {
        index: true,
        element: <Product />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path:'/login',
        element:<Login/>
      }
    
    ],
    
  },

]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
