"use client"; //新增這行才能使用套件
import NavBar from "./navbar";
import styles from "./page.module.css";
import Slick from "./Slick";
import Featured from "./Featured_block";

export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar title='BULEBUBBLE' navClass={styles.navbar}/>
      <main className={styles.main}>
        <Slick/>
        <Featured
          css={styles.FeaturedCss}
          imgSrc=""
          imgAlt="1"
          imgCss=""
          textCss=""
          textText="textttttts"
        />
      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
