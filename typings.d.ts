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
  quality: string;
  size: string;
  price: number;
  details: string;
  quantity: number;
}

interface Banner extends Base {
  main_image: Image;
  images: Image[];
  desc: string;
}

interface Image {
  _type: 'image';
  asset: Reference;
  product: Reference;
  x: number;
  y: number;
}

interface Reference {
  _ref: string;
  _type: 'reference';
}

interface Slug {
  _type: 'slug';
  current: string;
}

declare namespace NodeJS {
  interface ProcessEnv {
    STRIPE_SECRET_KEY: string;
    SANITY_API_TOKEN: string;
    NEXT_PUBLIC_SANITY_API_VERSION: string;
    NEXT_PUBLIC_SANITY_DATASET: string;
    NEXT_PUBLIC_SANITY_PROJECT_ID: string;
  }
}

