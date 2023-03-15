'use client';

import { usePreview } from '../lib/sanity.preview';
import ProductList from './ProductList'

type Props = {
  query: string;
};

export default function PreviewProductList({ query }: Props) {
  const products = usePreview(null, query);

  //console.log("LOADING Products...", products)
  return (<ProductList products={products} />
  );
}
