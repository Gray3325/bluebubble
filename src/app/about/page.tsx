"use client"; //新增這行才能使用套件
import NavBar from "../../api/navbar";
import styles from "../page.module.css";
import Slick from "../../api/newsSlick";
import Featured from "../../api/Featured_block";
import RandomItems from "../../api/randomSlick";
import Footer from "../../api/footer"; 

export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar title='BLUEBUBBLE' navClass={styles.navbar} />
      <main className={styles.main}>
        <Slick />
        <div className={styles.FeaturedBlock}>
          <Featured
            css={styles.FeaturedCss}
            imgAlt='illustration'
            imgSrc='https://ih1.redbubble.net/image.5164288910.8373/ur,throw_pillow_couch_small,wide_portrait,600x600.jpg'
            h5Text='Diverse products'
            textText='There is a diverse range of products to choose from, ranging from clothing to stationery, tableware, and even phone cases.'
          />
          <Featured
            css={styles.FeaturedCss}
            imgSrc='https://ih1.redbubble.net/image.5164288910.8373/ur,throw_pillow_couch_small,wide_portrait,600x600.jpg'
            imgAlt='illustration'
            h5Text='Customized printing'
            textText='We offer a service where you can choose your preferred designs to be printed into finished products.'
          />
          <Featured
            css={styles.FeaturedCss}
            imgSrc='https://ih1.redbubble.net/image.5164288910.8373/ur,throw_pillow_couch_small,wide_portrait,600x600.jpg'
            imgAlt='illustration'
            h5Text='Creator Store'
            textText='We also offer a creator store service, where you can have your own artwork printed into finished products for sale.'
          />
        </div>
        <RandomItems />
        <Footer/>
      </main>
    </div>
  );
}
