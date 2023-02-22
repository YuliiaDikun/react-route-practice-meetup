import { Outlet } from "react-router-dom";
import css from "./Layout.module.css";
import MainNav from "./MainNav";
function Layout(props) {
  return (
    <div>
      <MainNav />
      <main className={css.main}>
        <Outlet /> {props.children}
      </main>
    </div>
  );
}

export default Layout;
