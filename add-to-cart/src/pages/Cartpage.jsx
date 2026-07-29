import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartPage = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <h1 className="text-4xl font-bold text-gray-600">
          🛒 Your Cart is Empty
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">
        Shopping Cart
      </h1>

      <div className="flex flex-col gap-6">
        {cart.map((item, index) => (
          <div
            key={item.id}
            className="flex justify-between items-center border rounded-xl shadow-lg p-5"
          >
            {/* Left Side */}
            <div className="flex gap-5 items-center">
              <img
                src={item.img}
                alt={item.description}
                className="w-32 h-36 object-cover rounded-lg"
              />

              <div>
                <h2 className="text-2xl font-semibold">
                  {item.description}
                </h2>

                <p className="text-gray-500 mt-1">
                  {item.pattern}
                </p>

                <p className="text-green-600 font-bold text-xl mt-2">
                  ₹{item.price}
                </p>

                {/* Quantity */}
                <div className="flex items-center gap-4 mt-4">
                  <button
                    onClick={() => decreaseQuantity(index)}
                    className="bg-gray-300 hover:bg-gray-400 px-3 py-1 rounded text-xl"
                  >
                    -
                  </button>

                  <span className="text-xl font-bold">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQuantity(index)}
                    className="bg-gray-300 hover:bg-gray-400 px-3 py-1 rounded text-xl"
                  >
                    +
                  </button>
                </div>

                <p className="font-bold text-lg mt-4">
                  Item Total : ₹{item.price * item.quantity}
                </p>
              </div>
            </div>

            {/* Right Side */}
            <button
              onClick={() => removeFromCart(index)}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-10 border-t pt-6 flex justify-between items-center">
        <h2 className="text-3xl font-bold">
          Grand Total
        </h2>

        <h2 className="text-3xl font-bold text-green-600">
          ₹{totalPrice}
        </h2>
      </div>

      <div className="flex justify-end mt-6">
        <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800">
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;