import React from "react";
import styles from "./Header.module.scss";
import { Logo } from "../../assets/svg/Logo";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="">
            <Logo width={"36px"} height="36px" />
          </a>
        </div>
        <div className={styles.actions}>
          <ul>
            <li>Find a store</li>
            <div className={[styles.line]}>|</div>
            <li>Help</li>
            <div className={styles.line}>|</div>
            <li>Join us</li>
            <div className={styles.line}>|</div>
            <li>Sign in</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
