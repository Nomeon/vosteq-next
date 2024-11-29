import { Popup } from '@/components/ui/popup';
import type { Metadata } from "next";
import { WatLevertHetOp } from "@/components/vosteq/wat-levert-het-op";
import { WerkStappen } from '@/components/vosteq/werk-stappen';
import { BottomCta } from '@/components/vosteq/bottom-cta';
import DecoRight from '@/components/vosteq/deco-right';

export const metadata: Metadata = {
  title: "Directieadvies voor MKB-maakbedrijven | Vosteq",
  description: "Ontdek hoe Vosteq met directieadvies jouw MKB-maakbedrijf versterkt. Van diepgaande analyse tot implementatie: bouw aan een solide interne basis voor groei en winstgevendheid",
};

export default function Directieadvies() {
  const steps = [
    {
      icon: 'mdi:cog-transfer',
      title: 'Verbeterde efficiëntie',
      description: 'door processen te optimaliseren en middelen beter in te zetten.'
    },
    {
      icon: 'mdi:account-group',
      title: 'Sterkere bedrijfscultuur',
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
      description: 'door een scherp inzicht in je eigen organisatie en verbeterpunten.'
    }
  ];

  const accordionItems = [
    {
      value: 'stap1',
      stap: 'Stap 1.',
      title: 'Inzicht krijgen in je bedrijf',
      description: 'Waar staat jouw organisatie nu? Om dit helder te krijgen, organiseren we persoonlijke koffiegesprekken en analyseren we bedrijfsprocessen, technologieën, organisatiestructuur, leiderschapscapaciteiten en werknemersbetrokkenheid. Zo leggen we samen de basis voor gerichte verbetering.'
    },
    {
      value: 'stap2',
      stap: 'Stap 2.',
      title: 'Identificeren van kernkwaliteiten',
      description: 'Wij helpen je de unieke kwaliteiten en sterke punten van jouw organisatie te ontdekken, zoals innovatieve productieprocessen, een sterk team of diepgaande technische expertise - of een krachtige combinatie daarvan.'
    },
    {
      value: 'stap3',
      stap: 'Stap 3.',
      title: 'Strategische versterking',
      description: 'Met onze inzichten ontwikkelen we strategieën om jouw kernkwaliteiten te versterken. Denk aan procesoptimalisatie, automatisering, digitalisering, organisatieontwikkeling, versterking van bedrijfscultuur, business development of het vergroten van innovatievermogen.'
    },
    {
      value: 'stap4',
      stap: 'Stap 4.',
      title: 'Implementatie en begeleiding',
      description: 'Wij begeleiden je bij de implementatie van deze strategieën en zorgen dat ze naadloos worden geïntegreerd in de dagelijkse operaties van jouw bedrijf.'
    }
  ]

  return (
    <div className='flex flex-col'>
      <Popup />
      <div className="container flex flex-col md:flex-row gap-16 md:gap-32 md:py-16 py-4">
        <div className="md:w-1/2 flex flex-col gap-4">
          <p className='font-aktiv-grotesk-extended text-base text-donkergroen'>Organisatie verbetering</p>
          <h1 className="text-paars">Directie advies</h1>
          <p className="font-aktiv-grotesk-extended text-paars">Succesvolle groei en duurzame winstgevendheid beginnen bij een solide interne basis. Bij Vosteq bieden we directieadvies op maat, gericht op het versterken van jouw organisatie van binnenuit. Door te focussen op jouw unieke kernkwaliteiten helpen we je om externe uitdagingen te overwinnen en kansen te benutten. Hierbij nemen we jouw organisatie en haar onderscheidende krachten als uitgangspunt.</p>
          <h2 className='pt-8 text-paars max-md:text-2xl'>Diepgaande analyse</h2>
          <p className='text-diepgrijs'>We beginnen met een diepgaande “inside-out” analyse van de interne processen, de bedrijfscultuur en de middelen in jouw organisatie. In plaats van veel nadruk te leggen op externe trends en bedreigingen, richten we ons eerst op wat jouw bedrijf uniek maakt en hoe je deze interne krachten kunt versterken om zo een concurrentievoordeel te creëren.</p>
        </div>
        <div className="md:w-1/2 container relative pb-16">
          <DecoRight imageSrc="/images/directieadvies.webp" />
        </div>
      </div>
      <WerkStappen accordionItems={accordionItems} />
      <WatLevertHetOp omschrijving='Dankzij onze inside-out benadering realiseren we:' steps={steps} />
      <BottomCta titel="Wil je duurzame groei en winstgevendheid realiseren? " paragraph="Ontdek hoe Vosteq jouw organisatie van binnenuit kan versterken. Neem contact met ons op en start vandaag nog." />
    </div>
  );
}