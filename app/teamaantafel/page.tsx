import type { Metadata } from "next";
import { ContactForm } from "@/components/vosteq/contact-form";
import DecoRight from "@/components/vosteq/deco-right";
import { Experts } from "@/components/vosteq/experts";
import { VosteqCarousel } from "@/components/vosteq/vosteq-carousel";
import { datoFetch, PAGE_CONTENT_QUERY } from '@/lib/datocms';

export const metadata: Metadata = {
  title: "Vrijblijvend advies voor maakbedrijven | Vosteq",
  description: "Haal meer uit mens en machine met Vosteq. Ontdek kansen voor procesoptimalisatie, digitalisering, en innovatie in een vrijblijvend gesprek met onze experts.",
};

export default async function TeamAanTafel() {
  const allCases = await datoFetch(PAGE_CONTENT_QUERY);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full lg:h-96 max-lg:py-16 max-lg:container text-center flex flex-col items-center justify-center gap-16 bg-groen">
        <h1 className="text-paars">Haal meer uit mens en machine</h1>
        <p className="text-paars text-lg w-2/3 text-center lg:container">Mensen en machines effectiever, efficiënter en slimmer laten werken, dat is onze expertise. Nodig ons team aan tafel voor een vrijblijvend gesprek, en we komen met oplossingen die zich in no-time terugverdienen.</p>
      </div>
      <div className="container flex flex-col lg:flex-row gap-16 lg:gap-32 lg:py-16 lg:pt-32 py-8">
        <div className="lg:w-1/2 flex flex-col gap-4">
          <p className='font-aktiv-grotesk-extended text-base text-donkergroen'>Organisatieverbetering</p>
          <h2 className="text-paars">Ons team bij jou aan tafel</h2>
          <p className="font-aktiv-grotesk-extended text-paars">Wil jij jouw maakbedrijf naar een hoger niveau tillen? Bij Vosteq weten we dat de beste oplossingen vaak ontstaan tijdens een goed gesprek. Ons team van experts denkt met je mee over uitdagingen zoals procesoptimalisatie, digitalisering, of strategische innovatie. Laat ons samen ontdekken wat jouw bedrijf echt nodig heeft.</p>
          <h3 className="text-paars">Stel je vraag of maak een afspraak</h3>
          <p className="">Denk je dat jouw bedrijf nog niet op volle kracht presteert? Plan een vrijblijvend gesprek met onze specialisten en ontvang concrete oplossingen die écht werken.</p>
        </div>
        <div className="lg:w-1/2 container relative pb-16">
          <DecoRight imageSrc="/images/parttime-innovatieteam.webp" />
        </div>
      </div>
      <Experts />
      <div className="w-full flex items-center max-lg:container justify-center lg:pt-16 pb-32">
        <ContactForm />
      </div>
      <VosteqCarousel cases={allCases} />
    </div>
  );
}