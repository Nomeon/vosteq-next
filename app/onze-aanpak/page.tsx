import { Popup } from "@/components/ui/popup";
import { Metadata } from "next";
import Link from "next/link";
import DecoRight from "@/components/vosteq/deco-right";
import DecoLeft from "@/components/vosteq/deco-left";

export const metadata: Metadata = {
  title: "De aanpak van Vosteq | Vosteq",
  description: "Ontdek de gestructureerde aanpak van Vosteq: inzicht, strategie, inspiratie, begeleiding en resultaat. Voor duurzame verbetering van MKB-maakbedrijven.",
};

export default function OnzeAanpak() {
  return (
    <div className="flex flex-col items-center w-full">
      <Popup />
      <div className="w-full lg:h-96 max-lg:py-16 max-lg:container text-center flex flex-col items-center justify-center gap-16 bg-gradient-to-br from-paars to-groen from-60%">
        <h1 className="text-wit">Onze aanpak in 5 fasen</h1>
        <p className="text-wit text-lg w-2/3 text-center lg:container">Bij Vosteq geloven we in het benutten van potentieel door een gestructureerde aanpak. Onze werkwijze omvat vijf fasen die naadloos op elkaar aansluiten. </p>
      </div>
      {/* top */}
      <div className="container flex flex-col lg:flex-row gap-16 lg:gap-32 lg:py-16 lg:pt-32 py-8">
        <div className="lg:w-1/2 flex flex-col gap-4">
          <p className='font-aktiv-grotesk-extended text-base text-donkergroen'>Organisatie verbetering</p>
          <h2 className="text-paars">Stap voor stap naar duurzame bedrijfsresultaten</h2>
          <p className="font-aktiv-grotesk-extended text-paars">Onze aanpak is gericht op het stap voor stap realiseren van duurzame veranderingen die blijvend resultaat opleveren. We starten met diepgaand inzicht in je organisatie, gevolgd door een flexibel strategisch plan dat snel resultaat oplevert. Door inspiratie en betrokkenheid te creëren, zorgen we voor draagvlak binnen je team. Met hands-on begeleiding zetten we plannen om in actie, resulterend in meetbaar succes en een toekomstbestendige organisatie.</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:flex pt-8 gap-16 lg:gap-8">
            <div className="flex flex-col lg:w-1/2 gap-4">
              <h4 className="text-paars">Inzicht</h4>
              <p className="font-aktiv-grotesk-extended text-paars">De basis voor verbetering</p>
              <p className="grow">In de inzicht-fase analyseren we jouw organisatie grondig. We onderzoeken je processen, structuren, bedrijfscultuur en marktpositie om kansen en knelpunten te identificeren. Het resultaat is een solide basis voor maatwerkoplossingen.</p>
              <div className="pt-4 lg:pt-8">
                <button className="btn-outline"><Link href={'/onze-aanpak/inzicht'}>Lees verder</Link></button>
              </div>
            </div>
            <div className="flex flex-col lg:w-1/2 gap-4">
              <h4 className="text-paars">Strategisch plan</h4>
              <p className="font-aktiv-grotesk-extended text-paars">Wendbare richting</p>
              <p className="grow">Met een helder inzicht ontwikkelen we een flexibel strategisch plan. Door de sprint-methode zorgen we voor snelle resultaten en een wendbare aanpak, zodat jouw organisatie zich kan aanpassen aan veranderende omstandigheden en kansen optimaal benut.</p>
              <div className="pt-4 lg:pt-8">
                <button className="btn-outline"><Link href={'/onze-aanpak/strategisch-plan'}>Lees verder</Link></button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 container relative lg:pb-16">
          <DecoRight imageSrc="/images/diensten.webp" />
        </div>
      </div>
      {/* Bottom */}
      <div className="container flex flex-col lg:flex-row-reverse gap-16 lg:gap-32 py-4 pb-16">
        <div className="lg:w-1/2 flex flex-col gap-4">
          <p className='font-aktiv-grotesk-extended text-base text-donkergroen'>Organisatiegroei met impact</p>
          <h2 className="text-paars">Samen naar blijvende veranderingen</h2>
          <p className="font-aktiv-grotesk-extended text-paars">Onze aanpak stimuleert duurzame verandering door de mens centraal te stellen. We starten met inspiratie en creëren betrokkenheid binnen je team, gevolgd door praktische begeleiding om plannen effectief te implementeren. Het resultaat? Meetbaar succes en een toekomstbestendige organisatie waar efficiëntie en motivatie hand in hand gaan.</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:flex pt-8 gap-16 lg:gap-8">
            <div className="flex flex-col lg:w-1/3 gap-4">
              <h4 className="text-paars">Inspiratie</h4>
              <p className="font-aktiv-grotesk-extended text-paars">De mens centraal</p>
              <p className="grow">We geloven dat verandering pas echt slaagt als mensen centraal staan. Tijdens de inspiratie-fase werken we samen aan betrokkenheid, motivatie en eigenaarschap binnen je team. Dit versterkt de bedrijfscultuur en creëert draagvlak voor duurzame transformaties.</p>
              <div className="pt-4 lg:pt-8">
                <button className="btn-outline"><Link href={'/onze-aanpak/inspiratie'}>Lees verder</Link></button>
              </div>
            </div>
            <div className="flex flex-col lg:w-1/3 gap-4">
              <h4 className="text-paars">Begeleiding</h4>
              <p className="font-aktiv-grotesk-extended text-paars">Praktische implementatie</p>
              <p className="grow">In de begeleiding-fase brengen we plannen tot leven. Met hands-on ondersteuning en coaching zorgen we ervoor dat verbeteringen succesvol worden geïntegreerd in de dagelijkse praktijk. Ons team blijft betrokken tot het gewenste resultaat is bereikt.</p>
              <div className="pt-4 lg:pt-8">
                <button className="btn-outline"><Link href={'/onze-aanpak/begeleiding'}>Lees verder</Link></button>
              </div>
            </div>
            <div className="flex flex-col lg:w-1/3 gap-4">
              <h4 className="text-paars">Resultaat</h4>
              <p className="font-aktiv-grotesk-extended text-paars">Meetbaar succes</p>
              <p className="grow">Het eindpunt van onze aanpak is het behalen van tastbare resultaten. Verbeterde efficiëntie, verhoogde winstgevendheid en een toekomstbestendige organisatie zijn slechts enkele van de voordelen die onze klanten ervaren.</p>
              <div className="pt-4 lg:pt-8">
                <button className="btn-outline"><Link href={'/onze-aanpak/resultaat'}>Lees verder</Link></button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 container relative lg:pb-16">
          <DecoLeft imageSrc="/images/home2.webp" />
        </div>
      </div>
    </div>
  )
}