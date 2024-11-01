'use client'

import { Icon } from "@iconify/react";
import { Separator } from "@/components/ui/separator";
import { Link } from "@/lib/i18n";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"
import { FC } from "react";
import { StepCardProps } from "@/lib/definitions";


const Verbeteren = () => {
  const StepCard: FC<StepCardProps> = ({ icon, title, subtitle, description }) => (
    <Link href='/' className="h-96 w-56 outline outline-1 outline-groen px-4 flex flex-col flex-1 group hover:bg-groen transition-all duration-200">
      <div className="flex items-center justify-center h-32">
        <Icon className='text-groen group-hover:text-paars transition-all duration-200' icon={icon} width={60} height={60} />
      </div>
      <h4 className="text-paars text-xl">{title}</h4>
      <Separator className="bg-paars my-2" />
      <p className="text-donkergroen font-aktiv-grotesk-extended font-semibold mb-4 group-hover:text-wit transition-all duration-200">{subtitle}</p>
      <p className="text-diepgrijs font-aktiv-grotesk-extended group-hover:text-wit transition-all duration-200">{description}</p>
      <div className='mt-auto pb-4'>
        <p className="font-aktiv-grotesk-extended text-base text-paars group-hover:text-wit transition-all duration-200">Meer {">"}</p>
      </div>
    </Link>
  );

  const steps = [
    {
      icon: 'mdi:magnify',
      title: 'Optimaliseren',
      subtitle: 'Continue verbeteren',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      icon: 'mdi:lightbulb-on',
      title: 'Innoveren',
      subtitle: 'Doorbraak',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      icon: 'mdi:hammer-wrench',
      title: 'Implementeren',
      subtitle: 'Omzetten',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      icon: 'mdi:account-group',
      title: 'Herstructureren',
      subtitle: 'Basis op orde',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ];

  return (
    <div className="container flex flex-col items-center py-16">
    <h2 className="text-paars max-md:text-xl text-left md:text-center w-full">Verbeteren in 4 stappen</h2>
    <div className="flex flex-row gap-4 py-12 max-md:hidden md:px-16 md:pb-16">
      {steps.map((step, index) => (
        <StepCard key={index} icon={step.icon} title={step.title} subtitle={step.subtitle} description={step.description} />
      ))}
    </div>
    {/* Mobile Carousel */}
    <div className="w-full pt-4 md:hidden">
      <Carousel className="py-4">
        <CarouselContent>
          {steps.map((step, index) => (
            <CarouselItem key={index} className="basis-2/3 flex items-center">
              <div className="w-full h-full p-1">
                <StepCard icon={step.icon} title={step.title} subtitle={step.subtitle} description={step.description} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  </div>
  )
}

export { Verbeteren };