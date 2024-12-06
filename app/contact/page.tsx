import type { Metadata } from "next";
import { ContactForm } from "@/components/vosteq/contact-form";
import DecoRight from "@/components/vosteq/deco-right";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Neem contact op met Vosteq | Vosteq",
  description: "Ontdek hoe Vosteq jouw bedrijf kan helpen met procesoptimalisatie en innovatie. Neem vandaag nog contact op voor een vrijblijvend gesprek en ontdek de mogelijkheden!",
};

export default function Contact() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full h-96 flex flex-col items-center justify-center gap-16 bg-gradient-to-br from-paars to-groen from-60%">
        <h1 className="text-wit">Contact</h1>
        <p className="text-wit text-lg w-2/3 text-center">Wij zijn Vosteq: jouw partner in organisatieverbetering en procesoptimalisatie. Met onze kennis en ervaring helpen we jouw bedrijf naar een nieuwe toekomstbestendige horizon. Ontdek hoe we meer uit mens en machine halen.</p>
      </div>
      <div className="container flex flex-col md:flex-row gap-16 md:gap-32 md:py-16 md:pt-32 py-4">
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
      <div className="w-full flex items-center max-md:container justify-center pb-16">
        <ContactForm />
      </div>
    </div>
  );
}