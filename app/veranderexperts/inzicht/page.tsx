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
    title: "Vosteq | Inzicht",
    description: "Aan het bouwen!",
  };

export default function Inzicht() {
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


    return (
        <div className='flex flex-col'>
            <div className="container flex flex-col md:flex-row gap-16 md:gap-32 md:py-16 py-4">
                <div className="md:w-1/2 flex flex-col gap-4">
                    <h1 className="text-paars">Inzicht</h1>
                    <p className="font-aktiv-grotesk-extended text-paars">Bij Vosteq geloven we dat elke succesvolle verandering begint met een diepgaand inzicht in jouw bedrijf. Daarom is de eerste stap in onze aanpak altijd gericht op het volledig doorgronden van jouw organisatie, processen en uitdagingen. We nemen de tijd om te ontdekken en te begrijpen wat er binnen jouw MKB-maakbedrijf speelt, zodat we oplossingen op maat kunnen ontwikkelen die echt werken.</p>
                    <h2 className='pt-8 text-paars max-md:text-2xl text-2xl'>Gedetailleerde bedrijfsanalyse</h2>
                    <div className="flex text-paars font-aptos text-base">
                        <ul className="inline">
                            <li className="inline-block py-1 max-md:pr-2"><b>De huidige bedrijfsprocessen:</b> hoe lopen de huidige processen en waar liggen knelpunten?</li>
                            <Separator />
                            <li className="inline-block py-1 max-md:pr-2"><b>De organisatiestructuur:</b> hoe is je team georganiseerd en waar liggen de sterke en zwakke punten?</li>
                            <Separator />
                            <li className="inline-block py-1 max-md:pr-2"><b>De bedrijfscultuur:</b> wat drijft jouw medewerkers en hoe beïnvloedt dit de prestaties?</li>
                            <Separator />
                            <li className="inline-block py-1 max-md:pr-2"><b>De marktpositie:</b> hoe positioneer je jouw MKB-maakbedrijf in de markt en waar liggen de kansen en bedreigingen?</li>
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
                    <AccordionTrigger className='text-wit text-sm md:text-lg hover:text-geel'><div className='flex'><p className='pr-2 font-bold'>Stap 1.</p>Diepgaande analyse</div></AccordionTrigger>
                    <AccordionContent className='md:text-base text-wit my-4'>
                        We beginnen met gesprekken met jouw team en met het verzamelen van data over je huidige processen en prestaties. Dit onderdeel kan interviews, observaties en het analyseren van bestaande documentatie omvatten.
                    </AccordionContent>
                    </AccordionItem>
                    <Separator className='bg-wit' />
                    <AccordionItem value='stap2' className='my-2'>
                    <AccordionTrigger className='text-wit text-sm text-left md:text-lg hover:text-geel'><div className='flex'><p className='pr-2 font-bold'>Stap 2.</p>Identificeren kernuitdagingen</div></AccordionTrigger>
                    <AccordionContent className='md:text-base text-wit my-4'>
                        Op basis van onze analyse identificeren we de kernuitdagingen die jouw bedrijf belemmeren om te groeien of te innoveren.
                    </AccordionContent>
                    </AccordionItem>
                    <Separator className='bg-wit' />
                    <AccordionItem value='stap3' className='my-2'>
                    <AccordionTrigger className='text-wit text-sm md:text-lg hover:text-geel'><div className='flex'><p className='pr-2 font-bold'>Stap 3.</p>Inzicht verwerven</div></AccordionTrigger>
                    <AccordionContent className='md:text-base text-wit my-4'>
                        We vertalen onze bevindingen naar duidelijke inzichten die als basis dienen voor de volgende stappen in het veranderproces.
                    </AccordionContent>
                    </AccordionItem>
                </Accordion>
                </div>
            </div>
            <div className='md:container'>
                <div className="container flex flex-col items-center md:py-16 max-md:pb-16">
                <h2 className="text-paars max-md:text-xl text-left md:text-center w-full">Wat levert het op?</h2>
                <p className='text-donkergroen pt-4 font-aktiv-grotesk-extended'>Zo gauw wij een diepgaand inzicht in jouw bedrijf hebben, kunnen we voor jou:</p>
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