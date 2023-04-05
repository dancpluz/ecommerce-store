'use client';

import { useState } from 'react';
import { useStateContext } from '../context/StateContext'
import Image from 'next/image';
import Product from './Product';
import { Remove, Add, Star, StarBorderOutlined } from '@mui/icons-material/';
import urlFor from '../lib/urlFor';

type Props = {
  product: Product;
  products: Product[];
  slug: string;
};

export default function ProductDetails({product, product: {image,_id, name, details, price, sex}, slug, products}: Props) {
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd } = useStateContext();

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
            <a onMouseEnter={() => setIndex(i)}>
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
              <Star />
              <Star />
              <StarBorderOutlined />
              <StarBorderOutlined />
              <StarBorderOutlined />
            </div>
            <p>(20)</p>
          </div>
          <p>{sex}</p>
          <h4>Detalhes: </h4>
          <p>{details}</p>
          <p className='price'>R${price}</p>
          <div className='quantity'>
            <h3>Quantidade:</h3>
            <p className='quantity-desc'>
              <span className='minus' onClick={decQty}><Remove fontSize="small" /></span>
              <span className='num'>{qty}</span>
              <span className='plus' onClick={incQty}><Add /></span>
            </p>
          </div>
          <div className='buttons'>
            <button type='button' className='add-to-cart' onClick={() => onAdd(product, qty)}>Adicionar à Sacola</button>
            <button type='button' className='buy-now' onClick={() => ''}>Comprar Agora</button>
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