import Link from 'next/link';
import urlFor from '../lib/urlFor';
import Image from 'next/image';

type Props = {
  product: Product;
}

export default function Product({ product: {_id, slug, image, name, price} }: Props) {

  return (
    <div>
      <Link href={`/produto/${slug.current}`}>
        <div className='product-card'>
          <Image
            className='product-image'
            src={urlFor(image && image[0]).url()}
            alt={_id}
            width={250}
            height={250}
          />
          <p className='product-name'>{name}</p>
          <p className='product-price'>R${price}</p>
        </div>
      </Link>
    </div>
  );
}