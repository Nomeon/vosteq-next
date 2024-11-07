import Image from 'next/image';
import { WatLevertHetOp } from "@/components/vosteq/wat-levert-het-op";
import { Popup } from '@/components/ui/popup';
import type { Metadata } from "next";
import { BottomCta } from '@/components/vosteq/bottom-cta';
import WerkStappen from '@/components/vosteq/werk-stappen';

export const metadata: Metadata = {
  title: "Vosteq | Directieadvies",
  description: "Aan het bouwen!",
};

export default function Directieadvies() {
  const steps = [
    {
      icon: 'mdi:cog-transfer',
      title: 'Verbeterde interne efficiëntie',
      description: 'door processen te optimaliseren en middelen beter in te zetten.'
    },
    {
      icon: 'mdi:account-group',
      title: 'Een sterkere bedrijfscultuur',
      description: 'waar medewerkers zich betrokken voelen en bijdragen aan het succes van het bedrijf.'
    },
    {
      icon: 'mdi:shield-check',
      title: 'Een duurzaam concurrentievoordeel',
      description: 'door te bouwen op de unieke interne kernwaarden binnen jouw organisatie.'
    },
    {
      icon: 'mdi:chart-line',
      title: 'Betere besluitvorming',
      description: 'dankzij een scherp inzicht in je eigen organisatie en de verbetermogelijkheden.'
    }
  ];

  const accordionItems = [
    {
      value: 'stap1',
      stap: 'Stap 1.',
      title: 'Inzicht krijgen in je bedrijf',
      description: 'Wat is de huidige staat van jouw organisatie? Om een duidelijk antwoord op deze vraag te krijgen, organiseren we koffiegesprekken en analyseren we de bedrijfsprocessen en -technologieën, de organisatiestructuur, de leiderschapscapaciteiten en de werknemersbetrokkenheid.'
    },
    {
      value: 'stap2',
      stap: 'Stap 2.',
      title: 'Identificeren van kernkwaliteiten',
      description: 'We helpen je bij het identificeren van de unieke kwaliteiten en sterke punten binnen jouw organisatie, zoals bijvoorbeeld de innovatieve productieprocessen, het sterke team of de diepgaande technische expertise. Of een combinatie daarvan.'
    },
    {
      value: 'stap3',
      stap: 'Stap 3.',
      title: 'Strategische versterking',
      description: 'Op basis van onze inzichten ontwikkelen we strategieën om de kernkwaliteiten verder te versterken. Dit kan variëren van procesoptimalisatie, automatisering, digitalisering en/of organisatieontwikkeling tot het verbeteren van de bedrijfscultuur en het innovatievermogen.'
    },
    {
      value: 'stap4',
      stap: 'Stap 4.',
      title: 'Implementatie en begeleiding',
      description: 'We begeleiden je bij de implementatie van deze strategieën en zorgen ervoor dat ze in de dagelijkse operaties van je bedrijf worden geïntegreerd.'
    }
  ]

  return (
    <div className='flex flex-col'>
      <Popup />
      <div className="container flex flex-col md:flex-row gap-16 md:gap-32 md:py-16 py-4">
        <div className="md:w-1/2 flex flex-col gap-4">
          <p className='font-aktiv-grotesk-extended text-base text-donkergroen'>Organisatie verbetering</p>
          <h1 className="text-paars">Directie advies</h1>
          <p className="font-aktiv-grotesk-extended text-paars">Succesvolle groei en duurzame winstgevendheid beginnen bij een solide interne basis. Bij Vosteq bieden we directieadvies dat zich richt op het versterken van jouw organisatie van binnenuit, zodat je beter voorbereid bent om externe uitdagingen aan te gaan en kansen te benutten. Hierbij nemen we jouw organisatie en haar onderscheidende krachten als uitgangspunt.</p>
          <h2 className='pt-8 text-paars max-md:text-2xl'>Diepgaande analyse</h2>
          <p className='text-diepgrijs'>Onze "inside-out benadering" begint met een diepgaande analyse van de interne processen, de bedrijfscultuur en de middelen in jouw organisatie. In plaats van veel nadruk te leggen op externe trends en bedreigingen, richten we ons eerst op wat jouw bedrijf uniek maakt en hoe je deze interne krachten kunt versterken om zo een concurrentievoordeel te creëren.</p>
        </div>
        <div className="md:w-1/2 container relative pb-16">
          <Image className='object-cover' src="/images/deskundigen.webp" alt='Deskundigen' width={650} height={550} />
        </div>
      </div>
      <WerkStappen accordionItems={accordionItems} />
      <WatLevertHetOp omschrijving='Dankzij onze inside-out benadering realiseren we:' steps={steps} />
      <BottomCta titel="Wil je succesvolle groei en duurzame winstgevendheid?" paragraph="Neem dan vandaag nog contact met ons op en ontdek hoe ons directieadvies jouw organisatie van binnenuit versterkt." />
    </div>
  );
}