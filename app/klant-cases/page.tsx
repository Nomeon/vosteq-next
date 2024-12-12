import { datoFetch, PAGE_CONTENT_QUERY } from "@/lib/datocms";
import { Image } from "react-datocms";
import Link from "next/link";
import { Metadata } from "next";
import DecoRight from "@/components/vosteq/deco-right";
import BottomCta from "@/components/vosteq/bottom-cta";

export const metadata: Metadata = {
    title: "Cases: Succesverhalen van MKB-Maakbedrijven | Vosteq",
    description: "Ontdek hoe Vosteq MKB-maakbedrijven helpt met procesoptimalisatie, innovatie en strategische transformaties. Lees inspirerende cases uit de maakindustrie.",
};


export default async function KlantCases() {
    const allCases = await datoFetch(PAGE_CONTENT_QUERY);

    return (
        <div className="flex flex-col items-center w-full">
            <div className="w-full h-96 flex flex-col items-center justify-center gap-16 bg-gradient-to-br from-paars to-groen from-60%">
                <h1 className="text-wit">Klant cases</h1>
                <p className="text-wit text-lg w-2/3 text-center">Bij Vosteq helpen we MKB-maakbedrijven om hun volledige potentieel te benutten. Met onze diepgaande kennis en ervaring in procesoptimalisatie, innovatie en strategie, ondersteunen we bedrijven bij transformaties die duurzame resultaten opleveren.</p>
            </div>
            <div className="container flex flex-col lg:flex-row gap-16 lg:gap-32 lg:py-16 lg:pt-32 py-4">
                <div className="lg:w-1/2 flex flex-col gap-4">
                    <p className='font-aktiv-grotesk-extended text-base text-donkergroen'>Klant cases</p>
                    <h2 className="text-paars">Succesverhalen uit de maakindustrie</h2>
                    <p className="font-aktiv-grotesk-extended text-paars">Ontdek hoe wij samen met onze klanten veranderingen hebben gerealiseerd die niet alleen werken, maar ook bijdragen aan een toekomstbestendige maakindustrie. Laat je inspireren door onze cases en zie wat mogelijk is met de juiste begeleiding en expertise.</p>
                    <h3 className="text-paars pt-4">Wat vind je op deze pagina?</h3>
                    <div className="flex flex-col gap-1 font-aptos text-base">
                        <p className='font-bold'>Succesverhalen:</p>
                        <p>Lees hoe Vosteq bedrijven heeft geholpen met procesverbeteringen, innovaties en strategische transformaties.</p>
                        <p className='font-bold pt-2'>Toepasbare inzichten:</p>
                        <p>Elk succesverhaal biedt praktische lessen die je kunt gebruiken in je eigen organisatie.</p>
                        <p className='font-bold pt-2'>Meetbare resultaten:</p>
                        <p>Van verhoogde efficiëntie tot verbeterde winstgevendheid, onze aanpak levert resultaat.</p>
                    </div>

                </div>
                <div className="lg:w-1/2 container relative pb-16">
                <DecoRight imageSrc="/images/diensten.webp" />
                </div>
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 container justify-center pt-8 pb-32">
                {allCases.map((caseData) => (
                    <div key={caseData.id} className="flex flex-col border border-donkergroen p-8 gap-4">
                        <div>
                            <Image 
                                className="object-cover"
                                data={caseData.mainImage.responsiveImage}
                            />
                        </div>
                        <h1 className="text-paars text-lg flex-none">Vosteq bij {caseData.title}</h1>
                        <p className="font-aktiv-grotesk-extended text-paars grow">
                            "{caseData.quote}"
                        </p>
                        <div className="flex-none">
                            <button className="btn-outline"><Link href={`/klant-cases/${caseData.slug}`}>Lees verder</Link></button>
                        </div>
                    </div>
                ))}
            </div>
            <BottomCta titel='Wil jij ook weten wat Vosteq voor jouw MKB-maakbedrijf kan betekenen?' paragraph="Neem contact met ons op en ontdek hoe we samen meer uit mens en machine halen." />
        </div>
    )
}