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
    title: "Vosteq | Verbetering",
    description: "Aan het bouwen!",
  };

export default function Verbetering() {
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


    return (
        <div className='flex flex-col'>
            <div className="container flex flex-col md:flex-row gap-16 md:gap-32 md:py-16 py-4">
                <div className="md:w-1/2 flex flex-col gap-4">
                    <h1 className="text-paars">Verbetering</h1>
                    <p className="font-aktiv-grotesk-extended text-paars">Veranderingen doorvoeren is één ding, maar ervoor zorgen dat die veranderingen ook daadwerkelijk de processen in je bedrijf verbeteren is een tweede. Bij Vosteq ligt onze focus op het duurzaam laten werken van de geïmplementeerde oplossingen. We zorgen ervoor dat nieuwe processen, systemen en strategieën niet alleen worden ingevoerd, maar ook blijvend succesvol zijn binnen jouw MKB-maakbedrijf.</p>
                    <h2 className='pt-8 text-paars max-md:text-2xl text-2xl'>Daadwerkelijk en blijvend effect</h2>
                    <p>Bij Vosteq betekent "verbetering" dat we verder gaan dan alleen de implementatie van een oplossing. We blijven betrokken om ervoor te zorgen dat de veranderingen daadwerkelijk effect hebben en blijven bijdragen aan de verbetering van jouw bedrijfsvoering. Dit doen we door:</p>
                    <div className="flex text-paars font-aptos text-base">
                        <ul className="inline">
                            <li className="inline-block py-1 max-md:pr-2"><b>Bewaking van continuïteit:</b> we monitoren de integratie van de veranderingen en maken waar nodig aanpassingen om de continuïteit te waarborgen.</li>
                            <Separator />
                            <li className="inline-block py-1 max-md:pr-2"><b>Nazrog en ondersteuning:</b> we bieden blijvende ondersteuning aan jouw team, zodat iedereen weet hoe de nieuwe processen optimaal benut kunnen worden.</li>
                            <Separator />
                            <li className="inline-block py-1 max-md:pr-2"><b>Evaluatie en optimalisatie:</b> we evalueren de effectiviteit van de veranderingen met regelmaat en zoeken hierbij naar mogelijkheden voor verdere optimalisatie.</li>
                        </ul>
                    </div>
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
                    <AccordionTrigger className='text-wit text-sm md:text-lg hover:text-geel'><div className='flex'><p className='pr-2 font-bold'>Stap 1.</p>Implementatie volgen</div></AccordionTrigger>
                    <AccordionContent className='md:text-base text-wit my-4'>
                        Na de implementatie van de oplossing blijven we nauwgezet volgen hoe de nieuwe processen en systemen in de praktijk werken. We identificeren eventuele knelpunten en werken samen met jouw team om deze op te lossen.
                    </AccordionContent>
                    </AccordionItem>
                    <Separator className='bg-wit' />
                    <AccordionItem value='stap2' className='my-2'>
                    <AccordionTrigger className='text-wit text-sm text-left md:text-lg hover:text-geel'><div className='flex'><p className='pr-2 font-bold'>Stap 2.</p>Blijvende ondersteuning</div></AccordionTrigger>
                    <AccordionContent className='md:text-base text-wit my-4'>
                        Na de implementatie van de oplossing blijven we beschikbaar voor ondersteuning en coaching, zodat jouw medewerkers zich comfortabel voelen met de veranderingen en deze op de juiste manier toepassen.
                    </AccordionContent>
                    </AccordionItem>
                    <Separator className='bg-wit' />
                    <AccordionItem value='stap3' className='my-2'>
                    <AccordionTrigger className='text-wit text-sm md:text-lg hover:text-geel'><div className='flex'><p className='pr-2 font-bold'>Stap 3.</p>Evalueren en optimaliseren</div></AccordionTrigger>
                    <AccordionContent className='md:text-base text-wit my-4'>
                        We evalueren de resultaten van de veranderingen op regelmatige basis. Als we verbeterpunten zien, stellen we optimalisaties voor om het maximale uit de nieuwe processen te halen.
                    </AccordionContent>
                    </AccordionItem>
                    <Separator className='bg-wit' />
                    <AccordionItem value='stap4' className='my-2'>
                    <AccordionTrigger className='text-wit text-sm md:text-lg hover:text-geel'><div className='flex'><p className='pr-2 font-bold'>Stap 4.</p>Duurzame integratie</div></AccordionTrigger>
                    <AccordionContent className='md:text-base text-wit my-4'>
                        Ons doel is om ervoor te zorgen dat de veranderingen volledig worden geïntegreerd in jouw bedrijfsvoering, zodat ze ook op de lange termijn waarde blijven toevoegen.
                    </AccordionContent>
                    </AccordionItem>
                </Accordion>
                </div>
            </div>
            <div className='md:container'>
                <div className="container flex flex-col items-center md:py-16 max-md:pb-16">
                <h2 className="text-paars max-md:text-xl text-left md:text-center w-full">Wat levert het op?</h2>
                <p className='text-donkergroen pt-4 font-aktiv-grotesk-extended'>Met onze "verbeteringsaanpak":</p>
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
                    <p className='text-wit'>Laten we beginnen met een goed gesprek, zodat we inzicht krijgen in jouw organisatie.</p>
                    <div>
                    <button className='btn-solid'><Link href='/contact'>Neem contact op</Link></button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}