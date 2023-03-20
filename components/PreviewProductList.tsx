'use client';

import { usePreview } from '../lib/sanity.preview';
import ProductList from './ProductList'

type Props = {
  query: string;
};

export default function PreviewProductList({ query }: Props) {
  const products_all = usePreview(null, query);

  return (<ProductList products={products_all} />
  );
}
