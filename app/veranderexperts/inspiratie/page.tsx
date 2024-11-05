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
  title: "Vosteq | Inspiratie",
  description: "Aan het bouwen!",
};

export default function Inspiratie() {
  
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
      icon: 'mdi:account-heart',
      title: 'Betrokkenheid en motivatie',
      description: 'binnen je team, wat leidt tot hogere productiviteit en betere resultaten.'
    },
    {
      icon: 'mdi:leaf',
      title: 'Duurzame verandering',
      description: 'omdat oplossingen worden ontworpen met aandacht voor de mensen die ermee werken.'
    },
    {
      icon: 'mdi:handshake',
      title: 'Positieve werkomgeving',
      description: 'waarin respect en waardering de basis vormen voor succes.'
    }
  ];

  return (
    <div className='flex flex-col'>
      <Popup />
      <div className="container flex flex-col md:flex-row gap-16 md:gap-32 md:py-16 py-4">
        <div className="md:w-1/2 flex flex-col gap-4">
            <h1 className="text-paars">Inspiratie</h1>
            <p className="font-aktiv-grotesk-extended text-paars">Bij Vosteq geloven we dat mensen het hart vormen van elk succesvol bedrijf. Of het nu gaat om onze eigen medewerkers, jouw team, of de klanten  die we bedienen; de mensen staan altijd centraal in alles wat we doen. We zijn ervan overtuigd dat wanneer mensen goed ondersteund, gewaardeerd en betrokken worden, ze hun volledige potentieel kunnen benutten. En dat leidt tot duurzame groei en innovatie.</p>
            <h2 className='pt-8 text-paars max-md:text-2xl'>De mens centraal</h2>
            <p className="">Bij Vosteq staat de kernwaarde "De mens centraal" voor:</p>
            <div className="flex text-paars font-aptos text-base">
                <ol className="inline">
                    <li className="inline-block py-1 max-md:pr-2"><b>1.	Respect en waardering:</b> we benaderen elke samenwerking met respect en waardering voor de unieke talenten en ervaringen die mensen meebrengen. Dit geldt zowel voor onze eigen medewerkers als voor de teams van onze klanten. We geloven dat elk individu waarde toevoegt en een cruciale rol speelt in het succes van onze  projecten.</li>
                    <Separator />
                    <li className="inline-block py-1 max-md:pr-2"><b>2.	Ontwikkeling en groei:</b> we investeren in de ontwikkeling van onze mensen. Door training, coaching en voortdurende ondersteuning zorgen we ervoor dat iedereen de kans krijgt om te groeien en zijn of haar vaardigheden te verbeteren. Dit geldt ook voor de teams van onze klanten; wij helpen hen om te leren </li>
                    <Separator />
                    <li className="inline-block py-1 max-md:pr-2"><b>3.	Betrokkenheid en samenwerking:</b> we betrekken mensen actief bij het veranderingsproces. We luisteren naar hun ideeën, zorgen dat hun stem wordt gehoord en moedigen hen aan om bij te dragen aan de oplossingen die we implementeren. Dit zorgt voor een gevoel van eigenaarschap en betrokkenheid, wat essentieel is voor succesvolle veranderingen.</li>
                </ol>
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
              <AccordionTrigger className='text-wit text-sm md:text-lg hover:text-geel'><div className='flex'><p className='pr-2 font-bold'>Stap 1.</p>Persoonlijke benadering</div></AccordionTrigger>
              <AccordionContent className='md:text-base text-wit my-4'>
                Bij elk project nemen we de tijd om de mensen achter de processen te leren kennen. We zorgen ervoor dat we achterhalen wat hen motiveert, waar hun kracht ligt en hoe we hen het beste kunnen ondersteunen.
              </AccordionContent>
            </AccordionItem>
            <Separator className='bg-wit' />
            <AccordionItem value='stap2' className='my-2'>
              <AccordionTrigger className='text-wit text-sm md:text-lg hover:text-geel'><div className='flex'><p className='pr-2 font-bold'>Stap 2.</p>Empathie en begrip</div></AccordionTrigger>
              <AccordionContent className='md:text-base text-wit my-4'>
                We werken vanuit empathie en begrip voor de uitdagingen waarmee mensen worden geconfronteerd. Of het nu gaat om het omgaan met veranderingen of het ontwikkelen van nieuwe vaardigheden, we staan klaar om steun te bieden op manieren die aansluiten bij hun behoeften.
              </AccordionContent>
            </AccordionItem>
            <Separator className='bg-wit' />
            <AccordionItem value='stap3' className='my-2'>
              <AccordionTrigger className='text-wit text-sm md:text-lg hover:text-geel'><div className='flex'><p className='pr-2 font-bold'>Stap 3.</p>Duurzame oplossingen</div></AccordionTrigger>
              <AccordionContent className='md:text-base text-wit my-4'>
                Omdat mensen centraal staan in onze aanpak, ontwikkelen we oplossingen die rekening houden met de menselijke factor. Dit betekent dat onze veranderingen niet alleen technisch, maar ook praktisch en bruikbaar zijn, zodat ze echt werken in de dagelijkse praktijk.
              </AccordionContent>
              </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className='md:container'>
        <div className="container flex flex-col items-center md:py-16 max-md:pb-16">
          <h2 className="text-paars max-md:text-xl text-left md:text-center w-full">Wat levert het op?</h2>
          <p className='text-donkergroen pt-4 font-aktiv-grotesk-extended'>Door de mensen centraal te stellen:</p>
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