export default function NavBar(params) {
  return (
    <nav className={params.navClass}>
      <a href=''>{params.title}</a>
      <a href=''>Naws</a>
      <a href=''>About Us</a>
      <a href=''>Products</a>
      <a href=''>
        <i className='fi fi-rr-search'></i>
      </a>
      <a href=''>
        <i className='fi fi-rr-heart'></i>
      </a>
      <a href=''>
        <i className='fi fi-rr-shopping-cart'></i>
      </a>
    </nav>
  );
}
