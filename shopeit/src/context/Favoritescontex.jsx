import React, { createContext, useState, useEffect } from "react";
export const FavoriteContext = createContext();

export const FavoriteContextProvider = ({ children }) => {
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [urlFavorites, setUrlFavorites] = useState();

  useEffect(() => {
    setUrlFavorites(
      favoriteIds.map((id) => `https://fakestoreapi.com/products/${id}`)
    );
  }, [favoriteIds]);
  const addFavoriteIds = (id) => {
    setFavoriteIds((prevState) => [...prevState, id]);
  };

  const deleteFavoriteIds = (id) => {
    setFavoriteIds(favoriteIds.filter((element) => element !== id));
  };

  return (
    <FavoriteContext.Provider
      value={{ favoriteIds, urlFavorites, addFavoriteIds, deleteFavoriteIds }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
