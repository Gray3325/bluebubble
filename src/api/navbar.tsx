import { useRouter } from 'next/navigation'
export default function NavBar(params) {
  const router = useRouter();

  return (
    <nav className={params.navClass}>
      <button type="button" onClick={() => router.push('/')}>{params.title}</button>
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
