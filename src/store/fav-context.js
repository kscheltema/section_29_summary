import { createContext, useState } from "react";

const FavContext = createContext({
  favorites: [],
  totalFav: 0,
  addFavorite: (favoriteMeetup) => {}, //these pointers used in this component
  removeFavorite: (meetupID) => {}, //is added for auto completion of the IDE
  itemIsFavorite: (meetupID) => {},
}); //initial value is passed as an argument

export function FavoritesContextProvider(props) {
  const [userFav, setUserFav] = useState([]);

  function addFavHandler(favoriteMeetup) {
    setUserFav((prevUserFav) => {
      return prevUserFav.concat(favoriteMeetup); //concat cause add item in a new array
    }); //be careful of scheduled state updates
  }

  function removeFavHandler(meetupID) {
    setUserFav((prevUserFav) => {
      return prevUserFav.filter((meetup) => meetup.id !== meetupID); //filter cause remove item in a new array
    });
  }

  function itemIsFavHandler(meetupID) {
    return userFav.some((meetup) => meetup.id === meetupID); //matching ID returns true
  }

  const context = {
    favorites: userFav,
    totalFavorites: userFav.length,
    addFavorite: addFavHandler,
    removeFavorite: removeFavHandler,
    itemIsFavorite: itemIsFavHandler,
  };

  return (
    <FavContext.Provider value={context}>{props.children}</FavContext.Provider>
  );
}

export default FavContext;
