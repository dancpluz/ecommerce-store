import ImageUrlBuilder from '@sanity/image-url'
import { createClient } from '@sanity/client'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
const token = process.env.NEXT_PUBLIC_SANITY_API_TOKEN;

export const client = createClient({
  projectId,
  dataset,
  useCdn: true,
  apiVersion
})

/*

export async function getProducts() {
  const products = await client.fetch('*[_type == "product"]');
  return products;
}

export async function getBanner() {
  const banner = await client.fetch('*[_type == "banner"]');
  return banner;
}
*/
