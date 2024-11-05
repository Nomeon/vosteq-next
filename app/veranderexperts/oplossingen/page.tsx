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
    title: "Vosteq | Oplossingen",
    description: "Aan het bouwen!",
  };

export default function Oplossingen() {
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


    return (
        <div className='flex flex-col'>
            <div className="container flex flex-col md:flex-row gap-16 md:gap-32 md:py-16 py-4">
                <div className="md:w-1/2 flex flex-col gap-4">
                    <h1 className="text-paars">Oplossingen</h1>
                    <p className="font-aktiv-grotesk-extended text-paars">Bij Vosteq weten we dat elk MKB-maakbedrijf af en toe voor uitdagingen komt te staan die verder gaan dan de dagelijkse bedrijfsvoering. Soms ontstaan er complexe problemen die onmiddellijke en deskundige aandacht vereisen. In de "oplossingsfase" richten wij ons op het snel en effectief aanpakken van deze knelpunten, zodat je bedrijf zonder onderbrekingen verder kan.</p>
                    <h2 className='pt-8 text-paars max-md:text-2xl'>Obstakels identificeren en elimineren</h2>
                    <p className='text-diepgrijs'>Tijdens de "oplossingsfase" draait het om het identificeren en elimineren van de obstakels die jouw bedrijfsvoering belemmeren. Dit kan variëren van operationele problemen tot strategische knelpunten. Onze experts brengen de nodige expertise mee om deze uitdagingen grondig te analyseren en oplossingen te ontwikkelen en te implementeren die werken</p>
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
                    <AccordionTrigger className='text-wit text-sm md:text-lg hover:text-geel'><div className='flex'><p className='pr-2 font-bold'>Stap 1.</p>Probleemanalyse</div></AccordionTrigger>
                    <AccordionContent className='md:text-base text-wit my-4'>
                        We beginnen met een grondige analyse van het probleem. We verzamelen alle relevante informatie en inzichten om de oorzaak van het probleem volledig te begrijpen.
                    </AccordionContent>
                    </AccordionItem>
                    <Separator className='bg-wit' />
                    <AccordionItem value='stap2' className='my-2'>
                    <AccordionTrigger className='text-wit text-sm text-left md:text-lg hover:text-geel'><div className='flex'><p className='pr-2 font-bold'>Stap 2.</p>Ontwikkelen van oplossingen</div></AccordionTrigger>
                    <AccordionContent className='md:text-base text-wit my-4'>
                        Op basis van onze analyse ontwikkelen we gerichte oplossingen die specifiek zijn afgestemd op de aard van het probleem en de behoeften van jouw bedrijf.
                    </AccordionContent>
                    </AccordionItem>
                    <Separator className='bg-wit' />
                    <AccordionItem value='stap3' className='my-2'>
                    <AccordionTrigger className='text-wit text-sm md:text-lg hover:text-geel'><div className='flex'><p className='pr-2 font-bold'>Stap 3.</p>Implementatie</div></AccordionTrigger>
                    <AccordionContent className='md:text-base text-wit my-4'>
                        We implementeren de oplossing(en) snel en effectief, met minimale verstoring van je dagelijkse activiteiten. Ons team zorgt ervoor dat een oplossing naadloos wordt geïntegreerd in je bestaande processen.
                    </AccordionContent>
                    </AccordionItem>
                    <Separator className='bg-wit' />
                    <AccordionItem value='stap4' className='my-2'>
                    <AccordionTrigger className='text-wit text-sm md:text-lg hover:text-geel'><div className='flex'><p className='pr-2 font-bold'>Stap 4.</p>Monitoring en aanpassing</div></AccordionTrigger>
                    <AccordionContent className='md:text-base text-wit my-4'>
                        Nadat een oplossing is geïmplementeerd, blijven we betrokken om de resultaten te monitoren en waar nodig aanpassingen door te voeren om te garanderen dat het probleem volledig wordt opgelost.
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