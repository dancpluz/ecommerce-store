'use client'

import Link from 'next/link';
import { ShoppingBagOutlined } from '@mui/icons-material'
import { Cart } from './'
import { useStateContext } from '../context/StateContext';
import { Toaster } from 'react-hot-toast';

export default function Navbar() {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <header className="navbar-container">
      <Toaster />
      <p className='logo'>
        <Link href='/'>Dropshit</Link>
      </p>

      <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
        <ShoppingBagOutlined />
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </header>
  );
}