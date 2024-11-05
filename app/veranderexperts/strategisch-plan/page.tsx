import Image from 'next/image'
import Link from 'next/link'
import { Accordion, 
    AccordionContent, 
    AccordionItem, 
    AccordionTrigger
} from '@/components/ui/accordion'
import { Separator } from '@/components/ui/separator'
import { Carousel, 
    CarouselContent, 
    CarouselItem
} from '@/components/ui/carousel'
import { FC } from 'react'
import { Icon } from '@iconify/react'
import { Metadata } from 'next'
import { StepDienstenProps } from '@/lib/definitions'

export const metadata: Metadata = {
    title: "Vosteq | Strategisch plan",
    description: "Aan het bouwen!",
  };

export default function StrategischPlan() {
    const StepCard: FC<StepDienstenProps> = ({ icon, title, description }) => (
        <div className="py-8 md:w-72 text-center outline outline-1 outline-groen px-4 flex flex-col max-md:h-full">
          <div className="flex items-center justify-center h-32">
            <Icon className='text-groen' icon={icon} width={60} height={60} />
          </div>
          <div className='flex flex-col'>
            <h4 className="text-paars text-base md:text-xl flex-none">{title}</h4>
            <Separator className="bg-paars my-2 flex-none" />
            <p className="text-diepgrijs font-aktiv-grotesk-extended grow">{description}</p>
          </div>
        </div>
    );
    
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


    return (
        <div className='flex flex-col'>
            <div className="container flex flex-col md:flex-row gap-16 md:gap-32 md:py-16 py-4">
                <div className="md:w-1/2 flex flex-col gap-4">
                    <h1 className="text-paars">Strategisch plan</h1>
                    <p className="font-aktiv-grotesk-extended text-paars">Na we een diepgaand inzicht in jouw bedrijf hebben gekregen en daardoor op de hoogte zijn van de uitdagingen waarmee je te maken hebt, gaan we aan de slag met een strategisch plan. Dit plan dient als routekaart voor het bereiken van je bedrijfsdoelen en het succesvol doorvoeren van veranderingen en innovaties. Bij Vosteq ontwikkelen we strategische plannen die niet alleen theoretisch sterk zijn, maar ook praktisch uitgevoerd kunnen worden en afgestemd zijn op de realiteit van jouw MKB-maakbedrijf.</p>
                    <h2 className='pt-8 text-paars max-md:text-2xl'>Flexibele en wendbare aanpak</h2>
                    <p className='text-diepgrijs'>Bij Vosteq geloven we in een flexibele en wendbare aanpak als het gaat om het maken en uitvoeren van strategische plannen voor complexe projecten. In plaats van rigide langetermijnplanningen werken we op basis van "sprints"; korte, intensieve werkperiodes waarin we deelprojecten met de hoogste prioriteit aanpakken. Deze "sprint-methode" stelt ons in staat om snel resultaten te boeken, het plan dynamisch aan te passen en in te spelen op veranderende omstandigheden.</p>
                </div>
                <div className="md:w-1/2 container relative pb-16">
                    <Image className='object-cover' src="/images/deskundigen.webp" alt='Deskundigen' width={650} height={550} />
                </div>
            </div>
            <div className='bg-gradient-to-b from-paars to-groen from-30% max-md:mb-16'>
                <div className='container flex flex-col md:flex-row py-16'>
                <div className='md:w-1/2 flex flex-col gap-8 justify-center'>
                    <h2 className='text-wit max-md:text-2xl'>Hoe gaan we te werk?</h2>
                    <Image className='object-cover py-4 max-md:hidden' src="/images/systeem.svg" alt='Het systeem van Vosteq' height={80} width={370} />
                </div>
                <Accordion type='single' collapsible className='md:w-1/2'>
                    <AccordionItem value='stap1' className='my-2'>
                    <AccordionTrigger className='text-wit text-sm md:text-lg hover:text-geel'><div className='flex'><p className='pr-2 font-bold'>Stap 1.</p>Prioriteiten stellen</div></AccordionTrigger>
                    <AccordionContent className='md:text-base text-wit my-4'>
                        We beginnen met het vaststellen van de belangrijkste doelen en de deelprojecten die de grootste impact hebben op jouw bedrijf. Deze doelen en deelprojecten krijgen de hoogste prioriteit tijdens onze eerste sprints.
                    </AccordionContent>
                    </AccordionItem>
                    <Separator className='bg-wit' />
                    <AccordionItem value='stap2' className='my-2'>
                    <AccordionTrigger className='text-wit text-sm text-left md:text-lg hover:text-geel'><div className='flex'><p className='pr-2 font-bold'>Stap 2.</p>Plan maken in sprints</div></AccordionTrigger>
                    <AccordionContent className='md:text-base text-wit my-4'>
                        Elk deelproject wordt uitgewerkt in een sprint van enkele weken, waarin we intensief werken aan het realiseren van concrete resultaten. Aan het einde van elke sprint evalueren we de voortgang, maken we eventuele aanpassingen en plannen we de volgende sprint.
                    </AccordionContent>
                    </AccordionItem>
                    <Separator className='bg-wit' />
                    <AccordionItem value='stap3' className='my-2'>
                    <AccordionTrigger className='text-wit text-sm md:text-lg hover:text-geel'><div className='flex'><p className='pr-2 font-bold'>Stap 3.</p>Wendbaarheid</div></AccordionTrigger>
                    <AccordionContent className='md:text-base text-wit my-4'>
                        Omdat we in sprints werken, kunnen we snel inspelen op veranderingen en nieuwe inzichten. Dit maakt ons plan flexibeler en effectiever, omdat we voortdurend de focus houden op de bedrijfsdoelen die de meeste waarde opleveren.
                    </AccordionContent>
                    </AccordionItem>
                    <Separator className='bg-wit' />
                    <AccordionItem value='stap4' className='my-2'>
                    <AccordionTrigger className='text-wit text-sm md:text-lg hover:text-geel'><div className='flex'><p className='pr-2 font-bold'>Stap 4.</p>Deelprojecten met prioriteit</div></AccordionTrigger>
                    <AccordionContent className='md:text-base text-wit my-4'>
                        De sprint-methode betekent ook dat we ons concentreren op de deelprojecten die de hoogste prioriteit hebben voor jouw bedrijfsdoelen. Door eerst de meest impactvolle taken aan te pakken, zorgen we ervoor dat je snel resultaten ziet.
                    </AccordionContent>
                    </AccordionItem>
                    <Separator className='bg-wit' />
                    <AccordionItem value='stap5' className='my-2'>
                    <AccordionTrigger className='text-wit text-sm md:text-lg hover:text-geel'><div className='flex'><p className='pr-2 font-bold'>Stap 5.</p>Evaluatie en bijsturing</div></AccordionTrigger>
                    <AccordionContent className='md:text-base text-wit my-4'>
                        Aan het einde van elke sprint evalueren we samen met jou de behaalde resultaten en stellen we indien nodig het strategisch plan bij. Dit zorgt ervoor dat we altijd werken aan de meest relevante en waardevolle doelen voor jouw bedrijf.
                    </AccordionContent>
                    </AccordionItem>
                </Accordion>
                </div>
            </div>
            <div className='md:container'>
                <div className="container flex flex-col items-center md:py-16 max-md:pb-16">
                <h2 className="text-paars max-md:text-xl text-left md:text-center w-full">Wat levert het op?</h2>
                <p className='text-donkergroen pt-4 font-aktiv-grotesk-extended'>Dankzij onze sprint- en deelprojectbenadering:</p>
                <div className="flex flex-row gap-4 py-12 max-md:hidden md:px-16 md:pb-16">
                    {steps.map((step, index) => (
                    <StepCard key={index} icon={step.icon} title={step.title} description={step.description} />
                    ))}
                </div>
                {/* Mobile Carousel */}
                <div className="w-full pt-4 md:hidden">
                    <Carousel className="py-4">
                    <CarouselContent>
                        {steps.map((step, index) => (
                        <CarouselItem key={index} className="basis-2/3 flex items-center">
                            <div className="w-full h-full p-1">
                            <StepCard icon={step.icon} title={step.title} description={step.description} />
                            </div>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    </Carousel>
                </div>
                </div>
            </div>
            <div className='bg-paars w-full'>
                <div className='container md:pl-32 py-20'>
                <div className='w-full md:w-1/2 flex flex-col gap-8'>
                    <h2 className='text-wit'>Wil je succesvolle groei en duurzame winstgevendheid?</h2>
                    <p className='text-wit'>Neem dan contact met ons op, zodat we samen een wendbaar strategisch plan kunnen maken dat écht werkt.</p>
                    <div>
                    <button className='btn-solid'><Link href='/contact'>Neem contact op</Link></button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}