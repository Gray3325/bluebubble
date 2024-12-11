"use client"; //新增這行才能使用套件
import NavBar from "../components/navbar";
import styles from "./page.module.css";
import Carousel from "../components/carousel";
import Featured from "../components/FeaturedBlock";
import MultiImageCarousel from "../components/MultiImageCarousel";
import Footer from "../components/footer";
export default function Home() {
  return (
    <div className={styles.page}>
      {/* 導覽列 */}
      <NavBar />
      <main className={styles.main}>
        {/* 活動輪播 */}
        <Carousel />
        {/* 特色區塊 */}
        <Featured />
        {/* 隨機商品列 */}
        <MultiImageCarousel />
        {/* 頁尾 */}
        <Footer />
      </main>
    </div>
  );
}
