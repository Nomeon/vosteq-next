import { notFound } from 'next/navigation';
import { datoFetch, CASE_BY_SLUG_QUERY } from '@/lib/datocms';
import { Separator } from '@/components/ui/separator';
import DecoRight from '@/components/vosteq/deco-right';
import DecoLeft from '@/components/vosteq/deco-left';

export default async function CasePage({ params }: { params: { slug: string } }) {
  const allCases = await datoFetch(CASE_BY_SLUG_QUERY.replace('$slug', `"${params.slug}"`));
  const caseData = allCases.length ? allCases[0] : notFound();
  const formattedText = caseData.procesaanpak 
    ? caseData.procesaanpak.replace(/\n/g, '<br />') 
    : '';
  const bulletOpsteken = caseData.bulletOpsteken 
    ? caseData.bulletOpsteken.split('\n').map(item => item.replace(/^\*\s*/, '').trim())
    : [];

  const bulletOpleveren = caseData.bulletOpleveren
    ? caseData.bulletOpleveren.split('\n').map(item => item.replace(/^\*\s*/, '').trim())
    : [];

  return (
    <div className='flex flex-col'>
      <div className="container flex flex-col md:flex-row gap-16 md:gap-32 md:py-16 py-4">
        <div className="md:w-1/2 flex flex-col gap-4">
          <p className='font-aktiv-grotesk-extended text-base text-donkergroen'>Vosteq bij {caseData.title}</p>
          <h1 className="text-paars">De uitdaging</h1>
          <p className="text-paars font-aktiv-grotesk-extended">{caseData.uitdaging}</p>
          <h2 className='text-paars py-2'>De achtergrond</h2>
          <p>{caseData.achtergrond}</p>
        </div>
        <div className="md:w-1/2 relative flex p-8 -mt-8 justify-center">
          <DecoRight imageSrc={caseData.mainImage.responsiveImage.src} />
        </div>
      </div>
      <div className='container flex flex-col md:flex-row gap-16 md:gap-32 md:pt-16'>
        <div className='md:w-1/2 bg-gradient-to-br from-paars to-groen from-20% md:p-16 p-8 flex flex-col justify-between'>
          <h4 className='font-aktiv-grotesk-extended text-wit'>"{caseData.quote}"</h4>
          <p className='text-xl font-aktiv-grotesk-extended text-wit pt-8'>- {caseData.contactpersoon}</p>
        </div>
        <div className='md:w-1/2'>
          <h2 className='text-paars pb-4'>De procesaanpak</h2>
          <p>{caseData.procesaanpak}</p>
        </div>
      </div>
      <div className='container flex flex-col md:flex-row gap-16 md:gap-32 md:pt-32'>
        <div className="flex gap-16 md:gap-32 font-aptos text-base">
          <div className='w-1/2'>
            <h3 className='pb-2 text-paars max-md:pt-8'>Wat heeft de inbreng van Vosteq opgeleverd?</h3>
            <ul className='pt-4'>
              {bulletOpleveren.map((item, index) => (
                <li key={index} className="ml-4 pl-2 pb-2 list-outside list-disc">
                  {item}        
                </li>
              ))}
            </ul>
          </div>
          <div className='w-1/2'>
            <h3 className='pb-2 text-paars max-md:pt-8'>Wat steek je hiervan op?</h3>
            <ul className='pt-4'>
              {bulletOpsteken.map((item, index) => (
                <li key={index} className="ml-4 pl-2 pb-2 list-outside list-disc">
                  {item}        
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* <div className='md:w-1/2 bg-gradient-to-br from-paars to-groen from-20% md:p-16 p-8 flex flex-col justify-between'>
          <h4 className='font-aktiv-grotesk-extended text-wit'>"{caseData.quote}"</h4>
          <p className='text-xl font-aktiv-grotesk-extended text-wit pt-8'>- {caseData.contactpersoon}</p>
        </div> */}
      </div>
    </div>
    // <div className="container">
    //   <img src={caseData.mainImage.responsiveImage.src} alt={caseData.title} />
    //   <h1>Vosteq bij {caseData.title}</h1>
    //   <p>{caseData.quote}</p>
    //   <p>{caseData.contactpersoon}</p>
    //   <h2>De uitdaging</h2>
    //   <p>{caseData.uitdaging}</p>
    //   <h2>De achtergrond</h2>
    //   <p>{caseData.achtergrond}</p>
    //   <h2>De procesaanpak</h2>
    //   <p dangerouslySetInnerHTML={{__html: formattedText}}></p>
    //   <h2>Bullet Points</h2>
    //   <ul className="">
    //     {bulletOpsteken.map((item, index) => (
    //       <li key={index} className="">
    //         {item}
    //       </li>
    //     ))}
    //   </ul>
    //   <h2>Wat levert het op?</h2>
    //   <ul className="">
    //     {bulletOpleveren.map((item, index) => (
    //       <li key={index} className="">
    //         {item}
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
}