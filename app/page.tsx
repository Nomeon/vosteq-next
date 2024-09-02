import type { Metadata } from "next";
import { Deskundigen } from "@/components/vosteq/deskundigen";
import { Verbeteren } from "@/components/vosteq/verbeteren";
import { VosteqCarousel } from "@/components/vosteq/vosteq-carousel";
import { HomeHero } from "@/components/vosteq/home-hero";
import { NewsForm } from "@/components/vosteq/news-form";
import { Experts } from "@/components/vosteq/experts";

export const metadata: Metadata = {
  title: "Vosteq | De Veranderexperts",
  description: "Aan het bouwen!",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <HomeHero />
      <Deskundigen />
      <Verbeteren />
      <Experts />
      <VosteqCarousel />
      <NewsForm />
    </div>
  );
}
