
import '../styles/globals.css'
import { Product, FooterBanner, Footer, HeroBanner } from '../components';
import { client, getProducts, getBanner } from '../lib/client';

export default function HomePage() {
    return (
        <>
            <HeroBanner />

            <div className='products-heading'>
                <h2>Best Selling Products</h2>
                <p>Speakers of many variations</p>
            </div>
            <div className='products-container'>
                
            </div>
            
            <FooterBanner />
        </>
    );
}

export async function getServerSideProps() {
    const products = await client.fetch('*[_type == "product"]');
    const banner = await client.fetch('*[_type == "banner"]');
    return {
        props: { products, banner }
    }
}