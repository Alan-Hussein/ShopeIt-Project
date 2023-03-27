import React, { useContext, useState } from "react";
import { CartContext } from "../context/Cartcontext";
function AddToCartButton({ product }) {
  const { id } = product;
  const { cartIds, addCartIds, deleteCartIds } = useContext(CartContext);
  const [isInCart, setIsInCart] = useState(true);
  function toggleButton(id) {
    if (isInCart) {
      addCartIds(id);
      setIsInCart(false);
    }
    if (!isInCart) {
      deleteCartIds(id);
      setIsInCart(true);
    }
  }
  return (
    <button
      className={isInCart ? "add to cart" : "cancel"}
      onClick={() => toggleButton(id)}
    >
      {isInCart ? "add to cart" : "cancel"}
    </button>
  );
}

export default AddToCartButton;
