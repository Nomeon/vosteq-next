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
      title: 'Soepel lopende innovaties',
      description: 'en veranderingen, zonder dat de dagelijkse operaties worden verstoord.'
    },
    {
      icon: 'mdi:account-group',
      title: 'Een gefocust team',
      description: 'terwijl wij de extra last van projectwerkzaamheden op ons nemen.'
    },
    {
      icon: 'mdi:shield-check',
      title: 'Duurzame resultaten',
      description: 'aangezien wij niet vertrekken voordat de innovatie effectief werkt binnen jouw organisatie.'
    }
  ];

  return (
    <div className='flex flex-col'>
      <Popup />
      <div className="container flex flex-col md:flex-row gap-16 md:gap-32 md:py-16 py-4">
        <div className="md:w-1/2 flex flex-col gap-4">
          <p className='font-aktiv-grotesk-extended text-base text-donkergroen'>Organisatie verbetering</p>
          <h1 className="text-paars">Projectmanagement</h1>
          <p className="font-aktiv-grotesk-extended text-paars">In de maakindustrie is de balans tussen dagelijkse operaties en innovatie cruciaal. Veranderingen en nieuwe projecten kunnen veel van je team vergen, wat risico’s met zich meebrengt voor de continuïteit van je operationele processen. Bij Vosteq bieden we projectmanagement dat specifiek gericht op is verandering en innovatie. We ondersteunen jouw organisatie bij veranderingen en innovaties zonder de kernactiviteiten te verstoren.</p>
          <h2 className='pt-8 text-paars max-md:text-2xl'>Verlichten van de druk</h2>
          <p className='text-diepgrijs'>In de maakindustrie is de balans tussen dagelijkse operaties en innovatie cruciaal. Veranderingen en nieuwe projecten kunnen veel van je team vergen, wat risico’s met zich meebrengt voor de continuïteit van je operationele processen. Bij Vosteq bieden we projectmanagement dat specifiek gericht op is verandering en innovatie. We ondersteunen jouw organisatie bij veranderingen en innovaties zonder de kernactiviteiten te verstoren.</p>
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
              <AccordionTrigger className='text-wit text-sm md:text-lg hover:text-geel'><div className='flex'><p className='pr-2 font-bold'>Stap 1.</p>Analyse en planning</div></AccordionTrigger>
              <AccordionContent className='md:text-base text-wit my-4'>
                We beginnen met een grondige analyse van het project en de impact die het zal hebben op jouw organisatie. Op basis hiervan ontwikkelen we een gedetailleerd plan van aanpak dat rekening houdt met zowel de verander- en innovatiebehoeften als de continuïteit van de dagelijkse operaties.
              </AccordionContent>
            </AccordionItem>
            <Separator className='bg-wit' />
            <AccordionItem value='stap2' className='my-2'>
              <AccordionTrigger className='text-wit text-sm md:text-lg hover:text-geel'><div className='flex'><p className='pr-2 font-bold'>Stap 2.</p>Aanvullende ondersteuning</div></AccordionTrigger>
              <AccordionContent className='md:text-base text-wit my-4'>
                We bieden de specifieke ondersteuning die jouw team nodig heeft, precies waar en wanneer dat nodig is. Dit kan variëren van het coördineren van projectactiviteiten tot het tijdelijk versterken van je team met gespecialiseerde kennis.
              </AccordionContent>
            </AccordionItem>
            <Separator className='bg-wit' />
            <AccordionItem value='stap3' className='my-2'>
              <AccordionTrigger className='text-wit text-sm md:text-lg hover:text-geel'><div className='flex'><p className='pr-2 font-bold'>Stap 3.</p>Implementatie</div></AccordionTrigger>
              <AccordionContent className='md:text-base text-wit my-4'>
                We zorgen voor een naadloze uitvoering van het project, waarbij we constant met jouw team afstemmen om er zo voor te zorgen dat de innovatie niet alleen wordt ingevoerd, maar ook werkt in de bedrijfscontext.
              </AccordionContent>
              <Separator className='bg-wit' />
              </AccordionItem>
            <AccordionItem value='stap4' className='my-2'>
              <AccordionTrigger className='text-wit text-sm md:text-lg hover:text-geel'><div className='flex'><p className='pr-2 font-bold'>Stap 4.</p>Capaciteitsmanagement</div></AccordionTrigger>
              <AccordionContent className='md:text-base text-wit my-4'>
                Tijdens het hele proces houden we de capaciteit van je operationele processen in de gaten en passen we onze aanpak aan om ervoor te zorgen dat deze  niet in het gedrang komt.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className='md:container'>
        <div className="container flex flex-col items-center md:py-16 max-md:pb-16">
          <h2 className="text-paars max-md:text-xl text-left md:text-center w-full">Wat levert het op?</h2>
          <p className='text-donkergroen pt-4 font-aktiv-grotesk-extended'>Dankzij ons projectmanagement</p>
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