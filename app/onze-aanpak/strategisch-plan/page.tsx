import type { Metadata } from "next";
import { WatLevertHetOp } from "@/components/vosteq/wat-levert-het-op";
import { WerkStappen } from '@/components/vosteq/werk-stappen';
import { BottomCta } from '@/components/vosteq/bottom-cta';
import { Popup } from '@/components/ui/popup';
import DecoRight from '@/components/vosteq/deco-right';

export const metadata: Metadata = {
    title: "Strategisch Plan voor MKB-Maakbedrijven | Vosteq",
    description: "Ontdek hoe Vosteq jouw MKB-maakbedrijf helpt met een strategisch plan dat flexibel, efficiënt en resultaatgericht is. Wendbare aanpak met sprints. Lees meer!",
  };

export default function StrategischPlan() {    
    const steps = [
        {
            icon: 'mdi:flash',
            title: 'Snel zichtbaar resultaat',
            description: 'door te focussen op de hoogste prioriteiten in korte, gerichte werkperiodes.'
        },
        {
            icon: 'mdi:rotate-right',
            title: "Flexibiliteit",
            description: 'en wendbaarheid om in te spelen op veranderingen of nieuwe uitdagingen.'
        },
        {
            icon: 'mdi:progress-clock',
            title: 'Efficiëntie',
            description: 'door onze focus op wat echt belangrijk is, zonder verspilling van tijd of budget.'
        }
    ];

    const accordionItems = [
        {
            value: 'stap1',
            stap: 'Stap 1.',
            title: 'Prioriteiten stellen',
            description: 'Samen identificeren we de doelen en deelprojecten die de grootste impact hebben op jouw bedrijf. Deze krijgen prioriteit in de eerste sprints.'
        },
        {
            value: 'stap2',
            stap: 'Stap 2.',
            title: 'Sprints plannen',
            description: 'Elk deelproject wordt uitgevoerd in sprints van enkele weken, gericht op het behalen van concrete resultaten. Na elke sprint evalueren we de voortgang en passen we het plan indien nodig aan.'
        },
        {
            value: 'stap3',
            stap: 'Stap 3.',
            title: 'Wendbaarheid waarborgen',
            description: 'Door in sprints te werken, kunnen we flexibel reageren op nieuwe inzichten en veranderende omstandigheden, terwijl we de focus houden op de belangrijkste bedrijfsdoelen.'
        },
        {
            value: 'stap4',
            stap: 'Stap 4.',
            title: 'Focus op prioriteiten',
            description: 'We concentreren ons op de taken met de hoogste impact, zodat jouw bedrijf snel resultaten ziet en middelen optimaal worden ingezet.'
        },
        {
            value: 'stap5',
            stap: 'Stap 5.',
            title: 'Evaluatie en bijsturing',
            description: 'Na elke sprint evalueren we samen de behaalde resultaten en stellen we het strategisch plan bij om voortdurend te blijven werken aan de meest waardevolle doelen.'
        }
    ]

    return (
        <div className='flex flex-col'>
            <Popup />
            <div className="container flex flex-col md:flex-row gap-16 md:gap-32 md:py-16 py-4">
                <div className="md:w-1/2 flex flex-col gap-4">
                    <p className='font-aktiv-grotesk-extended text-base text-donkergroen'>Wendbaar naar succes</p>
                    <h1 className="text-paars">Strategisch plan</h1>
                    <p className="font-aktiv-grotesk-extended text-paars">Na het verkrijgen van een diepgaand inzicht in jouw bedrijf, gaan we bij Vosteq aan de slag met een strategisch plan dat fungeert als routekaart naar jouw bedrijfsdoelen. Onze plannen zijn niet alleen theoretisch sterk, maar ook praktisch uitvoerbaar en afgestemd op de realiteit van jouw MKB-maakbedrijf.</p>
                    <h3 className='pt-8 text-paars max-md:text-2xl'>Flexibele en wendbare aanpak</h3>
                    <p className='text-diepgrijs'>Wij geloven dat een succesvol strategisch plan flexibel en wendbaar moet zijn, vooral bij complexe projecten. Daarom werken we met de sprint-methode: korte, intensieve werkperiodes waarin we ons richten op de deelprojecten met de hoogste prioriteit. Hierdoor realiseren we snel zichtbare resultaten, blijven we dynamisch en kunnen we inspelen op veranderende omstandigheden.</p>
                </div>
                <div className="md:w-1/2 container relative pb-16">
                    <DecoRight imageSrc='/images/strategischplan.webp' />
                </div>
            </div>
            <WerkStappen accordionItems={accordionItems} />
            <WatLevertHetOp omschrijving='Dankzij onze sprint-aanpak profiteer je van:' steps={steps} />
            <BottomCta titel="Wil jij een strategisch plan dat écht werkt en snel resultaat oplevert?" paragraph="Ontdek hoe onze sprint- en deelprojectbenadering jouw bedrijf helpt om flexibel en doelgericht vooruit te gaan. Neem vandaag nog contact met ons op!" />
        </div>
    )
}