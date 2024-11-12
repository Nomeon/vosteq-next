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
          <h1 className="text-paars">MVO-beleid</h1>
          <p className="font-aktiv-grotesk-extended text-paars">Bij Vosteq nemen we onze verantwoordelijkheid ten opzichte van mens en milieu serieus. Ons MVO-beleid is geïntegreerd in al onze activiteiten en richt zich op duurzaamheid, ethisch ondernemen en het ondersteunen van de gemeenschappen waarin we actief zijn.<br/> <br/>Wij streven ernaar om niet alleen waarde toe te voegen voor onze klanten, maar ook om een positieve impact te hebben op de samenleving en het milieu. Dit doen we door duurzame oplossingen te bieden, onze CO2-uitstoot te minimaliseren en samen te werken met partners die dezelfde waarden delen.</p>
        </div>
        <div className="md:w-1/2 container relative pb-16">
          <DecoRight imageSrc='/images/Vosteq-Hapert-2018-1.webp'/>
        </div>
      </div>
    </div>
  );
}