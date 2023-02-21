import { useContext } from "react";
import FavContext from "../../store/fav-context";
import { NavLink } from "react-router-dom";
import css from "./MainNav.module.css";
function MainNav() {
  const FavoriteCnx = useContext(FavContext);
  return (
    <header className={css.header}>
      <div className={css.logo}>
        {" "}
        <NavLink to="/" end>
          React Meetups{" "}
        </NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end>
              All Meetups
            </NavLink>
          </li>
          <li>
            <NavLink to="/newmeetup">New Meetup</NavLink>
          </li>
          <li>
            <NavLink to="/favotites">
              My Favorites:{" "}
              <span className={css.badge}>{FavoriteCnx.totalFavorites}</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
