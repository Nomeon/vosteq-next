import type { Metadata } from "next";
import { WatLevertHetOp } from "@/components/vosteq/wat-levert-het-op";
import { WerkStappen } from '@/components/vosteq/werk-stappen';
import { BottomCta } from '@/components/vosteq/bottom-cta';
import { Popup } from '@/components/ui/popup';
import DecoRight from '@/components/vosteq/deco-right';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Hands-on Begeleiding voor Verandering | Vosteq",
    description: "Ontdek hoe Vosteq hands-on begeleiding biedt bij organisatieverandering. Van training tot implementatie: wij zorgen dat jouw transformaties slagen.",
  };

export default function Begeleiding() {
    const steps = [
        {
            icon: 'mdi:handshake',
            title: 'Ondersteuning met impact',
            description: 'want jouw team krijgt de vaardigheden en kennis om veranderingen zelfverzekerd door te voeren.'
        },
        {
            icon: 'mdi:alarm-check',
            title: "Snelle aanpak van obstakels",
            description: 'waardoor vertragingen worden voorkomen en de kans op aanzienlijk succes toeneemt.'
        },
        {
            icon: 'mdi:chart-line',
            title: 'Vloeiende overgang',
            description: 'naar nieuwe processen en technologieën, zonder verstoring van dagelijkse activiteiten.'
        }
    ];

    const accordionItems = [
        {
            value: 'stap1',
            stap: 'Stap 1.',
            title: 'Hands-on begeleiding',
            description: 'We werken direct met jouw medewerkers tijdens de implementatie van nieuwe processen en systemen. Dit bouwt vertrouwen op en zorgt voor een soepele overgang.'
        },
        {
            value: 'stap2',
            stap: 'Stap 2.',
            title: 'Training en ontwikkeling',
            description: 'Ons team verzorgt gerichte trainingen en workshops, afgestemd op de behoeften van jouw organisatie. Denk aan technische trainingen en nieuwe werkwijzen.'
        },
        {
            value: 'stap3',
            stap: 'Stap 3.',
            title: 'Probleemoplossing',
            description: 'Bij onverwachte obstakels grijpen we snel in met praktische oplossingen, zodat het veranderproces niet stagneert.'
        },
        {
            value: 'stap4',
            stap: 'Stap 4.',
            title: 'Continuïteit waarborgen',
            description: 'Door voortgang te monitoren en onze aanpak aan te passen waar nodig, zorgen we voor duurzame veranderingen met blijvend resultaat.'
        }
    ]

    return (
        <div className='flex flex-col'>
            <Popup />
            <div className="container flex flex-col lg:flex-row gap-16 lg:gap-32 lg:py-16 py-4">
                <div className="lg:w-1/2 flex flex-col gap-4">
                    <p className='font-aktiv-grotesk-extended text-base text-donkergroen'>Hands-on ondersteuning voor succesvolle verandering</p>
                    <h1 className="text-paars">Begeleiding</h1>
                    <p className="font-aktiv-grotesk-extended text-paars">Bij Vosteq begrijpen we dat verandering alleen slaagt met effectieve en praktische ondersteuning. Onze hands-on begeleiding zorgt ervoor dat jouw organisatie niet alleen weet wat er moet gebeuren, maar ook daadwerkelijk stappen zet om veranderingen door te voeren. <Link className="underline hover:text-donkergroen" href='/over-vosteq/de-veranderexperts'>Onze experts</Link> staan zij aan zij met jouw team om obstakels te overwinnen en duurzame resultaten te bereiken.</p>
                    <h3 className='pt-8 text-paars max-lg:text-2xl'>Adviseren en implementeren</h3>
                    <p className='text-diepgrijs'>In de begeleidingsfase werken we nauw samen met jouw team om veranderingen soepel te laten verlopen. Wij gaan verder dan alleen adviseren: onze experts zijn actief betrokken bij de implementatie en bieden de nodige begeleiding om nieuwe processen en strategieën succesvol uit te rollen. Met onze aanpak leren jouw medewerkers niet alleen wát er moet veranderen, maar ook hóe ze deze veranderingen kunnen toepassen en borgen in de praktijk.</p>
                </div>
                <div className="lg:w-1/2 container relative pb-16">
                    <DecoRight imageSrc='/images/begeleiding.webp' />
                </div>
            </div>
            <WerkStappen accordionItems={accordionItems} />
            <WatLevertHetOp steps={steps} omschrijving='Met de begeleiding van Vosteq profiteer je van:' />
            <BottomCta titel="Wil jij jouw team de begeleiding bieden die nodig is voor succesvolle veranderingen?" paragraph="Neem contact op met Vosteq en ontdek hoe wij jouw organisatie kunnen ondersteunen in elke stap van het proces." />
        </div>
    )
}