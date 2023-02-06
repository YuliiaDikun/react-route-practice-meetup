import { useContext } from "react";
import FavContext from "../../store/fav-context";
import css from "./MeetupItem.module.css";
import Card from "../UI/Card";
function MeetupItem({ meetup }) {
  const favoritesCnx = useContext(FavContext);
  const itemIsFav = favoritesCnx.itemIsFavorite(meetup.id);

  const toggleFavStatus = () => {
    if (itemIsFav) {
      favoritesCnx.removeFavorite(meetup.id);
    } else {
      favoritesCnx.addFavorite(meetup);
    }
  };

  return (
    <li className={css.item}>
      <Card>
        <div className={css.image}>
          <img src={meetup.image} alt={meetup.title} />
        </div>

        <div className={css.content}>
          <h3>{meetup.title}</h3>
          <address>{meetup.address}</address>
          <p>{meetup.description}</p>
        </div>
        <div className={css.actions}>
          <button onClick={toggleFavStatus}>
            {itemIsFav ? "Remove from Favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}
export default MeetupItem;
