import Image from 'next/image';
import { Popup } from '@/components/ui/popup';
import type { Metadata } from "next";
import { WatLevertHetOp } from '@/components/vosteq/wat-levert-het-op';
import { WerkStappen } from '@/components/vosteq/werk-stappen';
import { BottomCta } from '@/components/vosteq/bottom-cta';
import DecoRight from '@/components/vosteq/deco-right';

export const metadata: Metadata = {
  title: "Vosteq | Interim Experts",
  description: "Aan het bouwen!",
};

export default function InterimExperts() {
  const steps = [
    {
      icon: 'mdi:lightbulb-on',
      title: 'Toegang tot vakkennis',
      description: 'precies wanneer je die nodig hebt, zonder de verplichting van een fulltime-aanstelling.'
    },
    {
      icon: 'mdi:chart-line',
      title: 'Vergrootte kans op succes',
      description: 'bij innovaties door gebruik te maken van de expertise van ervaren professionals.'
    },
    {
      icon: 'mdi:account-supervisor',
      title: 'Tijdelijke versterking',
      description: 'met experts die gefocust zijn op het behalen van resultaten en het delen van hun kennis.'
    }
  ];

  const accordionItems = [
    {
      value: 'stap1',
      stap: 'Stap 1.',
      title: 'Behoefteanalyse',
      description: 'We beginnen met het identificeren van de specifieke kennis en vaardigheden die je nodig hebt voor jouw innovatieproject. Dit kan variëren van technische expertise tot strategisch inzicht.'
    },
    {
      value: 'stap2',
      stap: 'Stap 2.',
      title: 'Matchen met de juiste expert(s)',
      description: 'We selecteren de juiste interim-expert(s) die naadloos aansluit(en) bij jouw projectbehoeften. Onze specialisten brengen niet alleen hun expertise mee, maar ook de ervaring om direct impact te maken.'
    },
    {
      value: 'stap3',
      stap: 'Stap 3.',
      title: 'Directe inzet',
      description: 'Onze interim-experts worden snel en efficiënt in jouw organisatie geïntegreerd. Ze werken nauw samen met je team om ervoor te zorgen dat de innovatie succesvol wordt geïmplementeerd.'
    },
    {
      value: 'stap4',
      stap: 'Stap 4.',
      title: 'Kennisoverdracht',
      description: 'Naast het bijdragen aan de innovatie, zorgen onze interim-experts ervoor dat hun kennis en vaardigheden worden overgedragen aan jouw interne team. Zo blijft de toegevoegde waarde behouden, ook nadat het project is afgerond.'
    }
  ]

  return (
    <div className='flex flex-col'>
      <Popup />
      <div className="container flex flex-col md:flex-row gap-16 md:gap-32 md:py-16 py-4">
        <div className="md:w-1/2 flex flex-col gap-4">
          <p className='font-aktiv-grotesk-extended text-base text-donkergroen'>Organisatie verbetering</p>
          <h1 className="text-paars">Interim experts</h1>
          <p className="font-aktiv-grotesk-extended text-paars">Als MKB-maakbedrijf heb je niet altijd alle specifieke vakkennis in huis die nodig is om innovaties succesvol door te voeren. Vosteq heeft interim-experts in huis die jouw organisatie tijdelijk versterken met de expertise die je nodig hebt om vooruit te komen. Of het nu om technologische innovatie, procesoptimalisatie of het ontwikkelen van nieuwe producten gaat; onze interim-experts staan voor je klaar.</p>
          <h2 className='pt-8 text-paars max-md:text-2xl'>Inbreng van specifieke vakkennis</h2>
          <p className='text-diepgrijs'>Onze interim-experts zijn hoogopgeleide specialisten met jarenlange ervaring in de maakindustrie. Ze brengen de specifieke vakkennis mee die jouw bedrijf nodig heeft om complexe innovaties en projecten tot een succes te maken. Deze experts worden tijdelijk aan je team toegevoegd, zodat je kunt profiteren van hun kennis zónder de noodzaak van een langdurige aanstelling.</p>
        </div>
        <div className="md:w-1/2 container relative pb-16">
          <DecoRight imageSrc='/images/interimexperts.webp' />
        </div>
      </div>
      <WerkStappen accordionItems={accordionItems} />
      <WatLevertHetOp omschrijving='Met de inzet van onze interim-experts:' steps={steps} />
      <BottomCta titel='Heb je specifieke vakkennis nodig om jouw innovatie tot een succes te maken?' paragraph='Neem dan contact met ons op en ontdek hoe onze interim-experts jouw team kunnen versterken.' />
   </div>
  );
}