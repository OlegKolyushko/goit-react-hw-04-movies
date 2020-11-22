import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import routes from "../../routes";

function Navigation() {
  return (
    <header className={styles.header}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink
            exact
            to={routes.HomePage}
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.MoviesPage}
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Navigation;
