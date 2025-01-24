import { Popup } from '@/components/ui/popup';
import type { Metadata } from "next";
import { WatLevertHetOp } from "@/components/vosteq/wat-levert-het-op";
import DecoRight from '@/components/vosteq/deco-right';
import { BottomCta } from '@/components/vosteq/bottom-cta';

export const metadata: Metadata = {
  title: "Visie en Missie: Innovatie en Groei voor MKB-Maakbedrijven | Vosteq",
  description: "Lees hoe Vosteq MKB-maakbedrijven helpt floreren met een duidelijke visie en missie. Ontdek onze praktische aanpak en duurzame oplossingen",
};

export default function VisieEnMissie() {
  const steps = [
    {
      icon: 'mdi:lightbulb-on',
      title: 'Innoveren met impact',
      description: 'Wij helpen MKB-maakbedrijven innovatieve technologieën en processen te identificeren en implementeren, gericht op meetbare resultaten.'
    },
    {
      icon: 'mdi:leaf',
      title: 'Duurzame groei',
      description: 'Onze aanpak focust op veranderingen die niet alleen direct effect hebben, maar ook op de lange termijn waarde toevoegen.'
    },
    {
      icon: 'mdi:wrench',
      title: 'Praktische oplossingen',
      description: 'Wij geloven in een hands-on aanpak met praktische, werkbare oplossingen die aansluiten op de unieke behoeften van jouw bedrijf.'
    },
    {
      icon: 'mdi:account-group',
      title: 'Samenwerking',
      description: 'Door nauw samen te werken met jouw team zorgen we dat veranderingen breed worden gedragen en succesvol worden uitgevoerd.'
    }
  ];

  return (
    <div className='flex flex-col'>
      <Popup />
      <div className="container flex flex-col lg:flex-row gap-16 lg:gap-32 lg:py-16 py-4">
        <div className="lg:w-1/2 flex flex-col gap-4">
          <p className='font-aktiv-grotesk-extended text-base text-donkergroen'>Samenwerken aan een duurzame toekomst</p>
          <h1 className="text-paars">Onze visie: florerende MKB-maakbedrijven</h1>
          <p className="font-aktiv-grotesk-extended text-paars">Bij Vosteq zien we een toekomst waarin MKB-maakbedrijven niet alleen overleven, maar juist floreren. Wij geloven dat elk MKB-maakbedrijf de kracht heeft om te innoveren, groeien en een duurzame impact te maken in een wereld die constant verandert. Met de juiste inzet van technologie, mensen en processen kunnen MKB-maakbedrijven hun volledige potentieel bereiken en concurreren in een globaliserende markt.</p>
          <h3 className='pt-8 text-paars max-lg:text-2xl'>Onze missie: jouw partner in groei en innovatie</h3>
          <p className='text-diepgrijs'>Bij Vosteq ondersteunen we MKB-maakbedrijven bij het realiseren van hun ambities met op maat gemaakte oplossingen. We richten ons op:</p>
          <ul className="flex flex-col gap-1 font-aptos text-base">
            <li className='list-disc list-inside'><b>Het optimaliseren van bedrijfsprocessen</b> voor efficiëntere en slimmere werkwijzen.</li>
            <li className='list-disc list-inside'><b>Het implementeren van innovatieve technologieën</b> om de concurrentie voor te blijven.</li>
            <li className='list-disc list-inside'><b>Het versterken van menselijk kapitaal</b> door talent te ontwikkelen en optimaal te benutten.</li>
          </ul>
          <p>Als betrouwbare partner adviseren we niet alleen, maar dragen we actief bij aan de uitvoering en het succes van projecten. Met onze klanten bouwen we samen aan duurzame groei en innovatie.</p>
        </div>
        <div className="lg:w-1/2 container relative pb-16">
          <DecoRight imageSrc="/images/parttime-innovatieteam.webp" />
        </div>
      </div>
      <WatLevertHetOp omschrijving='Hoe wij invulling geven aan onze visie en missie:' steps={steps} />
      <BottomCta titel="Wil jij weten hoe onze visie en missie jouw bedrijf kunnen helpen groeien? " paragraph="Neem contact met ons op en ontdek hoe Vosteq jouw partner kan zijn in duurzame innovatie en groei." />
    </div>
  );
}