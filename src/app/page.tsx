"use client"; //新增這行才能使用套件
import NavBar from "./navbar";
import styles from "./page.module.css";
import Slick from "./newsSlick";
import Featured from "./Featured_block";
// import RandomItems from "./randomItems";
import RandomItems from "./randomSlick";

export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar title='BULEBUBBLE' navClass={styles.navbar} />
      <main className={styles.main}>
        <Slick />
        <div className={styles.FeaturedBlock}>
          <Featured
            css={styles.FeaturedCss}
            imgSrc=''
            imgAlt='illustration'
            imgCss=''
            h5Css=''
            h5Text='Diverse products'
            textCss=''
            textText='There is a diverse range of products to choose from, ranging from clothing to stationery, tableware, and even phone cases.'
          />
          <Featured
            css={styles.FeaturedCss}
            imgSrc=''
            imgAlt='illustration'
            imgCss=''
            h5Css=''
            h5Text='Customized printing'
            textCss=''
            textText='We offer a service where you can choose your preferred designs to be printed into finished products.'
          />
          <Featured
            css={styles.FeaturedCss}
            imgSrc=''
            imgAlt='illustration'
            imgCss=''
            h5Css=''
            h5Text='Creator Store'
            textCss=''
            textText='We also offer a creator store service, where you can have your own artwork printed into finished products for sale.'
          />
        </div>
        <RandomItems />  
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
