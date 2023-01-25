import { NavLink } from "react-router-dom";
import css from "./MainNav.module.css";
function MainNav() {
  return (
    <header className={css.header}>
      <div className={css.logo}>React Meetups</div>
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
            <NavLink to="/favotites">Favorites</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
