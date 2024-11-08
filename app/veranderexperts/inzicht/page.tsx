import Image from 'next/image';
import type { Metadata } from "next";
import { Separator } from '@/components/ui/separator';
import { WatLevertHetOp } from "@/components/vosteq/wat-levert-het-op";
import { WerkStappen } from '@/components/vosteq/werk-stappen';
import { BottomCta } from '@/components/vosteq/bottom-cta';

export const metadata: Metadata = {
    title: "Vosteq | Inzicht",
    description: "Aan het bouwen!",
  };

export default function Inzicht() {    
    const steps = [
        {
            icon: 'mdi:target',
            title: 'Gerichte oplossingen ontwikkelen ',
            description: 'die precies inspelen op jouw unieke uitdagingen.'
        },
        {
            icon: 'mdi:shield-alert',
            title: "Risico's minimaliseren",
            description: 'omdat we weten waar de valkuilen liggen.'
        },
        {
            icon: 'mdi:progress-clock',
            title: 'Efficiëntere bedrijfsprocessen',
            description: 'realiseren omdat we vanaf het begin een helder beeld hebben van wat er moet gebeuren.'
        }
    ];

    const accordionItems = [
        {
            value: 'stap1',
            stap: 'Stap 1.',
            title: 'Diepgaande analyse',
            description: 'We beginnen met gesprekken met jouw team en met het verzamelen van data over je huidige processen en prestaties. Dit onderdeel kan interviews, observaties en het analyseren van bestaande documentatie omvatten.'
        },
        {
            value: 'stap2',
            stap: 'Stap 2.',
            title: 'Identificeren kernuitdagingen',
            description: 'Op basis van onze analyse identificeren we de kernuitdagingen die jouw bedrijf belemmeren om te groeien of te innoveren.'
        },
        {
            value: 'stap3',
            stap: 'Stap 3.',
            title: 'Inzicht verwerven',
            description: 'We vertalen onze bevindingen naar duidelijke inzichten die als basis dienen voor de volgende stappen in het veranderproces.'
        }
    ]

    return (
        <div className='flex flex-col'>
            <div className="container flex flex-col md:flex-row gap-16 md:gap-32 md:py-16 py-4">
                <div className="md:w-1/2 flex flex-col gap-4">
                    <h1 className="text-paars">Inzicht</h1>
                    <p className="font-aktiv-grotesk-extended text-paars">Bij Vosteq geloven we dat elke succesvolle verandering begint met een diepgaand inzicht in jouw bedrijf. Daarom is de eerste stap in onze aanpak altijd gericht op het volledig doorgronden van jouw organisatie, processen en uitdagingen. We nemen de tijd om te ontdekken en te begrijpen wat er binnen jouw MKB-maakbedrijf speelt, zodat we oplossingen op maat kunnen ontwikkelen die echt werken.</p>
                    <h2 className='pt-8 text-paars max-md:text-2xl text-3xl'>Gedetailleerde bedrijfsanalyse</h2>
                    <div className="flex flex-col gap-1 font-aptos text-base">
                        <p className='font-bold'>De huidige bedrijfsprocessen:</p>
                        <p>Hoe lopen de huidige processen en waar liggen knelpunten?</p>
                        <Separator />
                        <p className='font-bold pt-2'>De organisatiestructuur:</p>
                        <p>Hoe is je team georganiseerd en waar liggen de sterke en zwakke punten?</p>
                        <Separator />
                        <p className='font-bold pt-2'>De bedrijfscultuur:</p>
                        <p>Wat drijft jouw medewerkers en hoe beïnvloedt dit de prestaties?</p>
                        <Separator />
                        <p className='font-bold pt-2'>De marktpositie:</p>
                        <p>Hoe positioneer je jouw MKB-maakbedrijf in de markt en waar liggen de kansen en bedreigingen?</p>
                    </div>
                </div>
                <div className="md:w-1/2 container relative pb-16">
                    <Image className='object-cover' src="/images/deskundigen.webp" alt='Deskundigen' width={650} height={550} />
                </div>
            </div>
            <WerkStappen accordionItems={accordionItems} />
            <WatLevertHetOp omschrijving='Zo gauw wij een diepgaand inzicht in jouw bedrijf hebben, kunnen we voor jou:' steps={steps} />
            <BottomCta titel="Wil je veranderingen in jouw bedrijf doorvoeren die écht werken?" paragraph="Laten we beginnen met een goed gesprek, zodat we inzicht krijgen in jouw organisatie." />
        </div>
    )
}