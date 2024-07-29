import React from "react";
import styles from "./TopNavbar.module.scss";
import NikeLogo from "../../assets/svg/NikeLogoSvg";

const TopNavbar = () => {
  return (
    <div className={styles.TopNavbar}>
      <div className={styles.wrapper}>
        <div className="nike-logo">
          <NikeLogo width={"60px"} height={"60px"} />
        </div>
        <div className={styles["bar-menu"]}>
          <ul className="menu-items">
            <li>Neues und Highlights</li>
            <li>Herren</li>
            <li>Damen</li>
            <li>Kinder</li>
            <li>Sale</li>
          </ul>
        </div>
        <div className="actions"></div>
      </div>
    </div>
  );
};

export default TopNavbar;
