import React from "react";
import Navigation from "../Navigation/Navigation";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Navigation />
      {children}
    </div>
  );
}

export default Layout;
