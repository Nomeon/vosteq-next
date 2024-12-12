import Image from 'next/image';
import type { Metadata } from "next";
import { WatLevertHetOp } from "@/components/vosteq/wat-levert-het-op";
import { WerkStappen } from '@/components/vosteq/werk-stappen';
import { BottomCta } from '@/components/vosteq/bottom-cta';
import { Popup } from '@/components/ui/popup';
import DecoRight from '@/components/vosteq/deco-right';

export const metadata: Metadata = {
    title: "Duurzame Resultaten voor MKB-Maakbedrijven | Vosteq",
    description: "Ontdek hoe Vosteq zorgt voor duurzame veranderingen en blijvende resultaten. Van implementatie tot optimalisatie: wij helpen jouw MKB-maakbedrijf vooruit",
  };

export default function Resultaat() {
    const steps = [
        {
            icon: 'mdi:target',
            title: 'Volledige integratie',
            description: 'want veranderingen worden naadloos onderdeel van de dagelijkse bedrijfsvoering.'
        },
        {
            icon: 'mdi:chart-line',
            title: "Maximale resultaten",
            description: 'van geïmplementeerde veranderingen door voortdurende optimalisatie en aanpassing van nieuwe processen.'
        },
        {
            icon: 'mdi:progress-clock',
            title: 'Blijvende meerwaarde',
            description: 'want veranderingen blijven op de lange termijn bijdragen aan de groei en efficiëntie van jouw bedrijf.'
        }
    ];

    const accordionItems = [
        {
            value: 'stap1',
            stap: 'Stap 1.',
            title: 'Implementatie volgen',
            description: 'We monitoren hoe nieuwe processen en systemen in de praktijk werken en lossen eventuele knelpunten direct op.'
        },
        {
            value: 'stap2',
            stap: 'Stap 2.',
            title: 'Blijvende ondersteuning',
            description: 'Ons team blijft beschikbaar voor coaching en begeleiding, zodat jouw medewerkers de veranderingen effectief toepassen.'
        },
        {
            value: 'stap3',
            stap: 'Stap 3.',
            title: 'Evalueren en optimaliseren',
            description: 'Regelmatige evaluaties helpen ons om verbeterpunten te identificeren en het maximale uit de nieuwe processen te halen.'
        },
        {
            value: 'stap4',
            stap: 'Stap 4.',
            title: 'Duurzame integratie',
            description: 'Ons uiteindelijke doel is ervoor te zorgen dat veranderingen volledig geïntegreerd worden in jouw bedrijfsvoering en langdurig waarde toevoegen.'
        }
    ]

    return (
        <div className='flex flex-col'>
            <Popup />
            <div className="container flex flex-col lg:flex-row gap-16 lg:gap-32 lg:py-16 py-4">
                <div className="lg:w-1/2 flex flex-col gap-4">
                    <p className='font-aktiv-grotesk-extended text-base text-donkergroen'>Duurzame veranderingen die werken</p>
                    <h1 className="text-paars">Resultaat</h1>
                    <p className="font-aktiv-grotesk-extended text-paars">Bij Vosteq draait alles om blijvende verbetering. Het doorvoeren van veranderingen is slechts de eerste stap; ons doel is om ervoor te zorgen dat nieuwe processen, systemen en strategieën duurzaam en succesvol blijven werken binnen jouw MKB-maakbedrijf.</p>
                    <h3 className='pt-8 text-paars max-lg:text-2xl'>Daadwerkelijk en blijvend effect</h3>
                    <div className="flex flex-col gap-1 font-aptos text-base">
                        <p className='font-bold'>Bewaking van continuïteit:</p>
                        <p>We volgen de integratie van veranderingen en passen aan waar nodig om blijvende resultaten te waarborgen.</p>
                        <p className='font-bold pt-2'>Nazorg en ondersteuning:</p>
                        <p>We bieden blijvende ondersteuning en coaching aan jouw team om nieuwe processen optimaal te benutten.</p>
                        <p className='font-bold pt-2'>Evaluatie en optimalisatie:</p>
                        <p>Door regelmatig te evalueren, identificeren we kansen voor verdere verbetering en maximalisatie van resultaten.</p>
                    </div>
                </div>
                <div className="lg:w-1/2 container relative pb-16">
                    <DecoRight imageSrc='/images/verbetering.webp' />
                </div>
            </div>
            <WerkStappen accordionItems={accordionItems} />
            <WatLevertHetOp omschrijving='Met de verbeteringsaanpak van Vosteq profiteer je van:' steps={steps} />
            <BottomCta titel="Wil jij blijvende resultaten realiseren met duurzame veranderingen?" paragraph="Ontdek hoe Vosteq jouw bedrijf helpt om meerwaarde te creëren die werkt - vandaag, morgen en in de toekomst." />
        </div>
    )
}