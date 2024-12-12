import type { Metadata } from "next";
import { WatLevertHetOp } from "@/components/vosteq/wat-levert-het-op";
import { WerkStappen } from '@/components/vosteq/werk-stappen';
import { BottomCta } from '@/components/vosteq/bottom-cta';
import { Popup } from '@/components/ui/popup';
import DecoRight from '@/components/vosteq/deco-right';

export const metadata: Metadata = {
  title: "De Mens Centraal: Duurzame Veranderingen | Vosteq",
  description: "Bij Vosteq stellen we de mens centraal. Ontdek hoe onze aanpak helpt bij betrokkenheid, motivatie en duurzame veranderingen binnen jouw organisatie.",
};

export default function Inspiratie() {
  const steps = [
    {
      icon: 'mdi:account-heart',
      title: 'Betrokkenheid en motivatie',
      description: 'in je team, dat productiever werkt en betere resultaten behaalt.'
    },
    {
      icon: 'mdi:leaf',
      title: 'Duurzame verandering',
      description: 'omdat de oplossingen rekening houden met de mensen die ze uitvoeren.'
    },
    {
      icon: 'mdi:handshake',
      title: 'Positieve werkomgeving',
      description: 'waarin respect en waardering de basis vormen voor succes.'
    }
  ];

  const accordionItems = [
    {
      value: 'stap1',
      stap: 'Stap 1.',
      title: 'Persoonlijke benadering',
      description: 'Wij nemen de tijd om de mensen achter de processen te leren kennen. Wat motiveert hen? Waar liggen hun krachten? Zo ondersteunen we hen optimaal.'
    },
    {
      value: 'stap2',
      stap: 'Stap 2.',
      title: 'Empathie en begrip',
      description: 'Verandering kan uitdagend zijn. Daarom werken we met empathie en bieden we begeleiding die aansluit bij de behoeften van jouw team.'
    },
    {
      value: 'stap3',
      stap: 'Stap 3.',
      title: 'Duurzame oplossingen',
      description: 'Onze oplossingen houden rekening met de menselijke factor. Ze zijn praktisch, bruikbaar en gericht op langetermijnresultaten.'
    }
  ]

  return (
    <div className='flex flex-col'>
      <Popup />
      <div className="container flex flex-col lg:flex-row gap-16 lg:gap-32 lg:py-16 py-4">
        <div className="lg:w-1/2 flex flex-col gap-4">
          <p className='font-aktiv-grotesk-extended text-base text-donkergroen'>De mens centraal</p>
          <h1 className="text-paars">Inspiratie</h1>
          <p className="font-aktiv-grotesk-extended text-paars">Bij Vosteq geloven we dat mensen het hart vormen van elk succesvol bedrijf. Of het nu gaat om onze eigen medewerkers, partners, of klanten: wij stellen mensen altijd centraal in alles wat we doen. Door mensen te ondersteunen, waarderen en betrekken, helpen we hen hun volledige potentieel te benutten. Dit leidt niet alleen tot hogere betrokkenheid en motivatie, maar ook tot duurzame groei en innovatie.</p>
          <h3 className='pt-8 text-paars max-lg:text-2xl'>De mens centraal bij Vosteq</h3>
          <p className="">Onze benadering is gebaseerd op drie kernprincipes:</p>
          <div className="flex flex-col gap-1 font-aptos text-base">
            <p className='font-bold'>Respect en waardering:</p>
            <p>Wij geloven dat elk individu waarde toevoegt. Daarom benaderen we elke samenwerking met respect en waardering voor unieke talenten en ervaringen - of het nu gaat om jouw team of onze eigen specialisten.</p>
            <p className='font-bold pt-2'>Ontwikkeling en groei:</p>
            <p>Door training, coaching en ondersteuning helpen we mensen hun vaardigheden te verbeteren. Wij geloven dat sterke medewerkers bijdragen aan sterkere organisaties, zeker tijdens veranderingsprocessen.</p>
            <p className='font-bold pt-2'>Betrokkenheid en samenwerking:</p>
            <p>Door mensen actief te betrekken bij het veranderingsproces zorgen we voor eigenaarschap en betrokkenheid. Hun ideeën en inzichten zijn essentieel voor het succes van elke transformatie.</p>
          </div>
        </div>
        <div className="lg:w-1/2 container relative pb-16">
          <DecoRight imageSrc='/images/inspiratie.webp' />
        </div>
      </div>
      <WerkStappen accordionItems={accordionItems} />
      <WatLevertHetOp omschrijving='Door de mensen centraal te stellen, realiseer je:' steps={steps} />
      <BottomCta titel="Wil jij ook de kracht van je mensen benutten om duurzame veranderingen door te voeren?" paragraph="Neem contact met ons op en ontdek hoe Vosteq jouw team kan versterken en inspireren." />
    </div>
  );
}