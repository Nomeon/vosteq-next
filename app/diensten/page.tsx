import { Popup } from "@/components/ui/popup";
import Image from 'next/image';
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vosteq | Diensten",
  description: "Aan het bouwen!",
};

export default function Diensten() {
  return (
    <div className="flex flex-col items-center w-full">
      <Popup />
      <div className="w-full h-96 flex flex-col items-center justify-center gap-16 bg-gradient-to-br from-paars to-groen from-60%">
        <h1 className="text-wit">Diensten</h1>
        <p className="text-wit text-lg w-2/3 text-center">Wij zijn Vosteq, experts in Smart Manufacturing. Met onze kennis en ervaring helpen we jouw bedrijf 
        naar een nieuwe toekomstbestendige horizon. Ontdek hoe we meer uit mens en machine halen.</p>
      </div>
      {/* de rest */}
      <div className="container flex flex-col md:flex-row gap-16 md:gap-32 md:py-16 md:pt-32 py-4">
        <div className="md:w-1/2 flex flex-col gap-4">
          <p className='font-aktiv-grotesk-extended text-base text-donkergroen'>Organisatie verbetering</p>
          <h1 className="text-paars">Analyse en advies voor optimale bedrijfsprestaties</h1>
          <p className="font-aktiv-grotesk-extended text-paars">Bij Vosteq analyseren we nauwkeurig de huidige situatie van jouw bedrijf en identificeren we het onbenutte potentieel. Met onze expertise en ervaring helpen we jouw organisatie om innovatieve structuren en werkmethoden te implementeren die de prestaties en efficiëntie verbeteren.</p>
          <div className="flex pt-8">
            <div className="flex flex-col w-1/2 gap-4">
              <h4 className="text-paars">Directie advies</h4>
              <p>We onderzoeken elk aspect van jouw bedrijf om verbeterpunten te identificeren en optimalisatiemogelijkheden te vinden.</p>
              <div className="pt-8">
                <button className="btn-outline"><Link href={'/diensten/directieadvies'}>Lees verder</Link></button>
              </div>
            </div>
            <div className="flex flex-col w-1/2 gap-4">
              <h4 className="text-paars">Project management</h4>
              <p>We helpen je om onbenut potentieel te ontdekken en te benutten voor groei en succes.</p>
              <div className="pt-8">
                <button className="btn-outline"><Link href={'/diensten/projectmanagement'}>Lees verder</Link></button>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 container relative pb-16">
          <Image className='object-cover' src="/images/deskundigen.svg" alt='Deskundigen' width={650} height={550} />
        </div>
      </div>
      {/* Bottom */}
      <div className="container flex flex-col md:flex-row-reverse gap-16 md:gap-32 py-4">
        <div className="md:w-1/2 flex flex-col gap-4">
          <p className='font-aktiv-grotesk-extended text-base text-donkergroen'>Organisatie verbetering</p>
          <h1 className="text-paars">Analyse en advies voor optimale bedrijfsprestaties</h1>
          <p className="font-aktiv-grotesk-extended text-paars">Bij Vosteq analyseren we nauwkeurig de huidige situatie van jouw bedrijf en identificeren we het onbenutte potentieel. Met onze expertise en ervaring helpen we jouw organisatie om innovatieve structuren en werkmethoden te implementeren die de prestaties en efficiëntie verbeteren.</p>
          <div className="flex pt-8">
            <div className="flex flex-col w-1/2 gap-4">
              <h4 className="text-paars">Interim management</h4>
              <p>We onderzoeken elk aspect van jouw bedrijf om verbeterpunten te identificeren en optimalisatiemogelijkheden te vinden.</p>
              <div className="pt-8">
                <button className="btn-outline"><Link href={'/diensten/interim-management'}>Lees verder</Link></button>
              </div>
            </div>
            <div className="flex flex-col w-1/2 gap-4">
              <h4 className="text-paars">Interim experts</h4>
              <p>We helpen je om onbenut potentieel te ontdekken en te benutten voor groei en succes.</p>
              <div className="pt-8">
                <button className="btn-outline"><Link href={'/diensten/interim-experts'}>Lees verder</Link></button>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 container relative pb-16">
          <Image className='object-cover' src="/images/deskundigen2.svg" alt='Deskundigen' width={650} height={550} />
        </div>
      </div>
    </div>
  )
}