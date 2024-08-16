import { Deskundigen } from "@/components/vosteq/deskundigen";
import { Verbeteren } from "@/components/vosteq/verbeteren";
import { VosteqCarousel } from "@/components/vosteq/vosteq-carousel";


export default function Home() {
  return (
    <main className="flex flex-col items-center py-24">
      <Deskundigen />
      <Verbeteren />
      <VosteqCarousel />
    </main>
  );
}
