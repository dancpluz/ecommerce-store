'use client';

import { useState } from 'react';
import { useStateContext } from '../context/StateContext'
import Image from 'next/image';
import Product from './Product';
import { Remove, Add, RadioButtonUnchecked, RadioButtonChecked } from '@mui/icons-material/';
import urlFor from '../lib/urlFor';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';

type Props = {
  product: Product;
  products: Product[];
  slug: string;
};

export default function ProductDetails({product, product: {image,_id, name, details, quality, price}, slug, products}: Props) {
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();
  const handleBuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);
  }
  const qualityLabels: Record<string, string> = {
    '1': 'Usado',
    '2': 'Semi-Novo',
    '3': 'Novo'
  }
  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#ff6d75',
    },
    '& .MuiRating-iconEmpty': {
      color: '#ff6d75',
    },
  });
  
  return (
    <>
      <div className='product-detail-container'>
        <div className='image-container'>
          <Image
            className='product-detail-image'
            src={urlFor(image && image[index]).url()}
            alt={_id}
            width={300}
            height={300}
          />
        </div>
        <div className='small-images-container'>
          {image?.map((item, i) => (
            <a key={i} onMouseEnter={() => setIndex(i)}>
              <Image
                className={i === index ? 'small-image selected-image' : 'small-image'}
                src={urlFor(item).url()}
                alt={_id}
                width={100}
                height={100}
              />
            </a>
          ))}
        </div>
        <div className='product-detail-desc'>
          <h1>{name}</h1>
          <div className='reviews'>
            <div>
              <StyledRating name='quality' value={parseInt(quality)} max={3} readOnly icon={<RadioButtonChecked />} emptyIcon={<RadioButtonUnchecked />} />
            </div>
            <p>{qualityLabels[quality]}</p>
          </div>
          <h4>Detalhes: </h4>
          <p>{details}</p>
          <p className='price'>R${price}</p>
          <div className='quantity'>
            <h3>Quantidade:</h3>
            <p className='quantity-desc'>
              <span className='minus' onClick={decQty}><Remove fontSize='small' /></span>
              <span className='num'>{qty}</span>
              <span className='plus' onClick={incQty}><Add fontSize='small' /></span>
            </p>
          </div>
          <div className='buttons'>
            <button type='button' className='add-to-cart' onClick={() => onAdd(product, qty)}>Adicionar à Sacola</button>
            <button type='button' className='buy-now' onClick={handleBuyNow}>Comprar Agora</button>
          </div>
        </div>
      </div>
      <div className='maylike-products-wrapper'>
          <h2>Você pode gostar também</h2>
          <div className='marquee'>
            <div className='maylike-products-container track'>
              {products.map((item) => (
                <Product key={item._id} product={item}/>
              ))}
            </div>
          </div>
      </div>
    </>
    
  )
}
