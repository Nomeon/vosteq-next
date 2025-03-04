import { Popup } from '@/components/ui/popup';
import type { Metadata } from "next";
import DecoRight from '@/components/vosteq/deco-right';
import WatLevertHetOp from '@/components/vosteq/wat-levert-het-op';
import BottomCta from '@/components/vosteq/bottom-cta';

export const metadata: Metadata = {
  title: "Werken bij Vosteq: Bouw aan Innovatie in de Maakindustrie | Vosteq",
  description: "Wil jij werken bij Vosteq? Sluit je aan bij een innovatief team dat bedrijven helpt groeien en innoveren. Bekijk onze vacatures in de maakindustrie.",
};

export default function WerkenBijVosteq() {
  const steps = [
    {
    icon: 'mdi:heart',
    title: 'Passie hebben',
    description: 'voor innovatie en duurzame groei'
    },
    {
    icon: 'mdi:lightbulb-on',
    title: 'Denken in oplossingen',
    description: 'en resultaatgericht werken'
    },
    {
    icon: 'mdi:account-group',
    title: 'Graag samenwerken',
    description: 'in een dynamische omgeving'
    }
  ];

  return (
    <div className='flex flex-col'>
      <Popup />
      <div className="container flex flex-col lg:flex-row gap-16 lg:gap-32 lg:py-16 py-4">
        <div className="lg:w-1/2 flex flex-col gap-4">
          <p className='font-aktiv-grotesk-extended text-base text-donkergroen'>Sluit je aan bij een innovatief team</p>
          <h1 className="text-paars">Werken bij Vosteq</h1>
          <p className="font-aktiv-grotesk-extended text-paars">Wil jij als zelfstandig professional bijdragen aan de transformatie en groei van MKB-maakbedrijven? In het Vosteq Expert Team werk je samen met andere ervaren specialisten in een coöperatie die bedrijven helpt bij duurzame veranderingen. Als lid van ons netwerk zet je jouw expertise in op uitdagende projecten, werk je samen in transformatieteams of ondersteun je organisaties als on-demand specialist of interim manager.</p>
          <h3 className='text-paars'>Wat werken binnen de Vosteq-coöperatie betekent</h3>
          <div className="flex flex-col gap-1 font-aptos text-base">
              <p className='font-bold'>Flexibiliteit en ondernemerschap:</p>
              <p>Je blijft zelfstandig en bepaalt zelf aan welke projecten je werkt, terwijl je profiteert van de samenwerking en ondersteuning binnen de coöperatie.</p>
              <p className='font-bold pt-2'>Impactvolle projecten:</p>
              <p>Je helpt maakbedrijven bij complexe uitdagingen en draagt direct bij aan hun groei en innovatie.</p>
              <p className='font-bold pt-2'>Inspirerende samenwerking:</p>
              <p>Je werkt samen met andere experts met diverse achtergronden, waardoor kennisdeling en ontwikkeling centraal staan.</p>
              <p className='font-bold pt-2'>Duurzame verandering realiseren:</p>
              <p>We streven naar langetermijnresultaten en helpen bedrijven niet alleen met advies, maar ook met de implementatie van verbeteringen.</p>
          </div>
        </div>
        <div className="lg:w-1/2 container relative pb-16">
          <DecoRight imageSrc='/images/Vosteq-Hapert-2018-1.webp'/>
        </div>
      </div>
      <WatLevertHetOp steps={steps} title='Wat zoeken wij?' omschrijving='We zijn altijd op zoek naar getalenteerde professionals die:' />
      <BottomCta titel='Wil jij deel uitmaken van onze coöperatie en impact maken in de maakindustrie?' paragraph='We bieden een stimulerende werkomgeving waarin je je continu kunt ontwikkelen en een directe impact kunt hebben voor onze klanten. We komen graag met je in contact!'/>
    </div>
  );
}