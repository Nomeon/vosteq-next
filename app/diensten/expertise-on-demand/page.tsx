import { Popup } from '@/components/ui/popup';
import type { Metadata } from "next";
import { WatLevertHetOp } from '@/components/vosteq/wat-levert-het-op';
import { WerkStappen } from '@/components/vosteq/werk-stappen';
import { BottomCta } from '@/components/vosteq/bottom-cta';
import DecoRight from '@/components/vosteq/deco-right';

export const metadata: Metadata = {
  title: "Interim-specialisten voor MKB-maakbedrijven | Vosteq",
  description: "Heb je tijdelijk versterking nodig? Vosteq biedt ervaren interim-specialisten en managers voor MKB-maakbedrijven. Succesvolle innovaties en transformaties starten hier.",
};

export default function ExpertiseOnDemand() {
  const steps = [
    {
      icon: 'mdi:account-tie',
      title: 'Directe versterking',
      description: 'door snelle toegang tot ervaren leiders en specialisten die klaarstaan om aan de slag te gaan.'
    },
    {
      icon: 'mdi:clock-time-four-outline',
      title: 'Flexibiliteit',
      description: 'door tijdelijke ondersteuning wanneer je die nodig hebt, zonder langdurige verplichtingen.'
    },
    {
      icon: 'mdi:target',
      title: 'Resultaatgerichte aanpak',
      description: 'van onze experts en managers gericht op het behalen van meetbare doelen.'
    },
    {
      icon: 'mdi:account-group',
      title: 'Duurzame impact',
      description: 'want naast resultaten zorgen we voor kennisoverdracht, zodat jouw organisatie blijft groeien, ook na onze inzet.'
    },
    {
      icon: 'mdi:account-cog',
      title: 'Mogelijkheid om te sparren',
      description: "met ervaren leiders en experts die gewend zijn om te presteren in situaties waar iets extra's nodig is."
    }
  ];

  const accordionItems = [
    {
      value: 'stap1',
      stap: 'Stap 1.',
      title: 'Behoefteanalyse',
      description: 'We beginnen met een grondige inventarisatie van jouw specifieke behoeften. Of het nu gaat om het overbruggen van een managementvacature, het leiden van een innovatie- of transformatieproject, of het inzetten van specialistische technische expertise, we luisteren naar jouw uitdagingen en ontwikkelen een helder en gericht actieplan.'
    },
    {
      value: 'stap2',
      stap: 'Stap 2.',
      title: 'Gerichte versterking',
      description: 'Op basis van de analyse selecteren we de juiste interim-specialist of manager die direct waarde toevoegt. Onze experts brengen hun vakkennis en ervaring in, sluiten naadloos aan bij jouw team en doelen, en gaan meteen aan de slag met het realiseren van oplossingen. '
    },
    {
      value: 'stap3',
      stap: 'Stap 3.',
      title: 'Implementatie en begeleiding',
      description: 'Onze interim-specialisten zijn gewend om in complexe omgevingen te presteren. Ze zorgen voor een gestructureerde aanpak, begeleiden jouw team en zetten alles op alles om de gewenste resultaten te behalen.'
    },
    {
      value: 'stap4',
      stap: 'Stap 4.',
      title: 'Kennisoverdracht',
      description: 'Naast het behalen van doelstellingen zorgen onze experts ervoor dat hun kennis en ervaring gedeeld wordt met jouw team. Zo profiteer je ook op de lange termijn van hun inzet.'
    }
  ]

  return (
    <div className='flex flex-col'>
      <Popup />
      <div className="container flex flex-col md:flex-row gap-16 md:gap-32 md:py-16 py-4">
        <div className="md:w-1/2 flex flex-col gap-4">
          <p className='font-aktiv-grotesk-extended text-base text-donkergroen'>Tijdelijke expertise op maat</p>
          <h1 className="text-paars">Expertise on demand</h1>
          <p className="font-aktiv-grotesk-extended text-paars">In de dynamische wereld van de maakindustrie kan tijdelijke versterking hét verschil maken. Bij Vosteq bieden we interim-specialisten die jouw MKB-maakbedrijf ondersteunen op cruciale momenten. Van technologische innovatie tot procesoptimalisatie: onze ervaren experts helpen jouw bedrijf vooruit, zonder de verplichting van een fulltime aanstelling.</p>
          <h3 className='pt-8 text-paars max-md:text-2xl'>Tijdelijke versterking voor cruciale momenten</h3>
          <p className='text-diepgrijs'>Bij Vosteq begrijpen we de uitdagingen waarmee MKB-maakbedrijven te maken hebben. Daarom bieden wij ervaren interim-managers en hoogopgeleide experts die jouw organisatie ondersteunen op momenten dat het écht nodig is.</p>
          <p className='pt-4 font-semibold'>Interim-managers: ervaren leiders in uitdagende situaties</p>
          <p className='text-diepgrijs'>Onze interim-managers zijn bewezen leiders met jarenlange ervaring in het succesvol navigeren van bedrijven door complexe en uitdagende omstandigheden. Ze bieden jouw organisatie tijdelijke versterking wanneer het erom gaat: bij transformaties die een sterke sturing vereisen, tijdens de implementatie van innovatieve processen of technologieën, of bij het aanpakken van complexe organisatorische uitdagingen. Met een combinatie van strategisch inzicht, praktische aanpak en leiderschap voegen onze interim-managers direct waarde toe. Ze weten precies wat er nodig is om impact te maken en resultaten te behalen.</p>
          <p className='pt-4 font-semibold'>Interim-experts: specialistische kennis op maat</p>
          <p className='text-diepgrijs'>Onze interim-experts zijn hoogopgeleide specialisten met diepgaande ervaring in de maakindustrie. Ze brengen de specifieke expertise mee die jouw organisatie nodig heeft om ambitieuze innovaties en projecten succesvol te realiseren. Of het nu gaat om technische vraagstukken, procesoptimalisatie of het ontwikkelen van nieuwe producten, onze interim-experts sluiten naadloos aan bij jouw team. Zo profiteer je direct van hun kennis en vaardigheden, zonder de verplichting van een langdurige aanstelling.</p>
        </div>
        <div className="md:w-1/2 container relative pb-16">
          <DecoRight imageSrc='/images/interimmanagement.webp' />
        </div>
      </div>
      <WerkStappen accordionItems={accordionItems}/>
      <WatLevertHetOp omschrijving='Met de inzet van onze specialisten' steps={steps} />
      <BottomCta titel='Wil je meer weten over hoe onze interim-specialisten jouw bedrijf kunnen ondersteunen?' paragraph='Neem contact met ons op voor een vrijblijvend adviesgesprek.' />
    </div>
  );
}