'use client'

import Link from 'next/link';
import { ShoppingBagOutlined } from '@mui/icons-material'
import { Cart } from './'
import { useStateContext } from '../context/StateContext';
import { Toaster } from 'react-hot-toast';
import styled from 'styled-components';

const StyledHeader = styled.header `
  background-color: #222;
`;

export default function Navbar() {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <StyledHeader className="fixed h-16">
      <Toaster />
      <Link href='/'>Rua de Baixo</Link>
      <nav>
        <Link href=''>Produtos</Link>

        <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
          <ShoppingBagOutlined />
          <span className='cart-item-qty'>{totalQuantities}</span>
        </button>
      </nav>
      {showCart && <Cart />}
    </StyledHeader>
  );
}