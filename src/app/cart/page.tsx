"use client"; //新增這行才能使用套件
import NavBar from "../../components/navbar";
import styles from "./page.module.css";
import Footer from "../../components/footer";

export default function aboutUs() {
  return (
    <div className={styles.page}>
      <NavBar />
      <div>
        <div>
          <h1>Cart</h1>
          <h4>4 Item</h4>
          <h4>$33.90</h4>
        </div>
        <div></div>
      </div>

      <Footer />
    </div>
  );
}
