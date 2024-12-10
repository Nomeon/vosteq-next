import type { Metadata } from "next";
import { Deskundigen } from "@/components/vosteq/deskundigen";
import { Verbeteren } from "@/components/vosteq/verbeteren";
import { VosteqCarousel } from "@/components/vosteq/vosteq-carousel";
import { HomeHero } from "@/components/vosteq/home-hero";
import { NewsForm } from "@/components/vosteq/news-form";
import { Experts } from "@/components/vosteq/experts";
import { Popup } from "@/components/ui/popup";
import { datoFetch, PAGE_CONTENT_QUERY } from '@/lib/datocms';
import BottomCta from "@/components/vosteq/bottom-cta";

export const metadata: Metadata = {
  title: "Optimaliseer jouw MKB-bedrijf | Vosteq",
  description: "Haal meer uit jouw mensen en machines met Vosteq. Met meer dan 25 jaar ervaring helpen wij MKB-maakbedrijven efficiënter, winstgevender en toekomstbestendig te worden. Ontdek onze expertise in procesoptimalisatie en digitalisering.",
};

export default async function Home() {
  const allCases = await datoFetch(PAGE_CONTENT_QUERY);

  return (
    <div className="flex flex-col items-center">
      <Popup />
      <HomeHero />
      <Deskundigen />
      <Verbeteren />
      <Experts />
      <VosteqCarousel cases={allCases} />
      {/* <NewsForm /> */}
      <BottomCta titel="Neem contact met ons op" paragraph="Nieuwsgierig hoe wij jouw bedrijf kunnen helpen? Neem vandaag nog contact op voor een vrijblijvende kennismaking met ons innovatieteam. Samen maken we jouw organisatie efficiënter en toekomstbestendig."/>
    </div>
  );
}
