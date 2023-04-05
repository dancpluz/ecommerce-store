import { FooterBanner, HeroBanner } from '../components';
import { client } from '../lib/sanity.client';
import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import PreviewSuspense from '../components/PreviewSuspense'
import PreviewProductList from '../components/PreviewProductList'
import ProductList from '../components/ProductList';


const queryProduct = groq`
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
                    <p className='text-center text-lg animate-pulse text-[#f70a0a]'>
                        Loading Preview Data..
                    </p>
                </div>
            }
            >
                {
                <PreviewProductList query={queryProduct}></PreviewProductList>}
            </PreviewSuspense>
        );
    }

    const products = await client.fetch(queryProduct);
    const banner = await client.fetch(queryBanner);

    return (
        <>
            <HeroBanner banner={banner[0]} />

            <div className='products-heading'>
                <h2>Best Selling Products</h2>
                <p>Comando Vermelho</p>
            </div>

            <ProductList products={products}/>
            
            <FooterBanner footerBanner={banner && banner[0]} />
        </>
    );
}

