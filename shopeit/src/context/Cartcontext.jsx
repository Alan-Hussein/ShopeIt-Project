import React, { createContext, useState, useEffect } from "react";
export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartIds, setCartIds] = useState([]);
  const [urlCart, setUrlCart] = useState();

  useEffect(() => {
    setUrlCart(cartIds.map((id) => `https://fakestoreapi.com/products/${id}`));
  }, [cartIds]);
  const addCartIds = (id) => {
    setCartIds((prevState) => [...prevState, id]);
  };

  const deleteCartIds = (id) => {
    setCartIds(cartIds.filter((element) => element !== id));
  };


  return (
    <CartContext.Provider
      value={{ cartIds, urlCart, addCartIds, deleteCartIds }}
    >
      {children}
    </CartContext.Provider>
  );
  
};
