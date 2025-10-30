import React from 'react';
import { FaTrash } from 'react-icons/fa6';
import { useSelector,useDispatch } from 'react-redux';
import { removeFromCart } from "./CartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, price } = useSelector((state) => state.cart);

  return (
    <div>
     
      <div className=" bg-amber-100 p-4 rounded-lg shadow-md">
        <h1 className='text-black text-2xl font-bold'>{`Total Price: $${price}`}</h1>
      </div>
      <div className="showing text-3xl text-amber-100 border p-4 space-y-4">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div className="grid place-items-center grid-cols-4 text-2xl mb-2 shadow-lg bg-amber-300 p-4 rounded-lg" key={item.id}>
               <div className="flex justify-end cursor-pointer transition duration-300 ease-in-out hover:text-amber-200">
  <FaTrash color="black" className="hover:text-amber-200 transform hover:scale-110" onClick={() => dispatch(removeFromCart(item.id))} />
</div>
              <span className="text-3xl font-bold"> Name: {item.name.slice(0, 20)} </span>
              <span className="text-xl text-amber-100 block"> Price: ${Math.round(item.price)} </span>
              <img 
                src={item.image} 
                alt={item.name} 
                className='h-50 object-cover rounded-lg mt-2 opacity-65' 
              />
            </div>
          ))
        ) : (
          <p className="text-lg text-gray-500">No items in cart</p>
        )}
      </div>
    </div>
  );
}

export default Cart;
