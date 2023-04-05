import Link from 'next/link';
import urlFor from '../lib/urlFor';
import Image from 'next/image';

type Props = {
  footerBanner: Banner;
}

export default function FooterBanner({ footerBanner: {_id, discount, largeText1, largeText2, saleTime, smallText, midText, product, desc, buttonText, image} }: Props) {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className='right'>
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/produto/${product}`}>
            <button type='button'>{buttonText}</button>
          </Link>
        </div>
        <Image
          className='footer-banner-image'
          src={urlFor(image).url()}
          alt={_id}
          width={500}
          height={600}
        />
      </div>
    </div>
  );
}