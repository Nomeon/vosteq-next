import { notFound } from 'next/navigation';
import { datoFetch, CASE_BY_SLUG_QUERY } from '@/lib/datocms';
import DecoRight from '@/components/vosteq/deco-right';
import { Metadata } from 'next';
import BottomCta from '@/components/vosteq/bottom-cta';

async function getCaseData(slug: string) {
  const allCases = await datoFetch(CASE_BY_SLUG_QUERY.replace('$slug', `"${slug}"`));
  return allCases.length ? allCases[0] : notFound();
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const caseData = await getCaseData(params.slug);
  return {
    title: `${caseData.seoData.title} | Vosteq`,
    description: caseData.seoData.description,
  };
}

export default async function CasePage({ params }: { params: { slug: string } }) {
  const caseData = await getCaseData(params.slug);
  
  const procesaanpak = caseData.procesaanpak 
    ? caseData.procesaanpak.replace(/\n/g, '<br/>') 
    : '';
  const achtergrond = caseData.achtergrond
    ? caseData.achtergrond.replace(/\n/g, '<br/>')
    : '';
  const bulletOpsteken = caseData.bulletOpsteken 
    ? caseData.bulletOpsteken.split('\n').map(item => item.replace(/^\*\s*/, '').trim())
    : [];
  const bulletOpleveren = caseData.bulletOpleveren
    ? caseData.bulletOpleveren.split('\n').map(item => item.replace(/^\*\s*/, '').trim())
    : [];

  return (
    <div className='flex flex-col'>
      <div className="container flex flex-col lg:flex-row gap-16 lg:gap-32 lg:py-16 py-4">
        <div className="lg:w-1/2 flex flex-col gap-4">
          <p className='font-aktiv-grotesk-extended text-base text-donkergroen'>Vosteq bij {caseData.title}</p>
          <h1 className="text-paars">De uitdaging</h1>
          <p className="text-paars font-aktiv-grotesk-extended">{caseData.uitdaging}</p>
          <h2 className='text-paars py-2' dangerouslySetInnerHTML={{__html: caseData.eersteHeading}}/>
          <p dangerouslySetInnerHTML={{__html: achtergrond}}></p>
        </div>
        <div className="lg:w-1/2 container relative pb-16">
          <DecoRight imageSrc={caseData.mainImage.responsiveImage.src} />
        </div>
      </div>
      <div className='container flex flex-col lg:flex-row gap-16 lg:gap-32 lg:pt-16'>
        <div className='lg:w-1/2 bg-gradient-to-br from-paars to-groen from-20% lg:p-16 p-8 flex flex-col justify-between'>
          <h4 className='font-aktiv-grotesk-extended text-wit'>"{caseData.quote}"</h4>
          <p className='text-xl font-aktiv-grotesk-extended text-wit pt-8'>- {caseData.contactpersoon}</p>
        </div>
        <div className='lg:w-1/2'>
          <h2 className='text-paars pb-4' dangerouslySetInnerHTML={{__html: caseData.tweedeHeading}}/>
          <p dangerouslySetInnerHTML={{__html: procesaanpak}}></p>
        </div>
      </div>
      <div className='container flex flex-col lg:flex-row gap-16 lg:gap-32 lg:pt-32 pb-16'>
        <div className="flex flex-col md:flex-row gap-16 lg:gap-32 font-aptos text-base">
          <div className='w-full lg:w-1/2'>
            <h3 className='pb-2 text-paars max-lg:pt-8'>Wat heeft de inbreng van Vosteq opgeleverd?</h3>
            <ul className='pt-4'>
              {bulletOpleveren.map((item, index) => (
                <li key={index} className="ml-4 pl-2 pb-2 list-outside list-disc">
                  {item}        
                </li>
              ))}
            </ul>
          </div>
          <div className='w-full lg:w-1/2'>
            <h3 className='pb-2 text-paars'>Wat steek je hiervan op?</h3>
            <ul className='pt-4'>
              {bulletOpsteken.map((item, index) => (
                <li key={index} className="ml-4 pl-2 pb-2 list-outside list-disc">
                  {item}        
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <BottomCta titel='Wil jij ook weten wat Vosteq voor jouw MKB-maakbedrijf kan betekenen?' paragraph="Neem contact met ons op en ontdek hoe we samen meer uit mens en machine halen." />
    </div>
  );
}
