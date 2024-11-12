import Image from 'next/image';
import { Popup } from '@/components/ui/popup';
import type { Metadata } from "next";
import { WatLevertHetOp } from "@/components/vosteq/wat-levert-het-op";
import { WerkStappen } from '@/components/vosteq/werk-stappen';
import { BottomCta } from '@/components/vosteq/bottom-cta';

export const metadata: Metadata = {
  title: "Vosteq | Missie en visie",
  description: "Aan het bouwen!",
};

export default function MissieEnVisie() {
  const steps = [
    {
      icon: 'mdi:lightbulb-on',
      title: 'Innoveren met impact',
      description: 'we helpen MKB-maakbedrijven bij het identificeren en implementeren van innovatieve technologieën en processen die echte, meetbare resultaten opleveren.'
    },
    {
      icon: 'mdi:leaf',
      title: 'Duurzame groei',
      description: 'onze aanpak is gericht op duurzame verandering en groei. We zorgen ervoor dat de oplossingen die we implementeren niet alleen direct effect hebben, maar ook op de lange termijn waarde toevoegen.'
    },
    {
      icon: 'mdi:wrench',
      title: 'Praktische oplossingen',
      description: 'wij geloven in oplossingen die werken in de praktijk. Onze aanpak is praktisch, hands-on en afgestemd op de specifieke behoeften van jouw bedrijf.'
    },
    {
      icon: 'mdi:account-group',
      title: 'Samenwerking',
      description: 'we werken nauw samen met jouw team om ervoor te zorgen dat de veranderingen breed worden gedragen en succesvol worden geïmplementeerd.'
    }
  ];

  return (
    <div className='flex flex-col'>
      <Popup />
      <div className="container flex flex-col md:flex-row gap-16 md:gap-32 md:py-16 py-4">
        <div className="md:w-1/2 flex flex-col gap-4">
          <h1 className="text-paars">Onze visie: florerende MKB-maakbedrijven</h1>
          <p className="font-aktiv-grotesk-extended text-paars">Bij Vosteq zien we een toekomst waarin MKB-maakbedrijven niet alleen overleven, maar ook kunnen floreren. Het is onze visie dat elk MKB-maakbedrijf de kracht heeft om te innoveren en te groeien en een duurzame impact kan hebben in een steeds veranderende wereld. We geloven dat het juiste gebruik van technologie, mensen, en processen ervoor kan zorgen dat MKB-maakbedrijven hun volledige potentieel kunnen bereiken en kunnen blijven concurreren in een globaliserende markt.</p>
          <h2 className='pt-8 text-paars max-md:text-2xl'>Onze missie: jouw partner in groei en innovatie</h2>
          <p className='text-diepgrijs'>Het is onze missie om MKB-maakbedrijven te ondersteunen bij het realiseren van hun ambities. We doen dit door oplossingen op maat te bieden die gericht zijn op het optimaliseren van bedrijfsprocessen, door innovatieve technologieën te implementeren en door het menselijk kapitaal binnen jouw organisatie te versterken. We willen jouw betrouwbare partner zijn die niet alleen advies geeft, maar ook actief bijdraagt aan de uitvoering en het succes van jouw projecten.</p>
        </div>
        <div className="md:w-1/2 container relative pb-16">
          <Image className='object-cover' src="/images/deskundigen.webp" alt='Deskundigen' width={650} height={550} />
        </div>
      </div>
      <WatLevertHetOp omschrijving='Hoe wij invulling geven aan onze missie en visie:' steps={steps} />
      <BottomCta titel="Wil je meer weten over de manier waarop onze visie en missie jou kunnen helpen om je doelen te bereiken?" paragraph="Neem dan contact met ons op en ontdek hoe Vosteq jouw partner kan zijn in groei en innovatie." />
    </div>
  );
}