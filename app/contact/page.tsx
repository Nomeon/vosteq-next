import type { Metadata } from "next";
import { ContactForm } from "@/components/vosteq/contact-form";
import DecoRight from "@/components/vosteq/deco-right";
import { Icon } from "@iconify/react";
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: "Neem contact op met Vosteq | Vosteq",
  description: "Ontdek hoe Vosteq jouw bedrijf kan helpen met procesoptimalisatie en innovatie. Neem vandaag nog contact op voor een vrijblijvend gesprek en ontdek de mogelijkheden!",
};

const DynamicMapComponent = dynamic(() => import('@/components/vosteq/map-component'), { ssr: false });

export default function Contact() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full md:h-96 max-md:py-16 max-md:container text-center flex flex-col items-center justify-center gap-16 bg-gradient-to-br from-paars to-groen from-60%">
        <h1 className="text-wit">Contact</h1>
        <p className="text-wit text-lg w-2/3 text-center md:container">Wij zijn Vosteq: jouw partner in organisatieverbetering en procesoptimalisatie. Met onze kennis en ervaring helpen we jouw bedrijf naar een nieuwe toekomstbestendige horizon. Ontdek hoe we meer uit mens en machine halen.</p>
      </div>
      <div className="container flex flex-col md:flex-row gap-16 md:gap-32 md:py-16 md:pt-32 py-8">
        <div className="md:w-1/2 flex flex-col gap-4">
          <p className='font-aktiv-grotesk-extended text-base text-donkergroen'>Maak kennis</p>
          <h2 className="text-paars">Neem contact op met Vosteq</h2>
          <p className="font-aktiv-grotesk-extended text-paars">Heb je vragen over procesoptimalisatie, digitalisering of strategische verbeteringen? Ons team van experts staat klaar om je te helpen. Neem gerust contact met ons op via onderstaand formulier of andere contactopties.</p>
          <h3 className="text-paars">Stel je vraag of maak een afspraak</h3>
          <p className="">Vul het formulier in om een kennismakingsgesprek aan te vragen of je vraag direct aan ons te stellen.</p>
        </div>
        <div className="md:w-1/2 container relative pb-16">
          <DecoRight imageSrc="/images/parttime-innovatieteam.webp" />
        </div>
      </div>
      <div className="w-full flex items-center max-md:container justify-center pb-32">
        <ContactForm />
      </div>
      <div className='bg-gradient-to-b from-paars to-groen from-30% w-full'>
        <div className="container flex flex-col md:flex-row items-center w-full">
          <div className="flex md:w-1/2 flex-col h-full justify-center gap-4 md:p-24 max-md:py-16">
            <h3 className="text-wit">Onze contactgegevens:</h3>
            <div className="flex gap-4 items-center">
              <Icon icon="mdi:location" className="text-wit w-6 h-6" />
              <p className="text-wit font-aktiv-grotesk-extended">Edisonstraat 11, 7601 PS Almelo</p>
            </div>
            <div className="flex gap-4 items-center">
              <Icon icon="mdi:phone" className="text-wit w-6 h-6" />
              <p className="text-wit font-aktiv-grotesk-extended">+31(0)88 - 2500 800</p>
            </div>
            <div className="flex gap-4 items-center">
              <Icon icon="mdi:email" className="text-wit w-6 h-6" />
              <p className="text-wit font-aktiv-grotesk-extended">info@vosteq.nl</p>
            </div>
            <div className="flex gap-4 items-center">
              <Icon icon="mdi:office-building" className="text-wit w-6 h-6" />
              <p className="text-wit font-aktiv-grotesk-extended">KvK-nummer: 08127019</p>
            </div>
            <div className="flex gap-4 items-center">
              <Icon icon="mdi:printer-receipt" className="text-wit w-6 h-6" />
              <p className="text-wit font-aktiv-grotesk-extended">BTW-nummer: NL813420192B01</p>
            </div>
          </div>
          <div className="md:w-1/2 w-full h-full md:p-16 max-md:pb-16">
            <DynamicMapComponent />
          </div>
        </div>
      </div>
    </div>
  );
}