import Link from 'next/link';
import { IntentButton } from 'sanity';

export default function HeroBanner() {
  return (
    <div className='hero-banner-container'>HeroBanner
      <div>
        <p className='beats-solo'>{ }</p>
        <h3>Poopstore</h3>
        <img src='' alt='headphones' className='hero-banner-image' />
        
        <div>
          <Link href='/product/ID'>
            <button type='button'>BOTÃO</button>
          </Link>
          <div className='desc'>
            <h3>Become</h3>
            <h3>Outlevel</h3>
            <h3>Dropshit</h3>

            <p>DESCRIPTION</p>
          </div>
        </div>
      </div>
    </div>
  );
}