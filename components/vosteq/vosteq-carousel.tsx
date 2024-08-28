'use client';
import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Icon } from "@iconify/react";
import Image from "next/image";

const VosteqCarousel = () => {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="container bg-[#F1F9F9] pt-8 md:pb-32 pb-8">
      <div className="flex flex-row justify-between px-16 items-center pb-8 max-md:hidden">
        <h2 className="text-paars">Vosteq en in de praktijk</h2>
        <div className="flex flex-row gap-8">
          <p className="text-5xl text-paars font-extralight font-aktiv-grotesk-extended">{current}/{count}</p>
          <div className="flex flex-row items-center gap-2">
            <button onClick={() => api?.scrollPrev()} className="transition-all duration-200 outline-paars outline-1 outline h-10 w-10 flex items-center justify-center text-paars hover:outline-groen hover:text-wit hover:bg-groen"><Icon icon="mdi:chevron-left" height={32}/></button>
            <button onClick={() => api?.scrollNext()} className="transition-all duration-200 outline-paars outline-1 outline h-10 w-10 flex items-center justify-center text-wit bg-paars hover:outline-groen hover:text-wit hover:bg-groen"><Icon icon="mdi:chevron-right" height={32}/></button>
          </div>
        </div>
      </div>
      <Carousel className="w-full" setApi={setApi}>
        <CarouselContent>
          <CarouselItem key={1} className="w-full flex flex-col md:flex-row">
            <div className="flex md:w-1/2 w-full">
              <Image className='object-cover' src="/images/2018-Vosteq-hapert.webp" alt='Vosteq bij Hapert' width={650} height={550} />
            </div>
            <div className="flex flex-col md:w-1/2 md:p-16 bg-wit p-4">
              <p className="text-paars font-aktiv-grotesk-extended text-base pb-4">Project Management</p>
              <p className="text-paars font-aktiv-grotesk-extended text-2xl pb-8 font-semibold">“Met enorme betrokkenheid steunt Vosteq ons bij het structureren van de processen en de organisatie. Samen bereiden wij ons voor op verdere groei van Hapert”</p>
              <div>
                <button className='btn-outline font-semibold'>Bekijk case</button>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem key={2} className="w-full flex flex-col md:flex-row">
            <div className="flex md:w-1/2 w-full">
              <Image className='object-cover' src="/images/2018-Vosteq-hapert.webp" alt='Vosteq bij Hapert' width={650} height={550} />
            </div>
            <div className="flex flex-col md:w-1/2 md:p-16 bg-wit p-4">
              <p className="text-paars font-aktiv-grotesk-extended text-base pb-4">Project Management</p>
              <p className="text-paars font-aktiv-grotesk-extended text-2xl pb-8 font-semibold">“Met enorme betrokkenheid steunt Vosteq ons bij het structureren van de processen en de organisatie. Samen bereiden wij ons voor op verdere groei van Hapert”</p>
              <div>
                <button className='btn-outline font-semibold'>Bekijk case</button>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <div className="flex flex-row justify-between w-full md:hidden pt-8">
        <p className="text-5xl text-paars font-extralight font-aktiv-grotesk-extended">{current}/{count}</p>
        <div className="flex flex-row items-center gap-2">
          <button onClick={() => api?.scrollPrev()} className="transition-all duration-200 outline-paars outline-1 outline h-10 w-10 flex items-center justify-center text-paars hover:outline-groen hover:text-wit hover:bg-groen"><Icon icon="mdi:chevron-left" height={32}/></button>
          <button onClick={() => api?.scrollNext()} className="transition-all duration-200 outline-paars outline-1 outline h-10 w-10 flex items-center justify-center text-wit bg-paars hover:outline-groen hover:text-wit hover:bg-groen"><Icon icon="mdi:chevron-right" height={32}/></button>
        </div>
      </div>
    </div>
  );
};

export { VosteqCarousel };