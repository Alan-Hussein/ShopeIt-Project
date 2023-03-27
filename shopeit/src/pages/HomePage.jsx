import React from "react";
import Header from "../Components/Header/Header";
import Home from "../Components/LandingPage/Home";
import Products from "./Products";

function HomePage() {
  return (
    <>
      <Header />
      <Home />
      <Products page="home"/>
    </>
  );
}

export default HomePage;
