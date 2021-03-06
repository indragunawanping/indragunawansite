import styles from "./NavigationItems.module.css";
import { NavLink } from "react-router-dom";
import React from "react";

const NavigationItems = () => {
  return (
      <ul className={styles.NavigationItems}>
        <li className={styles.NavigationItem}>
          <NavLink
            to='/indragunawansite/'
            exact
            activeClassName={styles.active}
          >Home
          </NavLink>
        </li>
        <li className={styles.NavigationItem}>
          <NavLink
            to='/indragunawansite/photography'
            activeClassName={styles.active}>Photography
          </NavLink>
        </li>
        <li className={styles.NavigationItem}>
          <NavLink
            to='/indragunawansite/design'
            activeClassName={styles.active}>Design
          </NavLink>
        </li>
        <li className={styles.NavigationItem}>
          <NavLink
            to='/indragunawansite/programming'
            activeClassName={styles.active}>Programming
          </NavLink>
        </li>
        <li className={styles.NavigationItem}>
          <NavLink
            to='/indragunawansite/about-me'
            activeClassName={styles.active}>About Me
          </NavLink>
        </li>
      </ul>
  )
};

export default NavigationItems;
