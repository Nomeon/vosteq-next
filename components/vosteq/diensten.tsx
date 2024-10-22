import Image from 'next/image';
import { Link } from "@/lib/i18n";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionItem, AccordionContent, AccordionTrigger } from '@/components/ui/accordion';
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"
import { FC } from 'react';
import * as m from "@/paraglide/messages.js";
import { Icon } from '@iconify/react';
import { Button } from '../ui/button';

interface StepDienstenProps {
  icon: string;
  title: string;
  description: string;
}

const Diensten = () => {
  const StepCard: FC<StepDienstenProps> = ({ icon, title, description }) => (
    <div className="py-8 w-72 text-center outline outline-1 outline-groen px-4 flex flex-col flex-1 group hover:bg-groen transition-all duration-200">
      <div className="flex items-center justify-center h-32">
        <Icon className='text-groen group-hover:text-paars transition-all duration-200' icon={icon} width={60} height={60} />
      </div>
      <h4 className="text-paars text-xl">{title}</h4>
      <Separator className="bg-paars my-2" />
      <p className="text-diepgrijs font-aktiv-grotesk-extended group-hover:text-wit transition-all duration-200">{description}</p>
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
      <div className="container flex flex-col md:flex-row gap-32 pb-16 pt-16">
        <div className="md:w-1/2 flex flex-col gap-4">
          <p className='font-aktiv-grotesk-extended text-base text-donkergroen'>Organisatie verbetering</p>
          <h1 className="text-paars max-md:text-xl">Directie advies</h1>
          <p className="font-aktiv-grotesk-extended text-xl max-md:text-lg text-paars">Succesvolle groei en duurzame winstgevendheid beginnen bij een solide interne basis. Bij Vosteq bieden we directieadvies dat zich richt op het versterken van jouw organisatie van binnenuit, zodat je beter voorbereid bent om externe uitdagingen aan te gaan en kansen te benutten. Hierbij nemen we jouw organisatie en haar onderscheidende krachten als uitgangspunt.</p>
          <h2 className='pt-8 text-paars'>Diepgaande analyse</h2>
          <p className='text-diepgrijs'>Onze 'inside-out benadering' begint met een diepgaande analyse van de interne processen, de bedrijfscultuur en de middelen in jouw organisatie. In plaats van veel nadruk te leggen op externe trends en bedreigingen, richten we ons eerst op wat jouw bedrijf uniek maakt en hoe je deze interne krachten kunt versterken om zo een concurrentievoordeel te creëren.</p>
        </div>
        <div className="md:w-1/2 container relative">
          <Image className='object-cover' src="/images/deskundigen.svg" alt='Deskundigen' width={650} height={550} />
          <div className="w-40 bg-geel p-6 flex flex-col gap-2 text-paars absolute right-0 top-1/4 group hover:bg-groen hover:text-wit transition-all duration-200 max-md:hidden">
            <p className="font-aktiv-grotesk-extended text-lg leading-5 font-bold">{m.patchy_plane_lark_breathe()}</p>
            <Separator className="bg-paars group-hover:bg-wit transition-all duration-200"/>
            <Link href='/' className="font-aktiv-grotesk flex flex-row items-center">
            <p className="w-2/3">{m.knotty_gross_elk_aid()}</p>
            <Icon icon='mdi:chevron-right' className='fly text-wit w-1/3 h-full hidden group-hover:inline'/>
            </Link>
          </div>
        </div>
      </div>
      <div className='container flex flex-row py-16'>
        <div className='w-1/2 flex flex-col gap-8 justify-center'>
          <h2 className='text-paars'>Hoe gaan we te werk?</h2>
          <Image className='object-cover py-4 max-md:hidden' src="/images/systeem.svg" alt='Het systeem van Vosteq' height={80} width={370} />
        </div>
        <Accordion type='single' collapsible className='w-1/2'>
          <AccordionItem value='stap1'>
            <AccordionTrigger className='text-paars text-lg'><div className='flex'><p className='pr-2 font-bold'>Stap 1.</p>Inzicht krijgen in je bedrijf</div></AccordionTrigger>
            <AccordionContent className='text-base'>
              Wat is de huidige staat van jouw organisatie? Om een duidelijk antwoord op deze vraag te krijgen, organiseren we koffiegesprekken en analyseren we de bedrijfsprocessen en -technologieën, de organisatiestructuur, de leiderschapscapaciteiten en de werknemersbetrokkenheid.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='stap2'>
            <AccordionTrigger className='text-paars text-lg'><div className='flex'><p className='pr-2 font-bold'>Stap 2.</p>Identificeren van kernkwaliteiten</div></AccordionTrigger>
            <AccordionContent className='text-base'>
              We helpen je bij het identificeren van de unieke kwaliteiten en sterke punten binnen jouw organisatie, zoals bijvoorbeeld de innovatieve productieprocessen, het sterke team of de diepgaande technische expertise. Of een combinatie daarvan.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='stap3'>
            <AccordionTrigger className='text-paars text-lg'><div className='flex'><p className='pr-2 font-bold'>Stap 3.</p>Strategische versterking</div></AccordionTrigger>
            <AccordionContent className='text-base'>
              Op basis van onze inzichten ontwikkelen we strategieën om de kernkwaliteiten verder te versterken. Dit kan variëren van procesoptimalisatie, automatisering, digitalisering en/of organisatieontwikkeling tot het verbeteren van de bedrijfscultuur en het innovatievermogen.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='stap4'>
            <AccordionTrigger className='text-paars text-lg'><div className='flex'><p className='pr-2 font-bold'>Stap 4.</p>Implementatie en begeleiding</div></AccordionTrigger>
            <AccordionContent className='text-base'>
              We begeleiden je bij de implementatie van deze strategieën en zorgen ervoor dat ze in de dagelijkse operaties van je bedrijf worden geïntegreerd.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className='container'>
        <div className="container flex flex-col items-center py-16">
          <h2 className="text-paars max-md:text-xl text-left md:text-center w-full">Wat levert het op?</h2>
          <p className='text-donkergroen pt-4 font-aktiv-grotesk-extended'>Dankzij onze inside-out benadering realiseren we:</p>
          <div className="flex flex-row gap-16 py-12 max-md:hidden md:px-16 md:pb-16">
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
      <div className='bg-[#F1F9F9]'>
        <div className='flex container flex-row gap-32 items-center'>
          <div className='w-1/2'>
            <h2 className='text-paars'>Waarom kiezen voor Vosteq?</h2>
            <p className='text-diepgrijs font-aptos pt-4'>Vosteq geeft al meer dan 25 jaar advies aan MKB-maakbedrijven. Wij begrijpen dat elke organisatie uniek is en daarom ontwikkelen we maatwerkstrategieën die aansluiten bij de specifieke behoeften en doelen van jouw organisatie. Lees hier meer over in <Link className='text-donkergroen underline hover:text-paars' href={'/'}>onze cases</Link> of <Link className='text-donkergroen underline hover:text-paars' href={'/contact'}>nodig ons uit</Link> voor een kopje koffie.</p>
          </div>
          <div className='w-1/2 p-24 h-full bg-gradient-to-br from-paars to-groen from-30%'>
            <p className='pb-4 text-wit font-aktiv-grotesk-extended'>Wil je succesvolle groei en duurzame winstgevendheid voor jouw organisatie realiseren? Neem dan vandaag nog contact met ons op en ontdek hoe ons directieadvies jouw organisatie van binnenuit versterkt. </p>
            <button className='btn-solid'><Link href='/contact'>Contact</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Diensten };