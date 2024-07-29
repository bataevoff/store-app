import React from "react";
import styles from "./Container.module.scss";

const Container = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Container;
