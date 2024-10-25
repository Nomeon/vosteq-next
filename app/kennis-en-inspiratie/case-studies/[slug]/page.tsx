import { notFound } from 'next/navigation';
import { datoFetch, CASE_BY_SLUG_QUERY } from '@/lib/datocms';

export default async function CasePage({ params }: { params: { slug: string } }) {
  const allCases = await datoFetch(CASE_BY_SLUG_QUERY.replace('$slug', `"${params.slug}"`));
  const caseData = allCases.length ? allCases[0] : notFound();

  return (
    <div className="container">
      <h1>{caseData.title}</h1>
      <p>{caseData.quote}</p>
      <p>Published on: {new Date(caseData._firstPublishedAt).toLocaleDateString()}</p>
      <img src={caseData.mainImage.responsiveImage.src} alt={caseData.title} />
    </div>
  );
}
