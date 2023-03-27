import React, { useState } from "react";
import Error from "./Error";
import useFetch from "../hooks/useFetch";
import Loading from "./Loading";
import { Link } from "react-router-dom";

const Categories = ({ filterProducts }) => {
  const [selectCat, setSelectCat] = useState([]);
  const url = "https://fakestoreapi.com/products/categories";
  const { data, error, loading } = useFetch(url);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  return (
    <div className="categories">
      <Link to="/favorites" className="category">
        <p>Favourites</p>
      </Link>
      <Link to="/cart" className="category">
        <p>Cart</p>
      </Link>
      <nav>
        {data.map((cat, index) => {
          return (
            <button
              key={index}
              className="category"
              onClick={() => {
                filterProducts(cat);
                setSelectCat(index);
              }}
            >
              {cat}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Categories;
