import { DatoCase } from "@/lib/definitions";

export async function datoFetch(query: string): Promise<DatoCase[]> {
  const response = await fetch('https://graphql.datocms.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    },
    body: JSON.stringify({
      query: query,
    }),
    next: { revalidate: 86400 }, // Revalidate every 24 hours, !TODO switch to cache tags: https://www.datocms.com/docs/next-js/using-cache-tags
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const { data } = await response.json();
  return data.allCases;
}

export const CASE_BY_SLUG_QUERY = `
  query {
    allCases(filter: {slug: {eq: $slug}}) {
      id
      title
      quote
      slug
      contactpersoon
      uitdaging
      achtergrond
      procesaanpak
      bulletOpsteken
      bulletOpleveren
      mainImage {
        responsiveImage {
          src
          srcSet  
          width
          height
        }
      }
      _status
      _firstPublishedAt
    }
  }`;

export const PAGE_CONTENT_QUERY = `
  query {
    allCases {
      id
      title
      quote
      slug
      mainImage {
        responsiveImage {
          src
          srcSet  
          width
          height
        }
      }
      _status
      _firstPublishedAt
    }
  }`;