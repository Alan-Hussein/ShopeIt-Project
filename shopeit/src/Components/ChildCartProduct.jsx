import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/Cartcontext";
import Counter from "./Counter";

const ChildCartProduct = ({ product, data ,updateQuantity}) => {
  const { title, image, id, price , quantity} = product;

  return (
    <div key={id}>
      <div className="cartproducts">
        <img src={image} alt={title} />
        <p>{title}</p>
        <span className="price">${price}</span>
        <Counter price={price} id={id} updateQuantity={updateQuantity} />
      </div>
    </div>
  );
};

export default ChildCartProduct;
