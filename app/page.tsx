import { Deskundigen } from "@/components/vosteq/deskundigen";
import { Verbeteren } from "@/components/vosteq/verbeteren";
import { VosteqCarousel } from "@/components/vosteq/vosteq-carousel";
import { HomeHero } from "@/components/vosteq/home-hero";


export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <HomeHero />
      <Deskundigen />
      <Verbeteren />
      <VosteqCarousel />
    </div>
  );
}
