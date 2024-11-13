import React from "react";
import styles from "./FeaturedBlock.module.css";

export default function Featured(promes) {
  return (
    <div className={styles.FeaturedCss}>
      <img src={promes.imgSrc} alt={promes.imgAlt} />
      <h3>{promes.h5Text}</h3>
      <p>{promes.textText}</p>
    </div>
  );
}
