import type { Metadata } from "next";
import { WatLevertHetOp } from "@/components/vosteq/wat-levert-het-op";
import { WerkStappen } from '@/components/vosteq/werk-stappen';
import { BottomCta } from '@/components/vosteq/bottom-cta';
import { Popup } from '@/components/ui/popup';
import DecoRight from '@/components/vosteq/deco-right';

export const metadata: Metadata = {
    title: "Inzicht voor MKB-Maakbedrijven | Vosteq",
    description: "Ontdek hoe Vosteq diepgaand inzicht biedt in jouw MKB-maakbedrijf. Onze analyses vormen de basis voor oplossingen die werken. Lees meer of neem contact op!",
  };

export default function Inzicht() {
    const steps = [
        {
            icon: 'mdi:target',
            title: 'Gerichte oplossingen ontwikkelen ',
            description: 'die nauw aansluiten op jouw unieke kansen en uitdagingen.'
        },
        {
            icon: 'mdi:shield-alert',
            title: "Risico's minimaliseren",
            description: 'door valkuilen vroegtijdig te signaleren, voorkomen we problemen.'
        },
        {
            icon: 'mdi:progress-clock',
            title: 'Efficiëntie verhogen',
            description: 'omdat we een helder beeld hebben van wat er verbeterd moet worden.'
        }
    ];

    const accordionItems = [
        {
            value: 'stap1',
            stap: 'Stap 1.',
            title: 'Diepgaande analyse',
            description: 'We starten met gesprekken en verzamelen informatie over jouw processen en prestaties. Dit omvat interviews, observaties en een analyse van bestaande documentatie.'
        },
        {
            value: 'stap2',
            stap: 'Stap 2.',
            title: 'Identificeren van kernuitdagingen',
            description: 'Op basis van onze analyse brengen we de belangrijkste obstakels en groeikansen in kaart.'
        },
        {
            value: 'stap3',
            stap: 'Stap 3.',
            title: 'Inzichten vertalen naar actie',
            description: 'Onze bevindingen vertalen we naar heldere inzichten die de basis vormen voor het vervolgtraject.'
        }
    ]

    return (
        <div className='flex flex-col'>
            <Popup />
            <div className="container flex flex-col md:flex-row gap-16 md:gap-32 md:py-16 py-4">
                <div className="md:w-1/2 flex flex-col gap-4">
                    <p className='font-aktiv-grotesk-extended text-base text-donkergroen'>Basis voor succesvolle verbetering</p>
                    <h1 className="text-paars">Inzicht</h1>
                    <p className="font-aktiv-grotesk-extended text-paars">Bij Vosteq geloven we dat elke succesvolle transformatie begint met een grondig inzicht in jouw organisatie. Onze aanpak start daarom altijd met het volledig begrijpen van jouw MKB-maakbedrijf: van processen en structuren tot bedrijfscultuur en marktpositie. Door deze diepgaande analyse leggen we een stevig fundament voor oplossingen op maat die echt werken en blijvend resultaat opleveren.</p>
                    <h2 className='pt-8 text-paars max-md:text-2xl text-3xl'>Gedetailleerde bedrijfsanalyse</h2>
                    <p>Onze "inzicht-fase" gaat verder dan een oppervlakkige blik. We duiken diep in jouw organisatie om helder te krijgen waar de kansen en uitdagingen liggen. Hierbij richten we ons op vier cruciale aspecten:</p>
                    <div className="flex flex-col gap-1 font-aptos text-base">
                        <p className='font-bold'>Bedrijfsprocessen:</p>
                        <p>Hoe verlopen jouw huidige processen? Waar liggen de knelpunten en hoe kan het beter?</p>
                        <p className='font-bold pt-2'>Organisatiestructuur:</p>
                        <p>Hoe is jouw team georganiseerd? Wat zijn de sterke en zwakke punten?</p>
                        <p className='font-bold pt-2'>Bedrijfscultuur:</p>
                        <p>Wat motiveert jouw medewerkers en hoe draagt dit bij aan hun prestaties?</p>
                        <p className='font-bold pt-2'>Marktpositie:</p>
                        <p>Waar staat jouw bedrijf in de markt? Welke kansen en bedreigingen spelen een rol?</p>
                    </div>
                </div>
                <div className="md:w-1/2 container relative pb-16">
                    <DecoRight imageSrc='/images/inzicht.webp' />
                </div>
            </div>
            <WerkStappen accordionItems={accordionItems} />
            <WatLevertHetOp omschrijving='Met een diepgaand inzicht in jouw organisatie kunnen we:' steps={steps} />
            <BottomCta titel="Wil je veranderingen doorvoeren die écht impact maken?" paragraph="Het begint met inzicht. Neem vandaag nog contact met ons op voor een vrijblijvend gesprek." />
        </div>
    )
}