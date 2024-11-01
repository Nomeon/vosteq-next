import { notFound } from 'next/navigation';
import { datoFetch, CASE_BY_SLUG_QUERY } from '@/lib/datocms';

export default async function CasePage({ params }: { params: { slug: string } }) {
  const allCases = await datoFetch(CASE_BY_SLUG_QUERY.replace('$slug', `"${params.slug}"`));
  const caseData = allCases.length ? allCases[0] : notFound();
  const formattedText = caseData.procesaanpak 
    ? caseData.procesaanpak.replace(/\n/g, '<br />') 
    : '';
  const bulletOpsteken = caseData.bulletOpsteken 
    ? caseData.bulletOpsteken.split('\n').map(item => item.replace(/^\*\s*/, '').trim())
    : [];

  return (
    <div className="container">
      <img src={caseData.mainImage.responsiveImage.src} alt={caseData.title} />
      <h1>Vosteq bij {caseData.title}</h1>
      <p>{caseData.quote}</p>
      <p>{caseData.contactpersoon}</p>
      <h2>De uitdaging</h2>
      <p>{caseData.uitdaging}</p>
      <h2>De achtergrond</h2>
      <p>{caseData.achtergrond}</p>
      <h2>De procesaanpak</h2>
      <p dangerouslySetInnerHTML={{__html: formattedText}}></p>
      <h2>Bullet Points</h2>
      <ul className="">
        {bulletOpsteken.map((item, index) => (
          <li key={index} className="">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
