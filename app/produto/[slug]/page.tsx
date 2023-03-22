import Image from 'next/image';
import urlFor from '../../../lib/urlFor';
import { groq } from 'next-sanity';
import { client } from '../../../lib/sanity.client';

type Props = {
  params: {
    slug: string;
  };
};

export default async function ProductDetails({params: {slug}}: Props) {

  const query = groq`
    *[_type=='product' && slug.current==$slug][0]
  `;
  const product: Product = await client.fetch(query, { slug });

  return (
    <div className='product-detail-container'>
      <div className='image-container'>
        <Image
          className='product-image'
          src={urlFor(product.image && product.image[0]).url()}
          alt={product._id}
          width={250}
          height={250}
        />
      </div>
    </div>
  )
}
