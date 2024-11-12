import Image from 'next/image';
import { Popup } from '@/components/ui/popup';
import type { Metadata } from "next";
import { WatLevertHetOp } from '@/components/vosteq/wat-levert-het-op';
import { WerkStappen } from '@/components/vosteq/werk-stappen';
import { BottomCta } from '@/components/vosteq/bottom-cta';
import DecoRight from '@/components/vosteq/deco-right';

export const metadata: Metadata = {
  title: "Vosteq | Parttime Innovatieteam",
  description: "Aan het bouwen!",
};

export default function ParttimeInnovatieteam() {
  const steps = [
    {
      icon: 'mdi:account-cog',
      title: 'Multidisciplinaire aanpak',
      description: 'waarbij expertise uit verschillende vakgebieden samenkomt om jouw project tot een succes te maken.'
    },
    {
      icon: 'mdi:currency-eur',
      title: 'Verlaagde kosten',
      description: 'door efficiënt gebruik te maken van de parttime inzet van onze specialisten, zonder onnodige overhead.'
    },
    {
      icon: 'mdi:chart-line',
      title: 'Succesvolle transformatie',
      description: 'die volledig is afgestemd op de behoeften van jouw bedrijf en die meetbare resultaten oplevert.'
    }
  ];

  const accordionItems = [
    {
      value: 'stap1',
      stap: 'Stap 1.',
      title: 'Gecombineerde rollen',
      description: 'onze directieadviseurs, projectmanagers, interim-managers en experts werken nauw samen binnen hetzelfde projectteam. Ze combineren hun kennis en ervaring om uitdagingen vanuit verschillende invalshoeken aan te pakken.'
    },
    {
      value: 'stap2',
      stap: 'Stap 2.',
      title: 'Flexibiliteit en schaalbaarheid',
      description: 'we passen de inzet van ons team aan op basis van de specifieke behoeften binnen jouw project. Dit betekent dat we onze inspanningen kunnen op- en afschalen, afhankelijk van de voortgang en complexiteit van de transformatie.'
    },
    {
      value: 'stap3',
      stap: 'Stap 3.',
      title: 'Kosteneffectieve aanpak',
      description: 'omdat we de rollen in deeltijd combineren, kunnen we de kosten laag houden zonder in te boeten op kwaliteit. Onze aanpak is erop gericht dat jouw organisatie de kosten voor ons parttime innovatieteam binnen een jaar terugverdient dankzij de gerealiseerde efficiëntieverbeteringen en besparingen in jouw bedrijf.'
    }
  ]

  return (
    <div className='flex flex-col'>
      <Popup />
      <div className="container flex flex-col md:flex-row gap-16 md:gap-32 md:py-16 py-4">
        <div className="md:w-1/2 flex flex-col gap-4">
          <p className='font-aktiv-grotesk-extended text-base text-donkergroen'>Organisatie verbetering</p>
          <h1 className="text-paars">Parttime innovatieteam</h1>
          <p className="font-aktiv-grotesk-extended text-paars">Als MKB-maakbedrijf is het niet nodig om bij elk project alle rollen volledig in te vullen, maar bij complexe en grote transformaties is een geïntegreerde aanpak wel essentieel. Daarom biedt Vosteq een parttime innovatieteam dat kosteneffectief werkt om jouw bedrijf te begeleiden bij uitdagende projecten en innovaties. In dit innovatieteam combineren we de expertise van een directieadviseur, een projectmanager, een interim-manager en specialistische experts, zodat we de kennis en kunde leveren die nodig zijn om jouw doelen te realiseren.</p>
          <h2 className='pt-8 text-paars max-md:text-2xl'>Ondersteuning op het juiste moment</h2>
          <p className='text-diepgrijs'>In plaats van fulltime rollen die de kosten kunnen opdrijven, werkt ons innovatieteam in deeltijd. We zorgen ervoor dat alle rollen in het team, of het nu gaat om directieadvies, projectmanagement, interim-management of gespecialiseerde expertise, nauw met elkaar samenwerken en elkaar aanvullen. Dit betekent dat we precies de juiste hoeveelheid ondersteuning bieden op het juiste moment, zonder jouw organisatie op te zadelen met onnodige kosten.</p>
        </div>
        <div className="md:w-1/2 container relative pb-16">
          <DecoRight imageSrc='/images/parttime-innovatieteam.webp' />
        </div>
      </div>
      <WerkStappen accordionItems={accordionItems} />
      <WatLevertHetOp omschrijving='Met de inzet van parttime innovatieteam:' steps={steps} />
      <BottomCta titel='Wil je meer weten over de manier waarop ons parttime innovatieteam jouw bedrijf kan helpen bij een kosteneffectieve transformatie?' paragraph='Neem dan contact met ons op en ontdek hoe we onze rollen slim en efficiënt combineren om jouw doelen te bereiken.' />
    </div>
  );
}