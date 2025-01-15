import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";
import styles from "/src/components/Navigation/Navigation.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(styles.link, isActive && styles.active);
};

const Navigation = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to="/movies">
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
