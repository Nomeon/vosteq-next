import { DatoCase } from "@/lib/definitions";

export async function fetchCases(query: string): Promise<DatoCase[]> {
  const response = await fetch('https://graphql.datocms.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    },
    body: JSON.stringify({
      query: query,
    }),
    next: { revalidate: 86400 }, // Revalidate every 24 hours
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const { data } = await response.json();
  return data.allCases;
}