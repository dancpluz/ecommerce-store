'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import urlFor from '../lib/urlFor';

type Props = {
  banner: Banner;
}

export default function HeroBanner({ banner: { main_image, images, desc } }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseOver() {
    setIsHovered(true);
  }

  function handleMouseOut() {
    setIsHovered(false);
  }

  return (
    <div className='banner-container'>
      <Image
        className='banner-image'
        src={urlFor(main_image).url()}
        alt={''}
        width={Number(main_image.asset._ref.split("-")[2].split("x")[0])}
        height={700}
      />
      
        {/*images?.map((image) =>
          <Image
            className='cap'
            key={''}
            src={urlFor(image).url()}
            alt={''}
            width={Number(image.asset._ref.split("-")[2].split("x")[0])}
            height={Number(image.asset._ref.split("-")[2].split("x")[1])}
          />
        )*/}
        <Image
          className='cap'
          key={''}
          src={urlFor(images[0]).url()}
          alt={''}
          width={Number(images[0].asset._ref.split("-")[2].split("x")[0])}
          height={Number(images[0].asset._ref.split("-")[2].split("x")[1])}
        />
      
      
      {/*images?.map((image) =>
        {<div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}
            className='banner-image' 
        dangerouslySetInnerHTML={{__html: image.svg}}>
      </div>}
          <div className='svg'>
          <Image
            className='banner-image'
            key={''}
            src={urlFor(image).url()}
            alt={''}
            width={Number(image.asset._ref.split("-")[2].split("x")[0])}
            height={Number(image.asset._ref.split("-")[2].split("x")[1])}
          />
          
            <svg className='banner-image' id="Camada_1" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 590 700">
              <path d="m533,700H83c0-3.5-.2-7,0-10.5.5-7.2,0-13.3-7-18.1-4.9-3.3-5.9-9.6-5.3-15.9.5-5.4.4-10.9.3-16.4-.2-12.3-.7-24.6-.9-37-.5-30.8-1.7-61.6-1.1-92.4.4-19.6,2.1-39.2,7.2-58.4,2.9-11.1,4.7-22.5,8.2-33.4,2.7-8.4,6.8-16.5,13.5-23,4.4-4.2,7.2-9.9,11-14.8,2.6-3.4,5.5-6.7,8.7-9.4,18.1-15.4,36.4-30.6,54.6-45.9.9-.8,1.9-1.3,2.8-2,6-4.5,10.3-8.7,7.6-18-2.6-9.2-1.9-19.4-2.2-29.2-.3-8.8,4.7-14.9,12.1-18.6,7.3-3.6,15.1-6.1,22.7-9.2,3.1-1.3,5.6-.2,6.4,2.7,2.4,8.2,7.8,15.2,7.6,24.5-.2,9.7-1.1,18.8-6.1,27.3-3.5,6-1.6,12.1,4,16.1,8,5.6,15.9,11.3,23.6,17.3,10.4,8.1,22.5,6.6,34.4,6.8,1.3,0,2.6-.5,3.9-.6,6-.4,10.8-2.5,13.8-8.2,1.1-2.1,3.3-3.7,5.1-5.4,8.8-8.2,16.4-17.3,19.4-29.3.6-2.7.4-5.5.5-8.3,0-2.3,0-4.7,0-7-.3-6.9-.8-13.8-.9-20.7,0-4,.2-8.3,1.3-12.1.4-1.4,4.2-3.3,5.7-2.8,15.3,5.5,30.7,10.9,45.6,17.5,10,4.4,19.1,10.8,28.7,16.1,7,3.8,14,7.5,21.2,11,7.9,3.9,15,8.6,20.1,15.9,6.1,8.7,2.5,19.9-7.7,23.3-1.4.5-2.8,1-5.1,1.7,1.4,1.6,2.4,3,3.6,4,4,3.3,8.5,6.1,11.9,9.9,2.8,3.2,4.5,7.4,6.4,11.3,3,5.9,5.6,12,8.7,17.9,11.9,22.7,20.2,46.7,27.7,71.1,9.3,30.4,15.9,61.2,19.2,92.8,1.3,12.6,3.2,25.1,4.4,37.7.8,7.7.2,15.6,1.3,23.3,1.2,8.5,3.9,16.8,5.6,25.2,2.6,13.3,3.6,26.5.7,40.1-2.5,11.7.7,22.8,6.6,33Z" />
              <path d="m401.9,473.8c-1.4-2.6-2.7-4.5-3.5-6.7-.4-1.3,0-2.9.2-4.3,1.7.3,4,0,4.9,1,2.9,3.3,2.1,6.6-1.6,9.9Z" />
          </svg>
        </div>
      </div>
      
      )*/}
      {isHovered && <h1>Hover Text</h1>}
    </div>
  );
}