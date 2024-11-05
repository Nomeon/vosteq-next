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
    title: "Vosteq | Begeleiding",
    description: "Aan het bouwen!",
  };

export default function Begeleiding() {
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


    return (
        <div className='flex flex-col'>
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
            <div className='bg-gradient-to-b from-paars to-groen from-30% max-md:mb-16'>
                <div className='container flex flex-col md:flex-row py-16'>
                <div className='md:w-1/2 flex flex-col gap-8 justify-center'>
                    <h2 className='text-wit max-md:text-2xl'>Hoe gaan we te werk?</h2>
                    <Image className='object-cover py-4 max-md:hidden' src="/images/systeem.svg" alt='Het systeem van Vosteq' height={80} width={370} />
                </div>
                <Accordion type='single' collapsible className='md:w-1/2'>
                    <AccordionItem value='stap1' className='my-2'>
                    <AccordionTrigger className='text-wit text-sm md:text-lg hover:text-geel'><div className='flex'><p className='pr-2 font-bold'>Stap 1.</p>Hands-on begeleiding</div></AccordionTrigger>
                    <AccordionContent className='md:text-base text-wit my-4'>
                        We werken zij aan zij met jouw medewerkers tijdens de implementatie van nieuwe processen en systemen. Dit zorgt ervoor dat zij vertrouwen krijgen in het gebruik van nieuwe methoden en technologieën.
                    </AccordionContent>
                    </AccordionItem>
                    <Separator className='bg-wit' />
                    <AccordionItem value='stap2' className='my-2'>
                    <AccordionTrigger className='text-wit text-sm text-left md:text-lg hover:text-geel'><div className='flex'><p className='pr-2 font-bold'>Stap 2.</p>Training en ontwikkeling</div></AccordionTrigger>
                    <AccordionContent className='md:text-base text-wit my-4'>
                        We bieden gerichte trainingen aan jouw team om ervoor te zorgen dat iedereen de veranderingen begrijpt en effectief kan toepassen. Dit kan variëren van technische trainingen tot workshops over nieuwe werkwijzen.
                    </AccordionContent>
                    </AccordionItem>
                    <Separator className='bg-wit' />
                    <AccordionItem value='stap3' className='my-2'>
                    <AccordionTrigger className='text-wit text-sm md:text-lg hover:text-geel'><div className='flex'><p className='pr-2 font-bold'>Stap 3.</p>Probleemoplossing</div></AccordionTrigger>
                    <AccordionContent className='md:text-base text-wit my-4'>
                        We kunnen snel ingrijpen en oplossingen bieden wanneer zich onverwachte problemen voordoen. Dit zorgt ervoor dat de verandering niet stagneert en dat obstakels snel worden overwonnen.
                    </AccordionContent>
                    </AccordionItem>
                    <Separator className='bg-wit' />
                    <AccordionItem value='stap4' className='my-2'>
                    <AccordionTrigger className='text-wit text-sm md:text-lg hover:text-geel'><div className='flex'><p className='pr-2 font-bold'>Stap 4.</p>Continuïteit waarborgen</div></AccordionTrigger>
                    <AccordionContent className='md:text-base text-wit my-4'>
                        We monitoren de voortgang en passen onze ondersteuning waar nodig aan, zodat de veranderingen duurzaam zijn en blijvend resultaat opleveren.
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