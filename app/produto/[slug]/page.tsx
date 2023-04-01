import { groq } from 'next-sanity';
import { client } from '../../../lib/sanity.client';
import ProductDetails from '../../../components/ProductDetails'


type Props = {
  params: {
    slug: string;
  };
};

export default async function ProductPage({params: {slug}}: Props) {

  const query = groq`
    *[_type=='product' && slug.current==$slug][0]
  `;
  const product: Product = await client.fetch(query, { slug });
  const products: Product[] = await client.fetch(groq`*[_type=='product']`)

  return (
    <>
    <ProductDetails product={product} slug={slug} products={products}></ProductDetails>
    </>
    
  )
}
