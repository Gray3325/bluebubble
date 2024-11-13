"use client"; //新增這行才能使用套件

import NavBar from "../../api/navbar";
import styles from "./page.module.css";
import Select from "./select-material";
import TextField from "./textField-material";
import SingleCard from "./card-material";
// import Rabbit from "../image/moonRabbit.jpg";

export default function Products() {
  return (
    <div className={styles.page}>
      <NavBar  />
      <div className={styles.product}></div>
      <div className={styles.main}>
        <div className={styles.searchBar}>
          {/* 放下拉選單的地方 */}
          <Select />

          {/* 放搜尋欄位 */}
          <TextField />
        </div>
        <div className={styles.manyCards}> 
        {/* 放卡片的地方 */}
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        </div>
      </div>
    </div>
  );
}
