import React from "react";
import { Link } from "react-router-dom";
import AddToCart from "./AddToCartButton";
import FavoriteIcon from "./FavoriteIcon";

const ChildProduct = ({ product }) => {
  const { title, image, id, price } = product;
  return (
    <div className="product">
      <FavoriteIcon product={product} />

      <div className="fav-icon-img">
        <Link key={id} to={`/product/${id}`}>
          <img src={image} alt={title} />
          <p>{title}</p>
        </Link>
        <span>Price: </span> <span className="price">${price}</span>
        <AddToCart product={product} />
      </div>
    </div>
  );
};

export default ChildProduct;
