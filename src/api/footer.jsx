import React from "react";
import style from "../app/page.module.css";
export default function Footer() {
  return (
    
    <div className={style.footer}>
      <div className={style.footerProducts}>
        <h2><a href="">Products</a></h2>
        <h4><a href="">Clothings</a></h4>
        <h4><a href="">Kitchen supplies</a></h4>
        <h4><a href="">Housewares</a></h4>
        <h4><a href="">Stationery</a></h4>
        <h4><a href="">Cellphone case</a></h4>
      </div>
      <h2><a href="">About Us</a></h2>
      <h2><a href="">Privacy Policy</a></h2>
      <h2><a href="">Payment</a></h2>
    <h6>© BLUEBUBBLE. All Rights Reserved</h6>

    </div>
    
  );
}
