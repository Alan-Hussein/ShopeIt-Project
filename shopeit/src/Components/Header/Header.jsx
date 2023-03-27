import React from "react";
import Cart from "./CartLogo";
import Logo from "./Logo";
import NavBar from "./NavBar";

function Header({ page }) {
  return (
    <div className={page === "Favourites" ? "favoritesHeader" : "header"}>
      <Logo />
      <NavBar />
      <Cart />
    </div>
  );
}

export default Header;
