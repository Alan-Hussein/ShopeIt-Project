import React, { useContext } from "react";
import { FavoriteContext } from "../context/Favoritescontex";
import heartRegular from "../assets/heart-regular.svg";
import heartSolid from "../assets/heart-solid.svg";

const FavoriteIcon = ({ product }) => {
  const { id } = product;
  const { favoriteIds, addFavoriteIds, deleteFavoriteIds } =
    useContext(FavoriteContext);

  const favoritedProduct = (id) => {
    return favoriteIds.some((item) => item === id);
  };
  return (
    <div className="fav-icon ">
      {favoritedProduct(id) ? (
        <img
          className="icon"
          src={heartSolid}
          alt="favorite-icon"
          onClick={() => {
            deleteFavoriteIds(id);
          }}
        />
      ) : (
        <img
          className="icon"
          src={heartRegular}
          alt="favorite-icon"
          onClick={() => {
            addFavoriteIds(id);
          }}
        />
      )}
    </div>
  );
};

export default FavoriteIcon;
