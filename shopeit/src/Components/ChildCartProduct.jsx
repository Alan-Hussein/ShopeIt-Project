import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/Cartcontext";
import Counter from "./Counter";

const ChildCartProduct = ({ product }) => {
  const { title, image, id, price } = product;
  return (
    <div>
      <div className="cartproducts">
        <img src={image} alt={title} />
        <p>{title}</p>
        <span className="price">${price}</span>
        <Counter price={price} id={id} />
      </div>
    </div>
  );
};

export default ChildCartProduct;
