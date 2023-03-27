import React from "react";
import Error from "../Components/Error";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loading from "../Components/Loading";
import Header from "../Components/Header/Header";
import FavoriteIcon from "../Components/FavoriteIcon";
import AddToCart from "../Components/AddToCartButton";

const ProductDetails = () => {
  const { id } = useParams();

  const { data, error, loading } = useFetch(
    `https://fakestoreapi.com/products/${id}`
  );

  // if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  return (
    <>
      <Header page="Favourites" />
      <div className="product_Details">
        <FavoriteIcon product={data} />
        <div className="img">
          <img src={data.image} alt={data.id} />
        </div>
        <div className="descriptions">
          <h3 className="product_title">{data.title}</h3>
          <p className="product_description">{data.description}</p>
          <p className="price">${data.price}</p>
          <AddToCart product={data} />
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
