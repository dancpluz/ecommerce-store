import Link from 'next/link';
import { IntentButton } from 'sanity';
import Image from 'next/image';
import urlFor from '../lib/urlFor';

type Props = {
  banner: Banner;
}

export default function HeroBanner({ banner }: Props) {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>{banner.smallText}</p>
        <h3>{banner.midText}</h3>
        <h1>{banner.largeText1}</h1>
        <Image
          className='hero-banner-image' 
          src={urlFor(banner.image).url()}
          alt={banner.product}
          width={800}
          height={800}
        />

        <div>
          <Link href={`/product/${banner.product}`}>
            <button type='button'>{banner.buttonText}</button>
          </Link>
          <div className='desc'>
            <h5>Descrição</h5>

            <p>{banner.smallText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}