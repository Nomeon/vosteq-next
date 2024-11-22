import Image from 'next/image';
import type { Metadata } from "next";
import { WatLevertHetOp } from "@/components/vosteq/wat-levert-het-op";
import { WerkStappen } from '@/components/vosteq/werk-stappen';
import { BottomCta } from '@/components/vosteq/bottom-cta';
import { Popup } from '@/components/ui/popup';
import DecoRight from '@/components/vosteq/deco-right';

export const metadata: Metadata = {
    title: "Vosteq | Strategisch plan",
    description: "Aan het bouwen!",
  };

export default function StrategischPlan() {    
    const steps = [
        {
            icon: 'mdi:flash',
            title: 'Snel zichtbaar resultaat',
            description: 'doordat we werken aan de hoogste prioriteiten in korte, gerichte werkperiodes.'
        },
        {
            icon: 'mdi:rotate-right',
            title: "Flexibel en wendbaar",
            description: 'met de mogelijkheid om bij te sturen in het geval van veranderende omstandigheden.'
        },
        {
            icon: 'mdi:chart-bell-curve',
            title: 'Optimaliseer je middelen',
            description: 'doordat we ons focussen op wat er écht toe doet, zonder tijd en budget te verspillen aan minder belangrijke zaken.'
        }
    ];

    const accordionItems = [
        {
            value: 'stap1',
            stap: 'Stap 1.',
            title: 'Prioriteiten stellen',
            description: 'We beginnen met het vaststellen van de belangrijkste doelen en de deelprojecten die de grootste impact hebben op jouw bedrijf. Deze doelen en deelprojecten krijgen de hoogste prioriteit tijdens onze eerste sprints.'
        },
        {
            value: 'stap2',
            stap: 'Stap 2.',
            title: 'Plan maken in sprints',
            description: 'Elk deelproject wordt uitgewerkt in een sprint van enkele weken, waarin we intensief werken aan het realiseren van concrete resultaten. Aan het einde van elke sprint evalueren we de voortgang, maken we eventuele aanpassingen en plannen we de volgende sprint.'
        },
        {
            value: 'stap3',
            stap: 'Stap 3.',
            title: 'Wendbaarheid',
            description: 'Omdat we in sprints werken, kunnen we snel inspelen op veranderingen en nieuwe inzichten. Dit maakt ons plan flexibeler en effectiever, omdat we voortdurend de focus houden op de bedrijfsdoelen die de meeste waarde opleveren.'
        },
        {
            value: 'stap4',
            stap: 'Stap 4.',
            title: 'Deelprojecten met prioriteit',
            description: 'De sprint-methode betekent ook dat we ons concentreren op de deelprojecten die de hoogste prioriteit hebben voor jouw bedrijfsdoelen. Door eerst de meest impactvolle taken aan te pakken, zorgen we ervoor dat je snel resultaten ziet.'
        },
        {
            value: 'stap5',
            stap: 'Stap 5.',
            title: 'Evaluatie en bijsturing',
            description: 'Aan het einde van elke sprint evalueren we samen met jou de behaalde resultaten en stellen we indien nodig het strategisch plan bij. Dit zorgt ervoor dat we altijd werken aan de meest relevante en waardevolle doelen voor jouw bedrijf.'
        }
    ]

    return (
        <div className='flex flex-col'>
            <Popup />
            <div className="container flex flex-col md:flex-row gap-16 md:gap-32 md:py-16 py-4">
                <div className="md:w-1/2 flex flex-col gap-4">
                    <h1 className="text-paars">Strategisch plan</h1>
                    <p className="font-aktiv-grotesk-extended text-paars">Na we een diepgaand inzicht in jouw bedrijf hebben gekregen en daardoor op de hoogte zijn van de uitdagingen waarmee je te maken hebt, gaan we aan de slag met een strategisch plan. Dit plan dient als routekaart voor het bereiken van je bedrijfsdoelen en het succesvol doorvoeren van veranderingen en innovaties. Bij Vosteq ontwikkelen we strategische plannen die niet alleen theoretisch sterk zijn, maar ook praktisch uitgevoerd kunnen worden en afgestemd zijn op de realiteit van jouw MKB-maakbedrijf.</p>
                    <h2 className='pt-8 text-paars max-md:text-2xl'>Flexibele en wendbare aanpak</h2>
                    <p className='text-diepgrijs'>Bij Vosteq geloven we in een flexibele en wendbare aanpak als het gaat om het maken en uitvoeren van strategische plannen voor complexe projecten. In plaats van rigide langetermijnplanningen werken we op basis van "sprints"; korte, intensieve werkperiodes waarin we deelprojecten met de hoogste prioriteit aanpakken. Deze "sprint-methode" stelt ons in staat om snel resultaten te boeken, het plan dynamisch aan te passen en in te spelen op veranderende omstandigheden.</p>
                </div>
                <div className="md:w-1/2 container relative pb-16">
                    <DecoRight imageSrc='/images/strategischplan.webp' />
                </div>
            </div>
            <WerkStappen accordionItems={accordionItems} />
            <WatLevertHetOp omschrijving='Dankzij onze sprint- en deelprojectbenadering:' steps={steps} />
            <BottomCta titel="Wil je ontdekken hoe onze sprint- en deelprojectbenadering jouw bedrijf kan helpen om snel en effectief doelen te realiseren?" paragraph="Neem dan contact met ons op, zodat we samen een wendbaar strategisch plan kunnen maken dat écht werkt." />
        </div>
    )
}