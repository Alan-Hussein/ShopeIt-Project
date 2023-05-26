import React, { createContext, useState, useEffect } from "react";

export const FavoriteContext = createContext();

export const FavoriteContextProvider = ({ children }) => {
  const storedFavorites = localStorage.getItem("favorites");
  const initialFavorites = storedFavorites ? JSON.parse(storedFavorites) : [];

  const [favoriteIds, setFavoriteIds] = useState(initialFavorites);
  const [urlFavorites, setUrlFavorites] = useState([]);

  useEffect(() => {
    setUrlFavorites(
      favoriteIds.map((id) => `https://fakestoreapi.com/products/${id}`)
    );
    localStorage.setItem("favorites", JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  const addFavoriteIds = (id) => {
    setFavoriteIds((prevState) => {
      const updatedFavorites = [...prevState, id];
      return updatedFavorites;
    });
  };

  const deleteFavoriteIds = (id) => {
    setFavoriteIds((prevState) => {
      const updatedFavorites = prevState.filter((element) => element !== id);
      return updatedFavorites;
    });
  };

  return (
    <FavoriteContext.Provider
      value={{ favoriteIds, urlFavorites, addFavoriteIds, deleteFavoriteIds }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
