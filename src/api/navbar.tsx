import { useRouter } from 'next/navigation'
import styles from "./NavBar.module.css"
export default function NavBar() {
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <button type="button" onClick={() => router.push('/')}>BLUEBUBBLE</button>
      <button type="button">News</button>
      <button type="button" onClick={() => router.push('/about')}>About Us</button>
      <button type="button" onClick={() => router.push('/products')}>Products</button>
      <button type="button">
        <i className='fi fi-rr-search'></i>
      </button>
      <button type="button">
        <i className='fi fi-rr-heart'></i>
      </button>
      <button type="button">
        <i className='fi fi-rr-shopping-cart'></i>
      </button>
      <button type="button">Login</button>
    </nav>
  );
}
