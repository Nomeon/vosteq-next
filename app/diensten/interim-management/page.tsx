import Image from 'next/image';
import { Popup } from '@/components/ui/popup';
import type { Metadata } from "next";
import { WatLevertHetOp } from '@/components/vosteq/wat-levert-het-op';
import { WerkStappen } from '@/components/vosteq/werk-stappen';
import { BottomCta } from '@/components/vosteq/bottom-cta';
import DecoRight from '@/components/vosteq/deco-right';

export const metadata: Metadata = {
  title: "Vosteq | Interim Management",
  description: "Aan het bouwen!",
};

export default function InterimManagement() {
  const steps = [
    {
      icon: 'mdi:account-question',
      title: 'Mogelijkheid om te sparren',
      description: "met ervaren leiders die gewend zijn om te presteren in situaties waar iets extra's nodig is."
    },
    {
      icon: 'mdi:account-group',
      title: 'Tijdelijke versterking',
      description: 'met de expertise die essentieel is voor het succesvol afronden van een transformatie of innovatie.'
    },
    {
      icon: 'mdi:shield-check',
      title: 'Doelen behalen zonder vertraging',
      description: 'dankzij de snelle inzet en effectieve aanpak van onze interim-managers.'
    }
  ];

  const accordionItems = [
    {
      value: 'stap1',
      stap: 'Stap 1.',
      title: 'Behoefteanalyse',
      description: 'We starten met het in kaart brengen van jouw specifieke behoeften. Dit kan variëren van het overbruggen van een managementvacature tot het leiden van een transformatieproject.'
    },
    {
      value: 'stap2',
      stap: 'Stap 2.',
      title: 'Gerichte versterking',
      description: 'Op basis van de behoefteanalyse selecteren we een interim-manager met de juiste ervaring en vaardigheden. Deze manager sluit naadloos aan bij jouw team en begint direct met het aanpakken van de uitdagingen.'
    },
    {
      value: 'stap3',
      stap: 'Stap 3.',
      title: 'Implementatie en begeleiding',
      description: 'Onze interim-managers zijn gewend om zich snel in te werken en leveren vanaf dag één toegevoegde waarde. Ze begeleiden jouw team door het veranderproces en zorgen ervoor dat de doelstellingen worden bereikt.'
    },
    {
      value: 'stap4',
      stap: 'Stap 4.',
      title: 'Kennisoverdracht',
      description: 'Naast het leiden van de transformatie of innovatie, zorgen onze interim-managers ervoor dat hun kennis en ervaring worden overgedragen aan jouw team. Zo blijft de waarde van hun bijdrage behouden, ook nadat hun opdracht is voltooid.'
    }
  ]

  return (
    <div className='flex flex-col'>
      <Popup />
      <div className="container flex flex-col md:flex-row gap-16 md:gap-32 md:py-16 py-4">
        <div className="md:w-1/2 flex flex-col gap-4">
          <p className='font-aktiv-grotesk-extended text-base text-donkergroen'>Organisatie verbetering</p>
          <h1 className="text-paars">Interim management</h1>
          <p className="font-aktiv-grotesk-extended text-paars">In de dynamische wereld van de maakindustrie kunnen er momenten zijn waarop jouw bedrijf extra kennis en capaciteit nodig heeft om een transformatie of innovatie succesvol door te voeren. Vosteq biedt interim-managementdiensten die jouw team tijdelijk versterken met ervaren leiders die gewend zijn om in uitdagende omstandigheden te presteren.</p>
          <h2 className='pt-8 text-paars max-md:text-2xl'>Tijdelijke versterking op cruciale momenten</h2>
          <p className='text-diepgrijs'>Ons interim-management biedt jouw bedrijf tijdelijke versterking op cruciale momenten. Of je nu een transformatie doorvoert, een innovatie implementeert, of te maken hebt met een complexe uitdaging; onze interim-managers staan klaar om je te ondersteunen. Ze brengen niet alleen de benodigde expertise mee, maar hebben ook ervaring met het werken in omgevingen waar iets extra's nodig is.</p>
        </div>
        <div className="md:w-1/2 container relative pb-16">
          <DecoRight imageSrc='/images/interimmanagement.webp' />
        </div>
      </div>
      <WerkStappen accordionItems={accordionItems}/>
      <WatLevertHetOp omschrijving='Dankzij ons interim-management:' steps={steps} />
      <BottomCta titel='Heb je tijdelijk versterking nodig om jouw innovatie of transformatie tot een succes te maken?' paragraph='Neem dan contact met ons op en ontdek hoe onze interim-managers jouw bedrijf kunnen ondersteunen.' />
    </div>
  );
}