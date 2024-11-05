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
  title: "Vosteq | Interim Experts",
  description: "Aan het bouwen!",
};

export default function InterimExperts() {
  
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
      icon: 'mdi:lightbulb-on',
      title: 'Toegang tot vakkennis',
      description: 'precies wanneer je die nodig hebt, zonder de verplichting van een fulltime-aanstelling.'
    },
    {
      icon: 'mdi:chart-line',
      title: 'Vergrootte kans op succes',
      description: 'bij innovaties door gebruik te maken van de expertise van ervaren professionals.'
    },
    {
      icon: 'mdi:account-supervisor',
      title: 'Tijdelijke versterking',
      description: 'met experts die gefocust zijn op het behalen van resultaten en het delen van hun kennis.'
    }
  ];

  return (
    <div className='flex flex-col'>
      <Popup />
      <div className="container flex flex-col md:flex-row gap-16 md:gap-32 md:py-16 py-4">
        <div className="md:w-1/2 flex flex-col gap-4">
          <p className='font-aktiv-grotesk-extended text-base text-donkergroen'>Organisatie verbetering</p>
          <h1 className="text-paars">Interim experts</h1>
          <p className="font-aktiv-grotesk-extended text-paars">Als MKB-maakbedrijf heb je niet altijd alle specifieke vakkennis in huis die nodig is om innovaties succesvol door te voeren. Vosteq heeft interim-experts in huis die jouw organisatie tijdelijk versterken met de expertise die je nodig hebt om vooruit te komen. Of het nu om technologische innovatie, procesoptimalisatie of het ontwikkelen van nieuwe producten gaat; onze interim-experts staan voor je klaar.</p>
          <h2 className='pt-8 text-paars max-md:text-2xl'>Inbreng van specifieke vakkennis</h2>
          <p className='text-diepgrijs'>Onze interim-experts zijn hoogopgeleide specialisten met jarenlange ervaring in de maakindustrie. Ze brengen de specifieke vakkennis mee die jouw bedrijf nodig heeft om complexe innovaties en projecten tot een succes te maken. Deze experts worden tijdelijk aan je team toegevoegd, zodat je kunt profiteren van hun kennis zónder de noodzaak van een langdurige aanstelling.</p>
        </div>
        <div className="md:w-1/2 container relative pb-16">
          <Image className='object-cover' src="/images/deskundigen2.webp" alt='Deskundigen' width={650} height={550} />
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
              <AccordionTrigger className='text-wit text-sm md:text-lg hover:text-geel'><div className='flex'><p className='pr-2 font-bold'>Stap 1.</p>Behoefteanalyse</div></AccordionTrigger>
              <AccordionContent className='md:text-base text-wit my-4'>
                We beginnen met het identificeren van de specifieke kennis en vaardigheden die je nodig hebt voor jouw innovatieproject. Dit kan variëren van technische expertise tot strategisch inzicht.
              </AccordionContent>
            </AccordionItem>
            <Separator className='bg-wit' />
            <AccordionItem value='stap2' className='my-2'>
              <AccordionTrigger className='text-wit text-sm md:text-lg hover:text-geel'><div className='flex'><p className='pr-2 font-bold'>Stap 2.</p>Matchen met de juiste expert(s)</div></AccordionTrigger>
              <AccordionContent className='md:text-base text-wit my-4'>
                We selecteren de juiste interim-expert(s) die naadloos aansluit(en) bij jouw projectbehoeften. Onze specialisten brengen niet alleen hun expertise mee, maar ook de ervaring om direct impact te maken.
              </AccordionContent>
            </AccordionItem>
            <Separator className='bg-wit' />
            <AccordionItem value='stap3' className='my-2'>
              <AccordionTrigger className='text-wit text-sm md:text-lg hover:text-geel'><div className='flex'><p className='pr-2 font-bold'>Stap 3.</p>Directe inzet</div></AccordionTrigger>
              <AccordionContent className='md:text-base text-wit my-4'>
                Onze interim-experts worden snel en efficiënt in jouw organisatie geïntegreerd. Ze werken nauw samen met je team om ervoor te zorgen dat de innovatie succesvol wordt geïmplementeerd.
              </AccordionContent>
              <Separator className='bg-wit' />
              </AccordionItem>
            <AccordionItem value='stap4' className='my-2'>
              <AccordionTrigger className='text-wit text-sm md:text-lg hover:text-geel'><div className='flex'><p className='pr-2 font-bold'>Stap 4.</p>Kennisoverdracht</div></AccordionTrigger>
              <AccordionContent className='md:text-base text-wit my-4'>
                Naast het bijdragen aan de innovatie, zorgen onze interim-experts ervoor dat hun kennis en vaardigheden worden overgedragen aan jouw interne team. Zo blijft de toegevoegde waarde behouden, ook nadat het project is afgerond.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className='md:container'>
        <div className="container flex flex-col items-center md:py-16 max-md:pb-16">
          <h2 className="text-paars max-md:text-xl text-left md:text-center w-full">Wat levert het op?</h2>
          <p className='text-donkergroen pt-4 font-aktiv-grotesk-extended'>Met de inzet van onze interim-experts:</p>
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