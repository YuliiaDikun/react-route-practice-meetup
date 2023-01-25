import { useContext } from "react";
import FavContext from "../store/fav-context";
import MeetupList from "../components/Meetups/MeetupList";
function Favorites() {
  const favoriteCnx = useContext(FavContext);
  let content;
  if (favoriteCnx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <MeetupList meetups={favoriteCnx.favorites} />;
  }
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}
export default Favorites;
