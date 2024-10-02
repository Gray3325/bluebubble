import Link from "next/link";

// 'use server'
export default function NavBar(params) {
  return (
    <nav className={params.navClass}>
      <a href=''>{params.title}</a>
      <a href=''>News</a>
      <a href=''>About Us</a>
      <Link href="/products">Products</Link>
      <a href=''>
        <i className='fi fi-rr-search'></i>
      </a>
      <a href=''>
        <i className='fi fi-rr-heart'></i>
      </a>
      <a href=''>
        <i className='fi fi-rr-shopping-cart'></i>
      </a>
      <a href=''>Login</a>
    </nav>
  );
}
