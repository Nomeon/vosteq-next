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
  const StepCard: FC<StepCardProps> = ({ icon, title, subtitle, description, href }) => (
    <div className="max-lg:h-full w-56 outline outline-1 outline-groen px-4 flex flex-col flex-1 group hover:bg-groen transition-all duration-200">
      <div className="flex items-center justify-center h-32">
        <Icon className='text-groen group-hover:text-paars transition-all duration-200' icon={icon} width={60} height={60} />
      </div>
      <h4 className="text-paars text-xl">{title}</h4>
      <Separator className="bg-paars my-2" />
      <p className="text-donkergroen font-aktiv-grotesk-extended font-semibold mb-4 group-hover:text-wit transition-all duration-200">{subtitle}</p>
      <p className="text-diepgrijs font-aktiv-grotesk-extended group-hover:text-wit transition-all duration-200 grow pb-8">{description}</p>      
    </div>
  );

  const steps = [
    {
      icon: 'mdi:magnify',
      title: 'Optimaliseren',
      subtitle: 'Continue verbeteren',
      description: 'Wij analyseren, stroomlijnen en verbeteren processen voor duurzame groei en succes.',
      href: '/diensten/directieadvies'
    },
    {
      icon: 'mdi:lightbulb-on',
      title: 'Innoveren',
      subtitle: 'Doorbraak',
      description: 'Innovatie versnelt groei; wij begeleiden bedrijven naar een smart manufacturing toekomst.',
      href: '/diensten/innovatie-en-verandertrajecten'
    },
    {
      icon: 'mdi:hammer-wrench',
      title: 'Implementeren',
      subtitle: 'Omzetten',
      description: 'Effectieve implementatie innovaties met hands-on begeleiding voor succesvolle veranderingen.',
      href: '/onze-aanpak/inzicht'
    },
    {
      icon: 'mdi:account-group',
      title: 'Herstructureren',
      subtitle: 'Basis op orde',
      description: 'Met een sterk fundament ondersteunen wij jouw bedrijf naar een succesvolle toekomst.',
      href: '/diensten/expertise-on-demand'
    }
  ];

  return (
    <div className="container flex flex-col items-center py-16">
    <h2 className="text-paars max-lg:text-xl text-left lg:text-center w-full">Verbeteren op 4 fronten</h2>
    <div className="flex flex-row gap-4 py-12 max-lg:hidden lg:px-16 lg:pb-16">
      {steps.map((step, index) => (
        <StepCard key={index} icon={step.icon} title={step.title} subtitle={step.subtitle} description={step.description} href={step.href} />
      ))}
    </div>
    {/* Mobile Carousel */}
    <div className="w-full pt-4 lg:hidden">
      <Carousel className="py-4">
        <CarouselContent>
          {steps.map((step, index) => (
            <CarouselItem key={index} className="basis-2/3 flex items-center">
              <div className="w-full h-full p-1">
                <StepCard icon={step.icon} title={step.title} subtitle={step.subtitle} description={step.description} href={step.href}/>
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