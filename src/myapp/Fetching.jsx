import { useQuery } from "@tanstack/react-query";
import customfetch from "./Axios";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./CartSlice";
import { nanoid } from "@reduxjs/toolkit";
import Form from "./Form"
const fetchProducts = async () => {
  const { data } = await customfetch.get("/products");
  return data;
};

const ProductList = () => {
  const dispatch = useDispatch();
  const { showPopup } = useSelector((state) => state.cart);
 
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
 
  if (isLoading)
    return (
      <div className="flex justify-center">
        <span className="loading loading-spinner text-warning"></span>
      </div>
    );

  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      {showPopup && (
        <div className="fixed top-10 right-10 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
          Item added to cart!
        </div>
      )}

      

      {/* Product List */}
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Product List</h2> 
        <div className="m-4 grid place-item-center">
        <Form/>
          <\>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 shadow-md">
          {data?.map((product) => (
            <div key={product.id} className="p-4 rounded-lg shadow-lg bg-amber-50">
              <h3 className="text-lg font-semibold mb-2 text-amber-900">
                {product.title.slice(0, 20)}
              </h3>
              <div className="flex justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-50 object-cover rounded-lg"
                />
              </div>
              <div className="flex justify-around my-3">
                <span className="text-amber-950 bg-amber-200 rounded-xl p-1.5">
                  ${product.price}
                </span>
                <button
                  className="btn btn-primary w-[40%] text-[50%]"
                  onClick={() => dispatch(addToCart({ id: nanoid(), name: product.title, price:product.price,image:product.image }))}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
