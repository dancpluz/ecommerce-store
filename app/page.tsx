
import '../styles/globals.css'
import { Product, FooterBanner, Footer, HeroBanner } from '../components';
import { client } from '../lib/sanity.client';
import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import PreviewSuspense from '../components/PreviewSuspense'
import PreviewProductList from '../components/PreviewProductList'
import ProductList from '../components/ProductList';


const query = groq`
    *[_type=='product']
`;

const queryBanner = groq`
    *[_type=='banner']
`;

export default async function HomePage() {
    if (previewData()) {
        return (
            <PreviewSuspense fallback={
                <div role='status'>
                    <p className='text-center text-lg animate-pulse text-[#F7AB0A]'>
                        Loading Preview Data..
                    </p>
                </div>
            }
            >
                {
                <PreviewProductList query={query}></PreviewProductList>}
            </PreviewSuspense>
        );
    }

    const posts = await client.fetch(query);
    const banner = await client.fetch(queryBanner);

    return (
        <>
            <HeroBanner banner={banner[0]} />

            <div className='products-heading'>
                <h2>Best Selling Products</h2>
                <p>Speakers of many variations</p>
            </div>
            <ProductList posts={posts}/>
            
            <FooterBanner />
        </>
    );
}

