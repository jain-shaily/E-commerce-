import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);


  const addToCart = (product) => {

    const existingProduct = cart.find(
      (item) => item.id === product.id
    );


    if (existingProduct) {

      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      );

      setCart(updatedCart);

    } else {

      setCart([
        ...cart,
        {
          ...product,
          quantity: 1
        }
      ]);

    }

  };


  const increaseQuantity = (index) => {

    const updatedCart = [...cart];

    updatedCart[index].quantity += 1;

    setCart(updatedCart);

  };


  const decreaseQuantity = (index) => {

    const updatedCart = [...cart];

    if(updatedCart[index].quantity > 1){
      updatedCart[index].quantity -= 1;
    }

    setCart(updatedCart);

  };


  const removeFromCart = (index) => {

    const updatedCart = cart.filter(
      (_, i) => i !== index
    );

    setCart(updatedCart);

  };


  return (

    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart
      }}
    >

      {children}

    </CartContext.Provider>

  );

};


export default CartProvider;