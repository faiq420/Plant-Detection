import React from "react";
import styles from "./BarLoader.module.css";

const BarLoader = () => {
  return (
    <div className="">
      <div className={`${styles.loading}`}>
        <div className={`${styles.loadingBar}`}></div>
        <div className={`${styles.loadingBar}`}></div>
        <div className={`${styles.loadingBar}`}></div>
        <div className={`${styles.loadingBar}`}></div>
      </div>
    </div>
  );
};

export default BarLoader;
