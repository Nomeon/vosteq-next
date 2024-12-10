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
      <div className="container flex flex-col md:flex-row gap-16 md:gap-32 md:py-16 py-4">
        <div className="md:w-1/2 flex flex-col gap-4">
          <p className='font-aktiv-grotesk-extended text-base text-donkergroen'>Sluit je aan bij een innovatief team</p>
          <h1 className="text-paars">Werken bij Vosteq</h1>
          <p className="font-aktiv-grotesk-extended text-paars">Wil jij werken in een dynamisch team dat bedrijven helpt duurzame veranderingen te realiseren? Bij Vosteq zet je jouw expertise in voor uitdagende projecten in de maakindustrie en draag je direct bij aan innovatie en succes. We zoeken getalenteerde professionals die onze passie voor resultaat en vooruitgang delen. Sluit je aan en maak het verschil!  We bieden een stimulerende werkomgeving waarin je je continu kunt ontwikkelen en een directe impact kunt hebben voor onze klanten.</p>
          <h3 className='text-paars'>Wat werken bij Vosteq betekent</h3>
          <div className="flex flex-col gap-1 font-aptos text-base">
              <p className='font-bold'>Impactvolle projecten:</p>
              <p>Je werkt aan complexe uitdagingen in de maakindustrie en draagt direct bij aan de groei en innovatie van MKB-maakbedrijven.</p>
              <p className='font-bold pt-2'>Stimulerende werkomgeving:</p>
              <p>Bij Vosteq kun je jezelf ontwikkelen. Of het nu gaat om training, coaching of leren van collega’s, we bieden je alle tools om te groeien.</p>
              <p className='font-bold pt-2'>Samenwerken met andere experts:</p>
              <p>Ons team bestaat uit professionals met diverse achtergronden, waardoor je altijd kunt rekenen op inspirerende samenwerking.</p>
              <p className='font-bold pt-2'>Bijdragen aan duurzame verandering:</p>
              <p>We streven naar langetermijnresultaten en oplossingen die waarde toevoegen voor onze klanten én de maatschappij.</p>
          </div>
        </div>
        <div className="md:w-1/2 container relative pb-16">
          <DecoRight imageSrc='/images/Vosteq-Hapert-2018-1.webp'/>
        </div>
      </div>
      <WatLevertHetOp steps={steps} title='Wat zoeken wij?' omschrijving='We zijn altijd op zoek naar getalenteerde professionals die:' />
      <BottomCta titel='Wil jij deel uitmaken van ons team en een verschil maken in de maakindustrie? ' paragraph='We bieden een stimulerende werkomgeving waarin je je continu kunt ontwikkelen en een directe impact kunt hebben voor onze klanten. We komen graag met je in contact!'/>
    </div>
  );
}