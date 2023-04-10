import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingBagOutlined } from '@mui/icons-material/';
import { useRouter } from 'next/router';
import { useStateContext } from '../context/StateContext'

export default function Success() {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  return (
    <div>success</div>
  )
}
