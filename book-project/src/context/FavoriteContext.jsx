import React, { createContext, useEffect, useState } from 'react';

export const FavoriteContext = createContext();

function FavoriteProvider({ children }) {

  let localFavorite = localStorage.getItem("favorites");
  let [favorites, setFavorites] = useState(localFavorite ? JSON.parse(localFavorite) : []);

  useEffect(() => {
  
    if (favorites) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites]);

  let value = {
    favorites,
    setFavorites
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteProvider;
