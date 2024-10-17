"use client"; //新增這行才能使用套件

import NavBar from "../../api/navbar";
import styles from "../page.module.css";

// import DropdownMenu from "./dropdown";
import Select from "./select-react";

export default function Products() {
  return (
    <div className={styles.page}>
      <NavBar title='BLUEBUBBLE' navClass={styles.navbar} />
      <div className={styles.product}></div>
      <div className={styles.main}>
        <div className={styles.searchBar}>
          <div className={styles.selectComponent}>
            <Select />
          </div>
          <input></input>
        </div>
      </div>
    </div>
  );
}
