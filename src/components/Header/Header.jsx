import React from "react";
import styles from "./Header.module.scss";
import { Logo } from "../../assets/svg/Logo";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="">
            <Logo width={"36px"} height="36px" />
          </a>
        </div>
        <div className={styles.actions}>
          <ul className={styles.ul}>
            <li className={styles.li}>Find a store</li>
            <div className={[styles.line]}>|</div>
            <li className={styles.li}>Help</li>
            <div className={styles.line}>|</div>
            <li className={styles.li}>Join us</li>
            <div className={styles.line}>|</div>
            <li className={styles.li}>Sign in</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
