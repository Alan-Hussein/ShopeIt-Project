import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const storedCart = localStorage.getItem("cartIds");
  const initialCartIds = storedCart ? JSON.parse(storedCart) : [];
  const [cartIds, setCartIds] = useState(initialCartIds);
  const [urlCart, setUrlCart] = useState([]);

  useEffect(() => {
    localStorage.setItem("cartIds", JSON.stringify(cartIds));
    setUrlCart(cartIds.map((id) => `https://fakestoreapi.com/products/${id}`));
  }, [cartIds]);

  const addCartIds = (id) => {
    setCartIds((prevState) => [...prevState, id]);
  };

  const deleteCartIds = (id) => {
    setCartIds((prevState) => prevState.filter((element) => element !== id));
  };
  const clearCart = () => {
    setCartIds([]);
  };

  return (
    <CartContext.Provider
      value={{ cartIds, urlCart, addCartIds, deleteCartIds,clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
