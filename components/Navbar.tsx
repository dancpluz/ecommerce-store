'use client'

import Link from 'next/link';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

export default function Navbar() {
  return (
    <header className="navbar-container">
      <p className='logo'>
        <Link href='/'>Dropshit</Link>
      </p>

      <button type='button' className='cart-icon' onClick={event => console.log(event)}>
        <ShoppingBagOutlinedIcon />
        <span className='cart-item-qty'>1</span>
      </button>
    </header>
  );
}