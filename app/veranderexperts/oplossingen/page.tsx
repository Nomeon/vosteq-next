import Image from 'next/image';
import type { Metadata } from "next";
import { WatLevertHetOp } from "@/components/vosteq/wat-levert-het-op";
import { WerkStappen } from '@/components/vosteq/werk-stappen';
import { BottomCta } from '@/components/vosteq/bottom-cta';
import { Popup } from '@/components/ui/popup';
import DecoRight from '@/components/vosteq/deco-right';

export const metadata: Metadata = {
    title: "Vosteq | Oplossingen",
    description: "Aan het bouwen!",
  };

export default function Oplossingen() {
    const steps = [
        {
            icon: 'mdi:alarm-check',
            title: 'Problemen snel aanpakken',
            description: 'waardoor jouw bedrijf verder kan zonder onderbrekingen'
        },
        {
            icon: 'mdi:tools',
            title: "Maatwerkoplossingen",
            description: 'die specifiek zijn afgestemd op jouw bedrijf en de unieke uitdagingen waarmee je te maken hebt.'
        },
        {
            icon: 'mdi:chart-line',
            title: 'Duurzame resultaten',
            description: 'door problemen grondig aan te pakken en toekomstige knelpunten te voorkomen.'
        }
    ];

    const accordionItems = [
        {
            value: 'stap1',
            stap: 'Stap 1.',
            title: 'Probleemanalyse',
            description: 'We beginnen met een grondige analyse van het probleem. We verzamelen alle relevante informatie en inzichten om de oorzaak van het probleem volledig te begrijpen.'
        },
        {
            value: 'stap2',
            stap: 'Stap 2.',
            title: 'Ontwikkelen van oplossingen',
            description: 'Op basis van onze analyse ontwikkelen we gerichte oplossingen die specifiek zijn afgestemd op de aard van het probleem en de behoeften van jouw bedrijf.'
        },
        {
            value: 'stap3',
            stap: 'Stap 3.',
            title: 'Implementatie',
            description: 'We implementeren de oplossing(en) snel en effectief, met minimale verstoring van je dagelijkse activiteiten. Ons team zorgt ervoor dat een oplossing naadloos wordt geïntegreerd in je bestaande processen.'
        },
        {
            value: 'stap4',
            stap: 'Stap 4.',
            title: 'Monitoring en aanpassing',
            description: 'Nadat een oplossing is geïmplementeerd, blijven we betrokken om de resultaten te monitoren en waar nodig aanpassingen door te voeren om te garanderen dat het probleem volledig wordt opgelost.'
        }
    ]

    return (
        <div className='flex flex-col'>
            <Popup />
            <div className="container flex flex-col md:flex-row gap-16 md:gap-32 md:py-16 py-4">
                <div className="md:w-1/2 flex flex-col gap-4">
                    <h1 className="text-paars">Oplossingen</h1>
                    <p className="font-aktiv-grotesk-extended text-paars">Bij Vosteq weten we dat elk MKB-maakbedrijf af en toe voor uitdagingen komt te staan die verder gaan dan de dagelijkse bedrijfsvoering. Soms ontstaan er complexe problemen die onmiddellijke en deskundige aandacht vereisen. In de "oplossingsfase" richten wij ons op het snel en effectief aanpakken van deze knelpunten, zodat je bedrijf zonder onderbrekingen verder kan.</p>
                    <h2 className='pt-8 text-paars max-md:text-2xl'>Obstakels identificeren en elimineren</h2>
                    <p className='text-diepgrijs'>Tijdens de "oplossingsfase" draait het om het identificeren en elimineren van de obstakels die jouw bedrijfsvoering belemmeren. Dit kan variëren van operationele problemen tot strategische knelpunten. Onze experts brengen de nodige expertise mee om deze uitdagingen grondig te analyseren en oplossingen te ontwikkelen en te implementeren die werken</p>
                </div>
                <div className="md:w-1/2 container relative pb-16">
                    <DecoRight imageSrc='/images/oplossingen.webp' />
                </div>
            </div>
            <WerkStappen accordionItems={accordionItems} />
            <WatLevertHetOp omschrijving='Dankzij onze oplossingsgerichte aanpak:' steps={steps} />
            <BottomCta titel="Heb je te maken met een complex probleem dat onmiddellijke aandacht vereist? " paragraph="Neem dan contact met ons op en ontdek hoe wij je kunnen helpen om snel en effectief tot een oplossing te komen." />
        </div>
    )
}