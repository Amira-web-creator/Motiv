import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteCars) => {},
  removeFavorite: (carId) => {},
  itemIsFavorite: (carId) => {},
}); //the initial value is an object or any value

export function favouriteContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteCars) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteCars);
    });
  }
  function removeFavoriteHandler(carId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((car) => car.id !== carId);
    });
  }

  function itemIsFavoriteHandler(carId) {
    return userFavorites.some((car) => car.id === carId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
