import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <Link className="a" to={"/"}>
        Home
      </Link>
      <Link className="a" to={"/products"}>
        Products
      </Link>
      <Link className="a" to={"/favorites"}>
        Favorites
      </Link>
      <Link className="a" to={"/Cart"}>
        Cart
      </Link>
    </div>
  );
}

export default NavBar;
