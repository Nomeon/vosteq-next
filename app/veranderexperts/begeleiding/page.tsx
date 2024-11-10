import Image from 'next/image';
import type { Metadata } from "next";
import { WatLevertHetOp } from "@/components/vosteq/wat-levert-het-op";
import { WerkStappen } from '@/components/vosteq/werk-stappen';
import { BottomCta } from '@/components/vosteq/bottom-cta';
import { Popup } from '@/components/ui/popup';

export const metadata: Metadata = {
    title: "Vosteq | Begeleiding",
    description: "Aan het bouwen!",
  };

export default function Begeleiding() {
    const steps = [
        {
            icon: 'mdi:handshake',
            title: 'Ondersteuning',
            description: 'om veranderingen met vertrouwen en efficiëntie door te voeren.'
        },
        {
            icon: 'mdi:alarm-check',
            title: "Obstakels snel aanpakken",
            description: 'waardoor de kans op succes aanzienlijk toeneemt.'
        },
        {
            icon: 'mdi:chart-line',
            title: 'Vloeiende overgang',
            description: 'naar nieuwe processen en technologieën, met minimale verstoring van de dagelijkse activiteiten.'
        }
    ];

    const accordionItems = [
        {
            value: 'stap1',
            stap: 'Stap 1.',
            title: 'Hands-on begeleiding',
            description: 'We werken zij aan zij met jouw medewerkers tijdens de implementatie van nieuwe processen en systemen. Dit zorgt ervoor dat zij vertrouwen krijgen in het gebruik van nieuwe methoden en technologieën.'
        },
        {
            value: 'stap2',
            stap: 'Stap 2.',
            title: 'Training en ontwikkeling',
            description: 'We bieden gerichte trainingen aan jouw team om ervoor te zorgen dat iedereen de veranderingen begrijpt en effectief kan toepassen. Dit kan variëren van technische trainingen tot workshops over nieuwe werkwijzen.'
        },
        {
            value: 'stap3',
            stap: 'Stap 3.',
            title: 'Probleemoplossing',
            description: 'We kunnen snel ingrijpen en oplossingen bieden wanneer zich onverwachte problemen voordoen. Dit zorgt ervoor dat de verandering niet stagneert en dat obstakels snel worden overwonnen.'
        },
        {
            value: 'stap4',
            stap: 'Stap 4.',
            title: 'Continuïteit waarborgen',
            description: 'We monitoren de voortgang en passen onze ondersteuning waar nodig aan, zodat de veranderingen duurzaam zijn en blijvend resultaat opleveren.'
        }
    ]

    return (
        <div className='flex flex-col'>
            <Popup />
            <div className="container flex flex-col md:flex-row gap-16 md:gap-32 md:py-16 py-4">
                <div className="md:w-1/2 flex flex-col gap-4">
                    <h1 className="text-paars">Begeleiding</h1>
                    <p className="font-aktiv-grotesk-extended text-paars">Bij Vosteq geloven we dat verandering de meeste kans van slagen heeft wanneer er effectieve en praktische ondersteuning is. Daarom bieden we jou de nodige begeleiding om de veranderingen in jouw bedrijf ook daadwerkelijk door te voeren. Onze experts staan klaar om je medewerkers stap voor stap te begeleiden en obstakels uit de weg te ruimen, zodat het plan in de praktijk wordt gebracht en resultaten oplevert.</p>
                    <h2 className='pt-8 text-paars max-md:text-2xl'>Adviseren en implementeren</h2>
                    <p className='text-diepgrijs'>In de "begeleidingsfase" werken we nauw met jouw team samen om ervoor te zorgen dat de veranderingen soepel verlopen. Dit betekent dat we niet alleen adviseren, maar ook actief betrokken zijn bij de implementatie van veranderingen. We zorgen ervoor dat jouw medewerkers de benodigde vaardigheden en kennis opdoen om de nieuwe processen en strategieën succesvol uit te rollen.</p>
                </div>
                <div className="md:w-1/2 container relative pb-16">
                    <Image className='object-cover' src="/images/deskundigen.webp" alt='Deskundigen' width={650} height={550} />
                </div>
            </div>
            <WerkStappen accordionItems={accordionItems} />
            <WatLevertHetOp steps={steps} omschrijving='Dankzij onze begeleiding:' />
            <BottomCta titel="Wil je dat jouw team de nodige begeleiding krijgt om veranderingen succesvol door te voeren?" paragraph="Neem dan vandaag nog contact met ons op en ontdek hoe wij kunnen helpen om je doelen te bereiken." />
        </div>
    )
}