import React from "react";
import { useRouter } from "next/navigation";
import style from "./footer.module.css";
const footers = ["Products", "About", "Privacy Policy", "Payment"];

export default function Footer() {
  const router = useRouter();

  return (
    <div className={style.footer}>
      <div className={style.footerButtons}>
        {footers.map((footer) => (
          <button
            key={footer}
            className={style.footerButton}
            onClick={() => router.push(footer.replace(/\s/g, "").toLowerCase())}
            // 把字串中的空白移除並改成全小寫
          >
            <h2>{footer}</h2>
          </button>
        ))}
      </div>
      <h6>© BLUEBUBBLE. All Rights Reserved</h6>
    </div>
  );
}
