import React, { useContext } from "react";
import { FavoriteContext } from "../context/Favoritescontex";
import ChildProduct from "./ChildProduct";
import Header from "../Components/Header/Header";
import useFetchFavorite from "../hooks/useFetchFavorite";
import Error from "../Components/Error";
import Loading from "../Components/Loading";

const Favorites = () => {
  const { urlFavorites } = useContext(FavoriteContext);
  const { data, loading, error } = useFetchFavorite(urlFavorites);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  return (
    <>
      <Header page="Favorites" />
      <h1>Favorites</h1>
      <div className="products">
        {data.length !== 0 ? (
          data.map((product, index) => {
            return <ChildProduct key={index} product={product} />;
          })
        ) : (
          <p>You haven't chosen any favorites yet!</p>
        )}
      </div>
    </>
  );
};

export default Favorites;
