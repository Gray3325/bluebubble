"use client"; //新增這行才能使用套件
import NavBar from "../../api/navbar";
import styles from "../page.module.css";
import Footer from "../../api/footer";
import Image from 'next/image'
import Redbubble from "../image/redbubble.png";
import KUSDOM from "../image/kusdom.png";
import Web from "../image/web.png";

export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar title='BLUEBUBBLE' navClass={styles.navbar} />
      <main className={styles.about}>
        <h1>Reference website</h1>
        <div className={styles.aboutSubB}>
          <div>
            <p>
              <span className={styles.bigStyles}>Redbubble</span> is a global online
              marketplace for print-on-demand products based on user-submitted
              artwork. The company was founded in 2006 in Melbourne,
              Australia, and also maintains offices in San Francisco and Berlin.
              The company operates primarily on the Internet and allows its
              members to sell their artwork as decoration on a variety of
              products. The company offers free membership to artists who
              maintain the copyrights to their work, regulate their own prices,
              and decide which products may display their images.
            </p>
            <Image alt='Redbubble LOGO' src={Redbubble} width={534} height={243}/>
          </div>
          <div>
            <p>
              <span className={styles.bigStyles}>KUSDOM</span> is a brand under IGP. IGP Corporation was founded
              in Hong Kong in 2008. It provides one-stop gift supply chain
              management services, including gift design, development,
              procurement, production management, quality inspection, logistics
              and various gift-related areas. The business is mainly
              concentrated in Asia.
            </p>
            <Image alt='KUSDOM LOGO' src={KUSDOM} width={534} height={243}/>
          </div>
          <div>
          <h2>
            GitHub Link: <a href="https://github.com/Gray3325/bluebubble">https://github.com/Gray3325/bluebubble</a>
          </h2>
          <Image alt="web" src={Web} width={931} height={718}/>
          </div>
          
        </div>
      </main>
      <Footer />
    </div>
  );
}
