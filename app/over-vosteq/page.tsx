import { Popup } from "@/components/ui/popup";
import { Metadata } from "next";
import Link from "next/link";
import DecoRight from "@/components/vosteq/deco-right";
import DecoLeft from "@/components/vosteq/deco-left";

export const metadata: Metadata = {
  title: "Innovatie, groei en duurzame oplossingen | Vosteq",
  description: "Ontdek de missie, kernwaarden, experts, carrièremogelijkheden en duurzame initiatieven van Vosteq.",
};

export default function OverVosteq() {
  return (
    <div className="flex flex-col items-center w-full">
      <Popup />
      <div className="w-full md:h-96 max-md:py-16 max-md:container text-center flex flex-col items-center justify-center gap-16 bg-gradient-to-br from-paars to-groen from-60%">
        <h1 className="text-wit">Over Vosteq</h1>
        <p className="text-wit text-lg w-2/3 text-center md:container">Bij Vosteq staan we voor duurzame groei en innovatie in de MKB-maakindustrie. Met meer dan 25 jaar ervaring helpen we bedrijven processen te optimaliseren, medewerkers te inspireren en technologie slim te benutten. Ons doel? Samen met jou bouwen aan een efficiëntere, toekomstbestendige organisatie die blijvend impact maakt.</p>
      </div>
      {/* top */}
      <div className="container flex flex-col md:flex-row gap-16 md:gap-32 md:py-16 md:pt-32 py-8">
        <div className="md:w-1/2 flex flex-col gap-4">
          <p className='font-aktiv-grotesk-extended text-base text-donkergroen'>Onze Visie, Missie en Kernwaarden</p>
          <h2 className="text-paars">Bouwstenen voor een Sterke MKB-Maakindustrie</h2>
          <p className="font-aktiv-grotesk-extended text-paars">Bij Vosteq geloven we dat het succes van de moderne MKB-maakindustrie niet alleen afhangt van innovatieve technologieën en efficiënte processen, maar ook van een duidelijke visie en sterke kernwaarden. Deze combinatie vormt de ruggengraat van ons werk, waarbij we praktisch en duurzaam bijdragen aan de groei en ontwikkeling van ondernemingen binnen de maakindustrie.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 md:flex pt-8 gap-16 md:gap-8">
            <div className="flex flex-col md:w-1/2 gap-4">
              <h4 className="text-paars">Visie en Missie</h4>
              <p className="font-aktiv-grotesk-extended text-paars">Het doel van Vosteq</p>
              <p className="grow">Ontdek hoe wij werken aan een bloeiende MKB-maakindustrie met praktische oplossingen en duurzame groei.</p>
              <div className="pt-4 md:pt-8">
                <button className="btn-outline"><Link href={'/onze-aanpak/inzicht'}>Lees verder</Link></button>
              </div>
            </div>
            <div className="flex flex-col md:w-1/2 gap-4">
              <h4 className="text-paars">Waarden en Normen</h4>
              <p className="font-aktiv-grotesk-extended text-paars">De kernwaarden van Vosteq</p>
              <p className="grow">Leer over de kernwaarden die onze aanpak onderscheiden, zoals integriteit, betrokkenheid en duurzaamheid.</p>
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
      <div className="container flex flex-col md:flex-row-reverse gap-16 md:gap-32 py-4 pb-16">
        <div className="md:w-1/2 flex flex-col gap-4">
          <p className='font-aktiv-grotesk-extended text-base text-donkergroen'>Duurzame Organisatiegroei</p>
          <h2 className="text-paars">Verandering, Innovatie en Verantwoord Ondernemen</h2>
          <p className="font-aktiv-grotesk-extended text-paars">Bij Vosteq geloven we dat echte groei begint met mensen, wordt gedragen door samenwerking en wordt versterkt door verantwoordelijkheid. Organisaties die toekomstbestendig willen zijn, realiseren blijvende verandering door mensgerichte processen, innovatieve teams en een sterke maatschappelijke betrokkenheid. Wij bieden praktische begeleiding en inspiratie om dit te bereiken, met meetbare resultaten die impact maken.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 md:flex pt-8 gap-16 md:gap-8">
            <div className="flex flex-col md:w-1/3 gap-4">
              <h4 className="text-paars">De Verander-experts</h4>
              <p className="font-aktiv-grotesk-extended text-paars">Team van specialisten</p>
              <p className="grow">Maak kennis met ons team van specialisten die jouw organisatie helpen transformeren.</p>
              <div className="pt-4 md:pt-8">
                <button className="btn-outline"><Link href={'/onze-aanpak/inspiratie'}>Lees verder</Link></button>
              </div>
            </div>
            <div className="flex flex-col md:w-1/3 gap-4">
              <h4 className="text-paars">Werken bij Vosteq</h4>
              <p className="font-aktiv-grotesk-extended text-paars">Het innovatie-team</p>
              <p className="grow"> Wil je deel uitmaken van ons innovatie-team? We komen graag met je in contact!</p>
              <div className="pt-4 md:pt-8">
                <button className="btn-outline"><Link href={'/onze-aanpak/begeleiding'}>Lees verder</Link></button>
              </div>
            </div>
            <div className="flex flex-col md:w-1/3 gap-4">
              <h4 className="text-paars">MVO-beleid</h4>
              <p className="font-aktiv-grotesk-extended text-paars">Maatschappelijk verantwoord ondernemen</p>
              <p className="grow">Lees hoe wij maatschappelijk verantwoord ondernemen omarmen en bijdragen aan een duurzamere toekomst.</p>
              <div className="pt-4 md:pt-8">
                <button className="btn-outline"><Link href={'/onze-aanpak/inzicht'}>Lees verder</Link></button>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 container relative md:pb-16">
          <DecoLeft imageSrc="/images/verbetering.webp" />
        </div>
      </div>
    </div>
  )
}