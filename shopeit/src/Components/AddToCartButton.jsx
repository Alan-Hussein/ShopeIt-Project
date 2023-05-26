import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/Cartcontext";

function AddToCartButton({ product }) {
  const { id } = product;
  const { cartIds, addCartIds, deleteCartIds } = useContext(CartContext);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    setIsInCart(cartIds.includes(id));
  }, [cartIds, id]);

  function toggleButton(id) {
    if (isInCart) {
      deleteCartIds(id);
      setIsInCart(false);
    } else {
      addCartIds(id);
      setIsInCart(true);
    }
  }

  return (
    <button
      className={isInCart ? "cancel" : "add-to-cart"}
      onClick={() => toggleButton(id)}
    >
      {isInCart ? "Remove " : "Add to cart"}
    </button>
  );
}

export default AddToCartButton;
