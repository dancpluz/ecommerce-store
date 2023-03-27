import { createClient } from '@sanity/client'

// Variáveis do sanity studio
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
const token = process.env.NEXT_PUBLIC_SANITY_API_TOKEN;

// Configura o sanity studio com as credenciais do projeto

export const client = createClient({
  projectId,
  dataset,
  useCdn: true,
  apiVersion
})
