import { NavLink } from "react-router-dom";
import clsx from "clsx";

import styles from "./Navigation.module.css";

const stylesClassName = ({ isActive }) => clsx(styles.link, isActive && styles.active);

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <NavLink className={stylesClassName} to="/">
        Home
      </NavLink>
      <NavLink className={stylesClassName} to="/movies">
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
