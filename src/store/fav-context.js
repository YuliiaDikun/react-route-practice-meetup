import { createContext, useState } from "react";

const FavContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {}
});

export function FavoritesContextProvider(props) {
  const [userFav, setUserFav] = useState([]);
  const addFavMeetup = (favMeetup) => {
    setUserFav((prevState) => prevState.concat(favMeetup));
  };
  const removeFavMeetup = (meetupId) => {
    setUserFav((prevState) =>
      prevState.filter((meetup) => meetup.id !== meetupId)
    );
  };
  const itemIsFav = (meetupId) => {
    return userFav.some((meetup) => meetup.id === meetupId);
  };

  const context = {
    favorites: userFav,
    totalFavorites: userFav.length,
    addFavorite: addFavMeetup,
    removeFavorite: removeFavMeetup,
    itemIsFavorite: itemIsFav,
  };
  return (
    <FavContext.Provider value={context}>{props.children}</FavContext.Provider>
  );
}
export default FavContext;
