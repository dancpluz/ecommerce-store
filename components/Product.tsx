import Link from 'next/link';
import urlFor from '../lib/urlFor';
import Image from 'next/image';

type Props = {
  product: Product;
}

export default function Product({ product }: Props) {
  console.log(product)
  return (
    <div>
      <Link href={`/product/${product.slug.current}`}>
        <div className='product-card'>
          <Image
            className='product-image'
            src={urlFor(product.image && product.image[0]).url()}
            alt={product._id}
            width={250}
            height={250}
          />
          <p className='product-name'>{product.name}</p>
        </div>
      </Link>
    </div>
  );
}