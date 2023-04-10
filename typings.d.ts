type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface Product extends Base {
  image: Image[];
  name: string;
  slug: Slug;
  sex: string;
  quality: string;
  size: string;
  price: number;
  details: string;
  quantity: number;
}

interface Banner extends Base {
  image: Image[];
  buttonText: string;
  product: string;
  desc: string;
  smallText: string;
  midText: string;
  largeText1: string;
  largeText2: string;
  discount: string;
  saleTime: string;
}

interface Image {
  _type: 'image';
  asset: Reference;
}

interface Reference {
  _ref: string;
  _type: 'reference';
}

interface Slug {
  _type: 'slug';
  current: string;
}

type StateContextType = {
  showCart: boolean;
  cartItems: Product[];
  totalPrice: number;
  totalQuantities: number;
  qty: number;
  incQty: () => void;
  decQty: () => void;
  onAdd: (product: Product, quantity: number) => void;
};

declare namespace NodeJS {
  interface ProcessEnv {
    STRIPE_SECRET_KEY: string;
    SANITY_API_TOKEN: string;
    NEXT_PUBLIC_SANITY_API_VERSION: string;
    NEXT_PUBLIC_SANITY_DATASET: string;
    NEXT_PUBLIC_SANITY_PROJECT_ID: string;
  }
}

