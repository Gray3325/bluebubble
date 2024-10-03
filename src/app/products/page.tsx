"use client"; //新增這行才能使用套件

import NavBar from "../../api/navbar";
import styles from "../page.module.css"; 
export default function Products(){

    return(
        <>
        <NavBar title='BLUEBUBBLE' navClass={styles.navbar} />
        
        </>
    );

}