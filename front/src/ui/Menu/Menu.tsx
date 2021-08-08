import React from "react";
import { Component } from "../../features/api/apiSlice";
import styles from "./Menu.module.css";

interface Props {
  menuItems: Component["product"][];
  setCurrentProduct: React.Dispatch<React.SetStateAction<string>>;
}

const Menu = ({ menuItems, setCurrentProduct }: Props) => {
  return (
    <div className={styles.Menu}>
      {menuItems.map((menuItem) => (
        <div
          onClick={() => setCurrentProduct(menuItem.code)}
          className={styles.MenuItem}
          key={menuItem.code}
        >
          {menuItem.label}
        </div>
      ))}
    </div>
  );
};

export default Menu;
