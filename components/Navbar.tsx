'use client'

import Link from 'next/link';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Cart } from './'
import { useStateContext } from '../context/StateContext';

export default function Navbar() {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <header className="navbar-container">
      <p className='logo'>
        <Link href='/'>Dropshit</Link>
      </p>

      <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
        <ShoppingBagOutlinedIcon />
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </header>
  );
}