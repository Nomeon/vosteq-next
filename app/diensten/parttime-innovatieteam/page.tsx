import Image from 'next/image';
import { Separator } from "@/components/ui/separator";
import { StepDienstenProps } from "@/lib/definitions";
import { Accordion, AccordionItem, AccordionContent, AccordionTrigger } from '@/components/ui/accordion';
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"
import { FC } from 'react';
import { Icon } from '@iconify/react';
import { Popup } from '@/components/ui/popup';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vosteq | Parttime Innovatieteam",
  description: "Aan het bouwen!",
};

export default function ParttimeInnovatieteam() {
  
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
      icon: 'mdi:account-cog',
      title: 'Multidisciplinaire aanpak',
      description: 'waarbij expertise uit verschillende vakgebieden samenkomt om jouw project tot een succes te maken.'
    },
    {
      icon: 'mdi:currency-eur',
      title: 'Verlaagde kosten',
      description: 'door efficiënt gebruik te maken van de parttime inzet van onze specialisten, zonder onnodige overhead.'
    },
    {
      icon: 'mdi:chart-line',
      title: 'Succesvolle transformatie',
      description: 'die volledig is afgestemd op de behoeften van jouw bedrijf en die meetbare resultaten oplevert.'
    }
  ];

  return (
    <div className='flex flex-col'>
      <Popup />
      <div className="container flex flex-col md:flex-row gap-16 md:gap-32 md:py-16 py-4">
        <div className="md:w-1/2 flex flex-col gap-4">
          <p className='font-aktiv-grotesk-extended text-base text-donkergroen'>Organisatie verbetering</p>
          <h1 className="text-paars">Parttime innovatieteam</h1>
          <p className="font-aktiv-grotesk-extended text-paars">Als MKB-maakbedrijf is het niet nodig om bij elk project alle rollen volledig in te vullen, maar bij complexe en grote transformaties is een geïntegreerde aanpak wel essentieel. Daarom biedt Vosteq een parttime innovatieteam dat kosteneffectief werkt om jouw bedrijf te begeleiden bij uitdagende projecten en innovaties. In dit innovatieteam combineren we de expertise van een directieadviseur, een projectmanager, een interim-manager en specialistische experts, zodat we de kennis en kunde leveren die nodig zijn om jouw doelen te realiseren.</p>
          <h2 className='pt-8 text-paars max-md:text-2xl'>Ondersteuning op het juiste moment</h2>
          <p className='text-diepgrijs'>In plaats van fulltime rollen die de kosten kunnen opdrijven, werkt ons innovatieteam in deeltijd. We zorgen ervoor dat alle rollen in het team, of het nu gaat om directieadvies, projectmanagement, interim-management of gespecialiseerde expertise, nauw met elkaar samenwerken en elkaar aanvullen. Dit betekent dat we precies de juiste hoeveelheid ondersteuning bieden op het juiste moment, zonder jouw organisatie op te zadelen met onnodige kosten.</p>
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
              <AccordionTrigger className='text-wit text-sm md:text-lg hover:text-geel'><div className='flex'><p className='pr-2 font-bold'>Stap 1.</p>Gecombineerde rollen</div></AccordionTrigger>
              <AccordionContent className='md:text-base text-wit my-4'>
                Onze directieadviseurs, projectmanagers, interim-managers en experts werken nauw samen binnen hetzelfde projectteam. Ze combineren hun kennis en ervaring om uitdagingen vanuit verschillende invalshoeken aan te pakken.
              </AccordionContent>
            </AccordionItem>
            <Separator className='bg-wit' />
            <AccordionItem value='stap2' className='my-2'>
              <AccordionTrigger className='text-wit text-sm md:text-lg hover:text-geel'><div className='flex'><p className='pr-2 font-bold'>Stap 2.</p>Flexibiliteit en schaalbaarheid</div></AccordionTrigger>
              <AccordionContent className='md:text-base text-wit my-4'>
                We passen de inzet van ons team aan op basis van de specifieke behoeften binnen jouw project. Dit betekent dat we onze inspanningen kunnen op- en afschalen, afhankelijk van de voortgang en complexiteit van de transformatie.
              </AccordionContent>
            </AccordionItem>
            <Separator className='bg-wit' />
            <AccordionItem value='stap3' className='my-2'>
              <AccordionTrigger className='text-wit text-sm md:text-lg hover:text-geel'><div className='flex'><p className='pr-2 font-bold'>Stap 3.</p>Kosteneffectiviteit</div></AccordionTrigger>
              <AccordionContent className='md:text-base text-wit my-4'>
                Omdat we de rollen in deeltijd combineren, kunnen we de kosten laag houden zonder in te boeten op kwaliteit. Onze aanpak is erop gericht dat jouw organisatie de kosten voor ons parttime innovatieteam binnen een jaar terugverdient dankzij de gerealiseerde efficiëntieverbeteringen en besparingen in jouw bedrijf.
              </AccordionContent>
              <Separator className='bg-wit' />
              </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className='md:container'>
        <div className="container flex flex-col items-center md:py-16 max-md:pb-16">
          <h2 className="text-paars max-md:text-xl text-left md:text-center w-full">Wat levert het op?</h2>
          <p className='text-donkergroen pt-4 font-aktiv-grotesk-extended'>Met de inzet van ons parttime innovatieteam:</p>
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
            <p className='text-wit'>Neem dan vandaag nog contact met ons op en ontdek hoe ons directieadvies jouw organisatie van binnenuit versterkt.</p>
            <div>
              <button className='btn-solid'>Neem contact op</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}