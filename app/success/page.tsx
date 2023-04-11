'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { CheckCircle } from '@mui/icons-material/';
import { useRouter } from 'next/router';
import { useStateContext } from '../../context/StateContext'
import { runFireworks } from '../../lib/utils'

export default function Success() {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className='success-wrapper'>
      <div className='success'>
        <p className='icon'>
          <CheckCircle fontSize='large'/>
        </p>
        <h2>Obrigado por comprar!</h2>
        <p className='email-msg'>Verifique seu email para o recibo.</p>
        <p className='description'>
          Se você tiver perguntas mande um email:
          <a className='email' href='mailto:ruadebaixoloja@gmail.com'>
            ruadebaixoloja@gmail.com
          </a>
        </p>
        <Link href='/'>
          <button type='button' className='btn'>
            Continuar Comprando
          </button>
        </Link>
      </div>
    </div>
  )
}
