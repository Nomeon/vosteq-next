import Image from 'next/image';
import type { Metadata } from "next";
import { WatLevertHetOp } from "@/components/vosteq/wat-levert-het-op";
import { WerkStappen } from '@/components/vosteq/werk-stappen';
import { BottomCta } from '@/components/vosteq/bottom-cta';
import { Popup } from '@/components/ui/popup';

export const metadata: Metadata = {
    title: "Vosteq | Verbetering",
    description: "Aan het bouwen!",
  };

export default function Verbetering() {
    const steps = [
        {
            icon: 'mdi:target',
            title: 'Veranderingen integreren',
            description: 'zodat het toegevoegde waarde oplevert in de dagelijkse bedrijfsvoering.'
        },
        {
            icon: 'mdi:chart-line',
            title: "Maximaliseren van resultaten",
            description: 'van de geïmplementeerde veranderingen door voortdurende optimalisatie en aanpassing.'
        }
    ];

    const accordionItems = [
        {
            value: 'stap1',
            stap: 'Stap 1.',
            title: 'Implementatie volgen',
            description: 'Na de implementatie van de oplossing blijven we nauwgezet volgen hoe de nieuwe processen en systemen in de praktijk werken. We identificeren eventuele knelpunten en werken samen met jouw team om deze op te lossen.'
        },
        {
            value: 'stap2',
            stap: 'Stap 2.',
            title: 'Blijvende ondersteuning',
            description: 'Na de implementatie van de oplossing blijven we beschikbaar voor ondersteuning en coaching, zodat jouw medewerkers zich comfortabel voelen met de veranderingen en deze op de juiste manier toepassen.'
        },
        {
            value: 'stap3',
            stap: 'Stap 3.',
            title: 'Evalueren en optimaliseren',
            description: 'We evalueren de resultaten van de veranderingen op regelmatige basis. Als we verbeterpunten zien, stellen we optimalisaties voor om het maximale uit de nieuwe processen te halen.'
        },
        {
            value: 'stap4',
            stap: 'Stap 4.',
            title: 'Duurzame integratie',
            description: 'Ons doel is om ervoor te zorgen dat de veranderingen volledig worden geïntegreerd in jouw bedrijfsvoering, zodat ze ook op de lange termijn waarde blijven toevoegen.'
        }
    ]

    return (
        <div className='flex flex-col'>
            <Popup />
            <div className="container flex flex-col md:flex-row gap-16 md:gap-32 md:py-16 py-4">
                <div className="md:w-1/2 flex flex-col gap-4">
                    <h1 className="text-paars">Verbetering</h1>
                    <p className="font-aktiv-grotesk-extended text-paars">Veranderingen doorvoeren is één ding, maar ervoor zorgen dat die veranderingen ook daadwerkelijk de processen in je bedrijf verbeteren is een tweede. Bij Vosteq ligt onze focus op het duurzaam laten werken van de geïmplementeerde oplossingen. We zorgen ervoor dat nieuwe processen, systemen en strategieën niet alleen worden ingevoerd, maar ook blijvend succesvol zijn binnen jouw MKB-maakbedrijf.</p>
                    <h2 className='pt-8 text-paars max-md:text-2xl text-2xl'>Daadwerkelijk en blijvend effect</h2>
                    <p>Bij Vosteq betekent "verbetering" dat we verder gaan dan alleen de implementatie van een oplossing. We blijven betrokken om ervoor te zorgen dat de veranderingen daadwerkelijk effect hebben en blijven bijdragen aan de verbetering van jouw bedrijfsvoering. Dit doen we door:</p>
                    <div className="flex flex-col gap-1 font-aptos text-base">
                        <p className='font-bold'>Bewaking van continuïteit:</p>
                        <p>We monitoren de integratie van de veranderingen en maken waar nodig aanpassingen om de continuïteit te waarborgen.</p>
                        <p className='font-bold pt-2'>Nazorg en ondersteuning:</p>
                        <p>We bieden blijvende ondersteuning aan jouw team, zodat iedereen weet hoe de nieuwe processen optimaal benut kunnen worden.</p>
                        <p className='font-bold pt-2'>Evaluatie en optimalisatie:</p>
                        <p>We evalueren de effectiviteit van de veranderingen met regelmaat en zoeken hierbij naar mogelijkheden voor verdere optimalisatie.</p>
                    </div>
                </div>
                <div className="md:w-1/2 container relative pb-16">
                    <Image className='object-cover' src="/images/deskundigen.webp" alt='Deskundigen' width={650} height={550} />
                </div>
            </div>
            <WerkStappen accordionItems={accordionItems} />
            <WatLevertHetOp omschrijving='Met onze "verbeteringsaanpak":' steps={steps} />
            <BottomCta titel="Wil je ervoor zorgen dat veranderingen in jouw bedrijf niet alleen worden ingevoerd, maar ook duurzaam werken?" paragraph="Neem dan contact met ons op en ontdek hoe wij je kunnen helpen om blijvende resultaten te behalen." />
        </div>
    )
}