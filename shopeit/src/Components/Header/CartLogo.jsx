import React from "react";
import { Link } from "react-router-dom";
import cart from "./../../assets/cart.png";

function Cart() {
  return (
    <div className="cart">
      <Link to={"/cart"}>
        <img src={cart} alt="cart" />
      </Link>
    </div>
  );
}

export default Cart;
