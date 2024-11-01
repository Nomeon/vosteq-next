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
  title: "Vosteq | Projectmanagement",
  description: "Aan het bouwen!",
};

export default function Projectmanagement() {
  
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
      icon: 'mdi:cog-transfer',
      title: 'Verbeterde interne efficiëntie',
      description: 'door processen te optimaliseren en middelen beter in te zetten.'
    },
    {
      icon: 'mdi:account-group',
      title: 'Een sterkere bedrijfscultuur',
      description: 'waar medewerkers zich betrokken voelen en bijdragen aan het succes van het bedrijf.'
    },
    {
      icon: 'mdi:shield-check',
      title: 'Een duurzaam concurrentievoordeel',
      description: 'door te bouwen op de unieke interne kernwaarden binnen jouw organisatie.'
    },
    {
      icon: 'mdi:chart-line',
      title: 'Betere besluitvorming',
      description: 'dankzij een scherp inzicht in je eigen organisatie en de verbetermogelijkheden.'
    }
  ];

  return (
    <div className='flex flex-col'>
      <Popup />
      <div className="container flex flex-col md:flex-row gap-16 md:gap-32 md:py-16 py-4">
        <div className="md:w-1/2 flex flex-col gap-4">
          <p className='font-aktiv-grotesk-extended text-base text-donkergroen'>Organisatie verbetering</p>
          <h1 className="text-paars">Directie advies</h1>
          <p className="font-aktiv-grotesk-extended text-paars">Succesvolle groei en duurzame winstgevendheid beginnen bij een solide interne basis. Bij Vosteq bieden we directieadvies dat zich richt op het versterken van jouw organisatie van binnenuit, zodat je beter voorbereid bent om externe uitdagingen aan te gaan en kansen te benutten. Hierbij nemen we jouw organisatie en haar onderscheidende krachten als uitgangspunt.</p>
          <h2 className='pt-8 text-paars max-md:text-2xl'>Diepgaande analyse</h2>
          <p className='text-diepgrijs'>Onze &apos;inside-out benadering&apos; begint met een diepgaande analyse van de interne processen, de bedrijfscultuur en de middelen in jouw organisatie. In plaats van veel nadruk te leggen op externe trends en bedreigingen, richten we ons eerst op wat jouw bedrijf uniek maakt en hoe je deze interne krachten kunt versterken om zo een concurrentievoordeel te creëren.</p>
        </div>
        <div className="md:w-1/2 container relative pb-16">
          <Image className='object-cover' src="/images/deskundigen.svg" alt='Deskundigen' width={650} height={550} />
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
              <AccordionTrigger className='text-wit text-sm md:text-lg hover:text-geel'><div className='flex'><p className='pr-2 font-bold'>Stap 1.</p>Inzicht krijgen in je bedrijf</div></AccordionTrigger>
              <AccordionContent className='md:text-base text-wit my-4'>
                Wat is de huidige staat van jouw organisatie? Om een duidelijk antwoord op deze vraag te krijgen, organiseren we koffiegesprekken en analyseren we de bedrijfsprocessen en -technologieën, de organisatiestructuur, de leiderschapscapaciteiten en de werknemersbetrokkenheid.
              </AccordionContent>
            </AccordionItem>
            <Separator className='bg-wit' />
            <AccordionItem value='stap2' className='my-2'>
              <AccordionTrigger className='text-wit text-sm md:text-lg hover:text-geel'><div className='flex'><p className='pr-2 font-bold'>Stap 2.</p>Identificeren van kernkwaliteiten</div></AccordionTrigger>
              <AccordionContent className='md:text-base text-wit my-4'>
                We helpen je bij het identificeren van de unieke kwaliteiten en sterke punten binnen jouw organisatie, zoals bijvoorbeeld de innovatieve productieprocessen, het sterke team of de diepgaande technische expertise. Of een combinatie daarvan.
              </AccordionContent>
            </AccordionItem>
            <Separator className='bg-wit' />
            <AccordionItem value='stap3' className='my-2'>
              <AccordionTrigger className='text-wit text-sm md:text-lg hover:text-geel'><div className='flex'><p className='pr-2 font-bold'>Stap 3.</p>Strategische versterking</div></AccordionTrigger>
              <AccordionContent className='md:text-base text-wit my-4'>
                Op basis van onze inzichten ontwikkelen we strategieën om de kernkwaliteiten verder te versterken. Dit kan variëren van procesoptimalisatie, automatisering, digitalisering en/of organisatieontwikkeling tot het verbeteren van de bedrijfscultuur en het innovatievermogen.
              </AccordionContent>
              <Separator className='bg-wit' />
              </AccordionItem>
            <AccordionItem value='stap4' className='my-2'>
              <AccordionTrigger className='text-wit text-sm md:text-lg hover:text-geel'><div className='flex'><p className='pr-2 font-bold'>Stap 4.</p>Implementatie en begeleiding</div></AccordionTrigger>
              <AccordionContent className='md:text-base text-wit my-4'>
                We begeleiden je bij de implementatie van deze strategieën en zorgen ervoor dat ze in de dagelijkse operaties van je bedrijf worden geïntegreerd.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className='md:container'>
        <div className="container flex flex-col items-center md:py-16 max-md:pb-16">
          <h2 className="text-paars max-md:text-xl text-left md:text-center w-full">Wat levert het op?</h2>
          <p className='text-donkergroen pt-4 font-aktiv-grotesk-extended'>Dankzij onze inside-out benadering realiseren we:</p>
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