import NavBar from "./navbar";
import styles from "./page.module.css";
export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar title='BULEBUBBLE' navClass={styles.nacbar}/>
      <main className={styles.main}>
        
      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
