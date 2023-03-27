import React, { useState, useEffect } from "react";
import Categories from "../Components/Categories";
import Product from "../Components/product";
import Error from "../Components/Error";
import Header from "../Components/Header/Header";
import Loading from "../Components/Loading";
import useFetch from "../hooks/useFetch";
const Products = ({ page }) => {
  const { data, error, loading } = useFetch(
    "https://fakestoreapi.com/products"
  );
  const [filter, setFilter] = useState([]);
  useEffect(() => {
    setFilter(data);
  }, [data]);
  const filterProducts = (cat) => {
    const productList = data.filter((element) => element.category === cat);
    setFilter(productList);
  };

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (page === "home") {
    return (
      <>
        <Categories filterProducts={filterProducts} />
        <Product filter={filter} />
      </>
    );
  }
  return (
    <>
      <Header />
      <Categories filterProducts={filterProducts} />
      <Product filter={filter} />
    </>
  );
};

export default Products;
