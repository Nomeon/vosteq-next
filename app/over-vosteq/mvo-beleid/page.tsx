import { Popup } from '@/components/ui/popup';
import type { Metadata } from "next";
import DecoRight from '@/components/vosteq/deco-right';
import WatLevertHetOp from '@/components/vosteq/wat-levert-het-op';
import BottomCta from '@/components/vosteq/bottom-cta';

export const metadata: Metadata = {
  title: "Vosteq | MVO-beleid",
  description: "Aan het bouwen!",
};

export default function MVOBeleid() {

  const steps = [
    {
    icon: 'mdi:heart',
    title: 'Duurzame oplossingen',
    description: 'Wij bieden oplossingen die niet alleen waarde toevoegen voor onze klanten, maar ook bijdragen aan een duurzamere toekomst.'
    },
    {
    icon: 'mdi:leaf',
    title: 'Minimale CO₂-uitstoot',
    description: 'We werken actief aan het verminderen van onze ecologische voetafdruk door efficiënte processen en milieuvriendelijke technologieën te implementeren.'
    },
    {
    icon: 'mdi:handshake',
    title: 'Ethische samenwerkingen',
    description: 'Wij werken uitsluitend samen met partners die onze waarden delen op het gebied van ethisch en duurzaam ondernemen.'
    },
    {
    icon: 'mdi:account-group',
    title: 'Ondersteuning van gemeenschappen',
    description: 'Door lokale initiatieven en gemeenschappen te ondersteunen, dragen we bij aan een betere leefomgeving voor iedereen.'
    }
  ];

  return (
    <div className='flex flex-col'>
      <Popup />
      <div className="container flex flex-col md:flex-row gap-16 md:gap-32 md:py-16 py-4">
        <div className="md:w-1/2 flex flex-col gap-4">
          <p className='font-aktiv-grotesk-extended text-base text-donkergroen'>Maatschappelijk verantwoord ondernemen bij Vosteq</p>
          <h1 className="text-paars">MVO-beleid</h1>
          <p className="font-aktiv-grotesk-extended text-paars">Bij Vosteq zien we maatschappelijk verantwoord ondernemen (MVO) als een integraal onderdeel van onze bedrijfsvoering. We nemen onze verantwoordelijkheid voor mens en milieu serieus en streven naar een positieve impact op de samenleving. Ons MVO-beleid richt zich op duurzaamheid, ethisch ondernemen en het ondersteunen van de gemeenschappen waarin we actief zijn.</p>
          <h3 className='text-paars'>Waarom MVO belangrijk is voor Vosteq</h3>
          <p className=''>Maatschappelijk verantwoord ondernemen is niet alleen een plicht, maar ook een kans om het verschil te maken. Wij geloven dat duurzame keuzes niet alleen bijdragen aan een betere wereld, maar ook leiden tot sterkere bedrijven en langdurige relaties met klanten en partners.
          <br/><br/>
            Met ons MVO-beleid zetten we ons actief in voor een betere toekomst. We creëren waarde op een duurzame manier, met oog voor de behoeften van toekomstige generaties. Daarnaast tonen we betrokkenheid door maatschappelijke initiatieven actief te ondersteunen en nemen we verantwoordelijkheid door in al onze activiteiten verantwoorde keuzes te maken.
          </p>
        </div>
        <div className="md:w-1/2 container relative pb-16">
          <DecoRight imageSrc='/images/Vosteq-Hapert-2018-1.webp'/>
        </div>
      </div>
      <WatLevertHetOp title='Wat betekent MVO voor ons?' omschrijving='Ons MVO-beleid is gebaseerd op de volgende pijlers:' steps={steps} />
      <BottomCta titel='Wil je meer weten over hoe Vosteq werkt aan een duurzame toekomst en maatschappelijk verantwoord onderneemt?' paragraph='Neem contact met ons op en ontdek hoe wij samen impact kunnen maken.'/>
    </div>
  );
}