import { Popup } from '@/components/ui/popup';
import type { Metadata } from "next";
import DecoRight from '@/components/vosteq/deco-right';

export const metadata: Metadata = {
  title: "Vosteq | MVO-beleid",
  description: "Aan het bouwen!",
};

export default function MVOBeleid() {
  return (
    <div className='flex flex-col'>
      <Popup />
      <div className="container flex flex-col md:flex-row gap-16 md:gap-32 md:py-16 py-4">
        <div className="md:w-1/2 flex flex-col gap-4">
          <h1 className="text-paars">Werken bij Vosteq</h1>
          <p className="font-aktiv-grotesk-extended text-paars">Wil je deel uitmaken van een dynamisch team dat bedrijven helpt bij het realiseren van duurzame veranderingen? Bij Vosteq krijg je de kans om je expertise in te zetten bij uitdagende projecten binnen de maakindustrie. Wij zijn altijd op zoek naar getalenteerde professionals die onze passie voor innovatie en resultaat delen.<br/> <br/>We bieden een stimulerende werkomgeving waarin je je continu kunt ontwikkelen en een directe impact kunt hebben voor onze klanten.</p>
        </div>
        <div className="md:w-1/2 container relative pb-16">
          <DecoRight imageSrc='/images/Vosteq-Hapert-2018-1.webp'/>
        </div>
      </div>
    </div>
  );
}