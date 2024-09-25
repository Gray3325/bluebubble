"use client";
import NavBar from "./navbar";
import styles from "./page.module.css";
import Slick from "./Slick";
export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar title='BULEBUBBLE' navClass={styles.navbar}/>
      <main className={styles.main}>
        <Slick/>
      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
