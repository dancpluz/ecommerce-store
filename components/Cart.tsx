'use client'

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBagOutlined, Remove, Add, ArrowBack, HighlightOff } from '@mui/icons-material/';
import toast from 'react-hot-toast';
import { useStateContext } from '../context/StateContext';
import urlFor from '../lib/urlFor';

export default function Cart() {
  const cartRef = useRef(null);
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove } = useStateContext();

  return (
    <div className='cart-wrapper' ref={cartRef}>
      <div className='cart-container'>
        <button
        type='button'
        className='cart-heading'
        onClick={() => setShowCart(false)}>
          <ArrowBack />
          <span className='heading'>Sua Sacola</span>
          <span className='cart-num-items'>({totalQuantities} itens)</span>
        </button>

        {cartItems.length < 1 && (
          <div className='empty-cart'>
            <ShoppingBagOutlined/>
            <h3>Sua Sacola está vazia</h3>
            <Link href='/'>
              <button
                type='button'
                onClick={() => setShowCart(false)}
                className='btn'
              >
                Continuar Comprando
              </button>
            </Link>
          </div>
        )}

        <div className='product-container'>
          {cartItems.length >= 1 && cartItems.map((item) => (
            <div className='product' key={item._id}>
              <Image className='cart-product-image'
                src={urlFor(item?.image[0]).url()}
                alt={item._id}
                width={250}
                height={250} />
              <div className='item-desc'>
                <div className='flex top'>
                  <h5>{item.name}</h5>
                  <h4>R${item.price}</h4>
                </div>
                <div className='flex bottom'>
                  <div>
                    <p className='quantity-desc'>
                      <span className='minus' onClick={() => toggleCartItemQuantity(item._id, 'dec')}>
                        <Remove />
                      </span>
                      <span className='num'>{item.quantity}</span>
                      <span className='plus' onClick={() => toggleCartItemQuantity(item._id, 'inc')}>
                        <Add />
                      </span>
                    </p>
                  </div>
                  <button
                  type='button'
                  className='remove-item'
                  onClick={() => onRemove(item)}
                  >
                    <HighlightOff />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length >= 1 && (
          <div className='cart-bottom'>
            <div className='total'>
              <h3>Subtotal:</h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className='btn-container'>
              <button type='button' className='btn' onClick={()=>''}>
                Concluir Compra
              </button>

            </div>
          </div>
        )}
      </div>
    </div>
  );
}