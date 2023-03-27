import Product from './Product';

type Props = {
  products: Product[]
}

export default function ProductList({products}: Props) {
  return (
    <div className='products-container'>
      {products?.map((product) => <Product key={product._id} product={product}/>)}
    </div>
  )
}
