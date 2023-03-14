import Link from 'next/link';
import { IntentButton } from 'sanity';

export default function HeroBanner() {
  return (
    <div className='hero-banner-container'>HeroBanner
      <div>
        <p className='beats-solo'>Small Text</p>
        <h3>Mid Text</h3>
        <img src='' alt='headphones' className='hero-banner-image' />
        
        <div>
          <Link href='/product/ID'>
            <button type='button'>BOTÃO</button>
          </Link>
          <div className='desc'>
            <h5>Description</h5>
            <p>DESCRIPTION</p>
          </div>
        </div>
      </div>
    </div>
  );
}