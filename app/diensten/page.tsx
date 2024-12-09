import { Popup } from "@/components/ui/popup";
import { Metadata } from "next";
import Link from "next/link";
import DecoRight from "@/components/vosteq/deco-right";
import DecoLeft from "@/components/vosteq/deco-left";

export const metadata: Metadata = {
  title: "Organisatieverbetering voor MKB-maakbedrijven | Vosteq",
  description: "Ontdek hoe Vosteq MKB-maakbedrijven helpt met organisatieverbetering, innovatie- en verbetertrajecten en directieadvies. Haal meer uit mens en machine!",
};

export default function Diensten() {
  return (
    <div className="flex flex-col items-center w-full">
      <Popup />
      <div className="w-full md:h-96 max-md:py-16 max-md:container text-center flex flex-col items-center justify-center gap-16 bg-gradient-to-br from-paars to-groen from-60%">
        <h1 className="text-wit">Onze diensten aan MKB-maakbedrijven</h1>
        <p className="text-wit text-lg w-2/3 text-center md:container">Wij zijn Vosteq: jouw partner in organisatieverbetering en procesoptimalisatie. Met onze kennis en ervaring helpen we jouw bedrijf naar een nieuwe toekomstbestendige horizon. Ontdek hoe we meer uit mens en machine halen.</p>
      </div>
      {/* de rest */}
      <div className="container flex flex-col md:flex-row gap-16 md:gap-32 md:py-16 md:pt-32 py-8">
        <div className="md:w-1/2 flex flex-col gap-4">
          <p className='font-aktiv-grotesk-extended text-base text-donkergroen'>Organisatie verbetering</p>
          <h2 className="text-paars">Analyse, advies en begeleiding voor maximale bedrijfsprestaties</h2>
          <p className="font-aktiv-grotesk-extended text-paars">Bij Vosteq brengen we jouw bedrijfsprocessen in kaart en ontdekken we verborgen kansen. Met onze ervaring en expertise implementeren we slimme oplossingen en werkmethoden die prestaties verbeteren en efficiëntie vergroten.</p>
          <div className="flex flex-col md:flex-row pt-8 gap-16 md:gap-8">
            <div className="flex flex-col w-full md:w-1/2 gap-4">
              <h3 className="text-paars">Directie advies</h3>
              <p className="font-aktiv-grotesk-extended text-paars">Inzicht en advies voor strategische groei</p>
              <p className="grow">We analyseren elk aspect van jouw bedrijf om verbeterpunten te ontdekken. Met onze strategische blik en ervaring zorgen we dat jouw organisatie toekomstbestendig wordt.</p>
              <div className="pt-4 md:pt-8">
                <button className="btn-outline"><Link href={'/diensten/directieadvies'}>Lees verder</Link></button>
              </div>
            </div>
            <div className="flex flex-col w-full md:w-1/2 gap-4">
              <h3 className="text-paars">Innovatie- en verandertrajecten</h3>
              <p className="font-aktiv-grotesk-extended text-paars">Van onbenut potentieel naar concreet succes</p>
              <p className="grow">Vosteq helpt jouw organisatie om verborgen kansen te benutten en groeibarrières te doorbreken. Samen realiseren we een toekomstgerichte aanpak voor duurzame resultaten.</p>
              <div className="pt-4 md:pt-8">
                <button className="btn-outline"><Link href={'/diensten/projectmanagement'}>Lees verder</Link></button>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 container relative md:pb-16">
          <DecoRight imageSrc="/images/diensten.webp" />
        </div>
      </div>
      {/* Bottom */}
      <div className="container flex flex-col md:flex-row-reverse gap-16 md:gap-32 py-4">
        <div className="md:w-1/2 flex flex-col gap-4">
          <p className='font-aktiv-grotesk-extended text-base text-donkergroen'>Implementatie en innovatie</p>
          <h2 className="text-paars">Expertise en implementatie voor duurzame resultaten</h2>
          <p className="font-aktiv-grotesk-extended text-paars">Bij Vosteq bieden we praktische ondersteuning en innovatieve oplossingen die direct impact hebben op jouw bedrijfsprocessen. Met onze expertise zorgen we voor efficiënte implementatie en begeleiden we je naar blijvend succes.</p>
          <div className="flex flex-col md:flex-row pt-8 gap-16 md:gap-8">
            <div className="flex flex-col w-full md:w-1/2 gap-4">
              <h4 className="text-paars">Expertise on Demand</h4>
              <p className="font-aktiv-grotesk-extended text-paars">Hands-on begeleiding voor elk bedrijfsproces</p>
              <p className="grow">Waar je team behoefte heeft aan kennis en ervaring, bieden wij praktische ondersteuning. Met onze multidisciplinaire expertise vullen we tijdelijk jouw capaciteit aan en zorgen we voor structurele verbeteringen.</p>
              <div className="pt-4 md:pt-8">
                <button className="btn-outline"><Link href={'/diensten/interim-management'}>Lees verder</Link></button>
              </div>
            </div>
            <div className="flex flex-col w-full md:w-1/2 gap-4">
              <h4 className="text-paars">Innovatieve oplossingen voor jouw maakbedrijf</h4>
              <p>Wij bieden een complete aanpak voor jouw organisatiegroei. We analyseren de huidige situatie en ontwikkelen strategieën om verbeterpunten en groeikansen inzichtelijk te maken. Vervolgens implementeren we slimme methoden die processen efficiënter maken en resultaten verbeteren. Onze experts staan klaar om jou praktisch te begeleiden bij de uitvoering en het duurzaam borgen van veranderingen. Samen zorgen we voor blijvend succes!</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 container relative md:pb-16">
          <DecoLeft imageSrc="/images/home2.webp" />
        </div>
      </div>
    </div>
  )
}