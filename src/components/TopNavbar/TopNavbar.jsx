import React from "react";
import styles from "./TopNavbar.module.scss";
import NikeLogo from "../../assets/svg/NikeLogoSvg";

const TopNavbar = () => {
  return (
    <div className={styles.TopNavbar}>
      <div className={styles.wrapper}>
        <div className="nike-logo">
          <NikeLogo className={"svg"} width={"60px"} height={"60px"} />
        </div>
        <div className={styles["bar-menu"]}>
          <ul className={styles.ul}>
            <li className={styles.li}>Neues und Highlights</li>
            <li className={styles.li}>Herren</li>
            <li className={styles.li}>Damen</li>
            <li className={styles.li}>Kinder</li>
            <li className={styles.li}>Sale</li>
          </ul>
        </div>
        <div className="actions"></div>
      </div>
    </div>
  );
};

export default TopNavbar;
