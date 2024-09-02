'use client'

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

const Experts = () => {

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
    <div className="container mb-16">
      <div className="flex flex-row justify-between md:px-16 items-center pb-8">
        <h2 className="text-paars max-md:text-xl">De veranderexperts</h2>
        <div className="flex flex-row gap-8">
          <div className="flex flex-row items-center gap-2">
            <button onClick={() => api?.scrollPrev()} className="transition-all duration-200 outline-paars outline-1 outline h-10 w-10 flex items-center justify-center text-paars hover:outline-groen hover:text-wit hover:bg-groen"><Icon icon="mdi:chevron-left" height={32}/></button>
            <button onClick={() => api?.scrollNext()} className="transition-all duration-200 outline-paars outline-1 outline h-10 w-10 flex items-center justify-center text-wit bg-paars hover:outline-groen hover:text-wit hover:bg-groen"><Icon icon="mdi:chevron-right" height={32}/></button>
          </div>
        </div>
      </div>
      <Carousel className="w-full" setApi={setApi}>
        <CarouselContent>
          <CarouselItem key={1} className="md:basis-1/4 flex flex-col">
            <div className="relative">
              <Image className="w-full h-full" src="/images/expert.png" alt="Expert" width={300} height={600} />
              <div className="w-full h-full absolute flex flex-col justify-end top-0 left-0 opacity-0 hover:opacity-80 bg-gradient-to-tl from-paars to-groen from-10% transition-all duration-200">
                <p className="text-wit text-base font-aktiv-grotesk-extended w-full p-6">Directeur Vosteq, werktuigbouwkundige, met passie voor het innoveren en automatiseren van processen Betrokken en gericht op het samen ontdekken en implementeren van resultaat.</p>
              </div>
            </div>
            <p className="px-4 py-2 text-donkerpaars font-aktiv-grotesk-extended font-semibold">Harry</p>
          </CarouselItem>
          <CarouselItem key={2} className="md:basis-1/4 flex flex-col">
            <div className="relative">
              <Image className="w-full h-full" src="/images/expert.png" alt="Expert" width={300} height={600} />
              <div className="w-full h-full absolute flex flex-col justify-end top-0 left-0 opacity-0 hover:opacity-80 bg-gradient-to-tl from-paars to-groen from-10% transition-all duration-200">
                <p className="text-wit text-base font-aktiv-grotesk-extended w-full p-6">Directeur Vosteq, werktuigbouwkundige, met passie voor het innoveren en automatiseren van processen Betrokken en gericht op het samen ontdekken en implementeren van resultaat.</p>
              </div>
            </div>
            <p className="px-4 py-2 text-donkerpaars font-aktiv-grotesk-extended font-semibold">Willem</p>
          </CarouselItem>
          <CarouselItem key={3} className="md:basis-1/4 flex flex-col">
            <div className="relative">
              <Image className="w-full h-full" src="/images/expert.png" alt="Expert" width={300} height={600} />
              <div className="w-full h-full absolute flex flex-col justify-end top-0 left-0 opacity-0 hover:opacity-80 bg-gradient-to-tl from-paars to-groen from-10% transition-all duration-200">
                <p className="text-wit text-base font-aktiv-grotesk-extended w-full p-6">Directeur Vosteq, werktuigbouwkundige, met passie voor het innoveren en automatiseren van processen Betrokken en gericht op het samen ontdekken en implementeren van resultaat.</p>
              </div>
            </div>
            <p className="px-4 py-2 text-donkerpaars font-aktiv-grotesk-extended font-semibold">Maarten</p>
          </CarouselItem>
          <CarouselItem key={4} className="md:basis-1/4 flex flex-col">
            <div className="relative">
              <Image className="w-full h-full" src="/images/expert.png" alt="Expert" width={300} height={600} />
              <div className="w-full h-full absolute flex flex-col justify-end top-0 left-0 opacity-0 hover:opacity-80 bg-gradient-to-tl from-paars to-groen from-10% transition-all duration-200">
                <p className="text-wit text-base font-aktiv-grotesk-extended w-full p-6">Directeur Vosteq, werktuigbouwkundige, met passie voor het innoveren en automatiseren van processen Betrokken en gericht op het samen ontdekken en implementeren van resultaat.</p>
              </div>
            </div>
            <p className="px-4 py-2 text-donkerpaars font-aktiv-grotesk-extended font-semibold">Marijke</p>
          </CarouselItem>
          <CarouselItem key={5} className="md:basis-1/4 flex flex-col">
            <div className="relative">
              <Image className="w-full h-full" src="/images/expert.png" alt="Expert" width={300} height={600} />
              <div className="w-full h-full absolute flex flex-col justify-end top-0 left-0 opacity-0 hover:opacity-80 bg-gradient-to-tl from-paars to-groen from-10% transition-all duration-200">
                <p className="text-wit text-base font-aktiv-grotesk-extended w-full p-6">Directeur Vosteq, werktuigbouwkundige, met passie voor het innoveren en automatiseren van processen Betrokken en gericht op het samen ontdekken en implementeren van resultaat.</p>
              </div>
            </div>
            <p className="px-4 py-2 text-donkerpaars font-aktiv-grotesk-extended font-semibold">Stijn</p>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export { Experts };