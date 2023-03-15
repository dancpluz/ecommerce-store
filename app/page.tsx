
import '../styles/globals.css'
import { Product, FooterBanner, Footer, HeroBanner } from '../components';
import { client } from '../lib/sanity.client';
import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import PreviewSuspense from '../components/PreviewSuspense'
import ProductList from '../components/ProductList';


const queryProducts = groq`
    *[_type=='product'] {
        ...,
    } | order(_createdAt desc)
`;

const queryBanner = groq`
    *[_type=='banner'] {
        ...,
        smallText ->,
    } | order(_createdAt desc)
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
            }>
                {/*
                <PreviewProductList query={query}></PreviewProductList> */}
            </PreviewSuspense>
        ) 
    }

    const products = await client.fetch(queryProducts);
    const banner = await client.fetch(queryBanner);
    console.log(banner[0].smallText)
    return (
        <>
            <HeroBanner />

            <div className='products-heading'>
                <h2>Best Selling Products</h2>
                <p>Speakers of many variations</p>
            </div>
            <div className='products-container'>
                {products?.map((product) => product.name)}
            </div>
            
            <FooterBanner />
        </>
    );
}

