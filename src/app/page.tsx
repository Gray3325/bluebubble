"use client"; //新增這行才能使用套件
import NavBar from "../components/navbar";
import styles from "./page.module.css";
import Carousel from "../components/carousel"
import Featured from "../components/FeaturedBlock";
import MultiImageCarousel from "../components/MultiImageCarousel";
import Footer from "../components/footer"; 
export default function Home() {
  return (
    <div className={styles.page}>
      {/* 導覽列 */}
      <NavBar/> 
      <main className={styles.main}>
        {/* 活動輪播 */}
        <Carousel/>
        {/* 特色區塊 */}
        <div className={styles.FeaturedBlock}>
          <Featured
            imgAlt='illustration'
            imgSrc='https://ih1.redbubble.net/image.5164288910.8373/ur,throw_pillow_couch_small,wide_portrait,600x600.jpg'
            h5Text='Diverse products'
            textText='There is a diverse range of products to choose from, ranging from clothing to stationery, tableware, and even phone cases.'
          />
          <Featured
            imgSrc='https://ih1.redbubble.net/image.5164288910.8373/ur,throw_pillow_couch_small,wide_portrait,600x600.jpg'
            imgAlt='illustration'
            h5Text='Customized printing'
            textText='We offer a service where you can choose your preferred designs to be printed into finished products.'
          />
          <Featured
            imgSrc='https://ih1.redbubble.net/image.5164288910.8373/ur,throw_pillow_couch_small,wide_portrait,600x600.jpg'
            imgAlt='illustration'
            h5Text='Creator Store'
            textText='We also offer a creator store service, where you can have your own artwork printed into finished products for sale.'
          />
        </div>
        {/* 隨機商品列 */}
        <MultiImageCarousel/>
        {/* 頁尾 */}
        <Footer/>
      </main>
    </div>
  );
}
