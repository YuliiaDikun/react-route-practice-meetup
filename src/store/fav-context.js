import { createContext, useState } from "react";

const FavContext = createContext({
  favorites: [],
  totalFavorites: 0,
});

function FavoritesContextProvider(props) {
    const [userFav, setUserFav] = useState([]);
const addFavMeetup = (favMeetup) => {
    setUserFav(prevState => prevState.concat(favMeetup))
}
const removeFavMeetup = (meetupId) => {
    setUserFav(prevState => prevState.filter(meetup => meetup.id !== meetupId))
}
const itemIsFav = (meetupId) => {
return userFav.some(meetup => meetup.id === meetupId)
}

    const context ={
        favorites: userFav,
        totalFavorites : userFav.length
    };
  return <FavContext.Provider value={context}>{props.children}</FavContext.Provider>;
}
