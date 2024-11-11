import Image from 'next/image';
import type { Metadata } from "next";
import { WatLevertHetOp } from "@/components/vosteq/wat-levert-het-op";
import { WerkStappen } from '@/components/vosteq/werk-stappen';
import { BottomCta } from '@/components/vosteq/bottom-cta';
import { Popup } from '@/components/ui/popup';

export const metadata: Metadata = {
  title: "Vosteq | Inspiratie",
  description: "Aan het bouwen!",
};

export default function Inspiratie() {
  const steps = [
    {
      icon: 'mdi:account-heart',
      title: 'Betrokkenheid en motivatie',
      description: 'binnen je team, wat leidt tot hogere productiviteit en betere resultaten.'
    },
    {
      icon: 'mdi:leaf',
      title: 'Duurzame verandering',
      description: 'omdat oplossingen worden ontworpen met aandacht voor de mensen die ermee werken.'
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
      description: 'Bij elk project nemen we de tijd om de mensen achter de processen te leren kennen. We zorgen ervoor dat we achterhalen wat hen motiveert, waar hun kracht ligt en hoe we hen het beste kunnen ondersteunen.'
    },
    {
      value: 'stap2',
      stap: 'Stap 2.',
      title: 'Empathie en begrip',
      description: 'We werken vanuit empathie en begrip voor de uitdagingen waarmee mensen worden geconfronteerd. Of het nu gaat om het omgaan met veranderingen of het ontwikkelen van nieuwe vaardigheden, we staan klaar om steun te bieden op manieren die aansluiten bij hun behoeften.'
    },
    {
      value: 'stap3',
      stap: 'Stap 3.',
      title: 'Duurzame oplossingen',
      description: 'Omdat mensen centraal staan in onze aanpak, ontwikkelen we oplossingen die rekening houden met de menselijke factor. Dit betekent dat onze veranderingen niet alleen technisch, maar ook praktisch en bruikbaar zijn, zodat ze echt werken in de dagelijkse praktijk.'
    }
  ]

  return (
    <div className='flex flex-col'>
      <Popup />
      <div className="container flex flex-col md:flex-row gap-16 md:gap-32 md:py-16 py-4">
        <div className="md:w-1/2 flex flex-col gap-4">
            <h1 className="text-paars">Inspiratie</h1>
            <p className="font-aktiv-grotesk-extended text-paars">Bij Vosteq geloven we dat mensen het hart vormen van elk succesvol bedrijf. Of het nu gaat om onze eigen medewerkers, jouw team, of de klanten  die we bedienen; de mensen staan altijd centraal in alles wat we doen. We zijn ervan overtuigd dat wanneer mensen goed ondersteund, gewaardeerd en betrokken worden, ze hun volledige potentieel kunnen benutten. En dat leidt tot duurzame groei en innovatie.</p>
            <h2 className='pt-8 text-paars max-md:text-2xl'>De mens centraal</h2>
            <p className="">Bij Vosteq staat de kernwaarde "De mens centraal" voor:</p>
            <div className="flex flex-col gap-1 font-aptos text-base">
              <p className='font-bold'>Respect en waardering:</p>
              <p>We benaderen elke samenwerking met respect en waardering voor de unieke talenten en ervaringen die mensen meebrengen. Dit geldt zowel voor onze eigen medewerkers als voor de teams van onze klanten. We geloven dat elk individu waarde toevoegt en een cruciale rol speelt in het succes van onze projecten.</p>
              <p className='font-bold pt-2'>Ontwikkeling en groei:</p>
              <p>We investeren in de ontwikkeling van onze mensen. Door training, coaching en voortdurende ondersteuning zorgen we ervoor dat iedereen de kans krijgt om te groeien en zijn of haar vaardigheden te verbeteren. Dit geldt ook voor de teams van onze klanten; wij helpen hen om te leren en zich aan te passen aan veranderingen, zodat ze sterker uit elke transformatie komen.</p>
              <p className='font-bold pt-2'>Betrokkenheid en samenwerking:</p>
              <p>We betrekken mensen actief bij het veranderingsproces. We luisteren naar hun ideeën, zorgen dat hun stem wordt gehoord en moedigen hen aan om bij te dragen aan de oplossingen die we implementeren. Dit zorgt voor een gevoel van eigenaarschap en betrokkenheid, wat essentieel is voor succesvolle veranderingen.</p>
            </div>
        </div>
        <div className="md:w-1/2 container relative pb-16">
          <Image className='object-cover' src="/images/deskundigen.webp" alt='Deskundigen' width={650} height={550} />
        </div>
      </div>
      <WerkStappen accordionItems={accordionItems} />
      <WatLevertHetOp omschrijving='Door de mensen centraal te stellen:' steps={steps} />
      <BottomCta titel="Wil je ontdekken wat het voor jouw bedrijf kan betekenen als je samen met Vosteq jouw mensen centraal stelt?" paragraph="Neem dan contact met ons op, zodat we samen kunnen kijken hoe je betrokkenheid en motivatie van je medewerkers kunt versterken, hun talenten optimaal in kunt zetten en zo zorgt voor duurzame veranderingen binnen jouw organisatie." />
    </div>
  );
}