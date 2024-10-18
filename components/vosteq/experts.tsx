'use client'

import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Icon } from "@iconify/react";
import Image from "next/image";
import Harry from "@/public/images/experts/Harry.webp";
import Ronald from "@/public/images/experts/Ronald_de_Witte.webp";
import Maarten from "@/public/images/experts/Maarten_Woertman.webp";
import Marijke from "@/public/images/experts/Marijke_Oosterveld.webp";
import Stijn from "@/public/images/experts/Stijn_Nijhuis.webp";
import Bob from "@/public/images/experts/Bob_Selker.webp";
import Joyce from "@/public/images/experts/Joyce_Kloosterman.webp";


const Experts = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [visibleOverlays, setVisibleOverlays] = useState<{ [key: number]: boolean }>({});

  const carouselItems = [
    {
      key: 1,
      name: "Harry",
      role: "Directeur Vosteq",
      description: "Directeur Vosteq, werktuigbouwkundige, met passie voor het innoveren en automatiseren van processen Betrokken en gericht op het samen ontdekken en implementeren van resultaat.",
      imageSrc: Harry
    },
    {
      key: 2,
      name: "Ronald",
      role: "Directeur Vosteq",
      description: "Directeur Vosteq, werktuigbouwkundige, met passie voor het innoveren en automatiseren van processen Betrokken en gericht op het samen ontdekken en implementeren van resultaat.",
      imageSrc: Ronald
    },
    {
      key: 3,
      name: "Maarten",
      role: "Directeur Vosteq",
      description: "Directeur Vosteq, werktuigbouwkundige, met passie voor het innoveren en automatiseren van processen Betrokken en gericht op het samen ontdekken en implementeren van resultaat.",
      imageSrc: Maarten
    },
    {
      key: 4,
      name: "Marijke",
      role: "Directeur Vosteq",
      description: "Directeur Vosteq, werktuigbouwkundige, met passie voor het innoveren en automatiseren van processen Betrokken en gericht op het samen ontdekken en implementeren van resultaat.",
      imageSrc: Marijke
    },
    {
      key: 5,
      name: "Stijn",
      role: "Directeur Vosteq",
      description: "Directeur Vosteq, werktuigbouwkundige, met passie voor het innoveren en automatiseren van processen Betrokken en gericht op het samen ontdekken en implementeren van resultaat.",
      imageSrc: Stijn
    },
    {
      key: 6,
      name: "Bob",
      role: "Directeur Vosteq",
      description: "Directeur Vosteq, werktuigbouwkundige, met passie voor het innoveren en automatiseren van processen Betrokken en gericht op het samen ontdekken en implementeren van resultaat.",
      imageSrc: Bob
    },
    {
      key: 7,
      name: "Joyce",
      role: "Directeur Vosteq",
      description: "Directeur Vosteq, werktuigbouwkundige, met passie voor het innoveren en automatiseren van processen Betrokken en gericht op het samen ontdekken en implementeren van resultaat.",
      imageSrc: Joyce
    }
  ]

  const toggleOverlay = (key: number) => {
    setVisibleOverlays((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="container mb-16">
      <div className="flex flex-row justify-between md:px-16 items-center pb-8">
        <h2 className="text-paars max-md:text-xl">De veranderexperts</h2>
        <div className="flex flex-row gap-8">
          <div className="flex flex-row items-center gap-2 max-md:hidden">
            <button onClick={() => api?.scrollPrev()} className="transition-all duration-200 outline-paars outline-1 outline h-10 w-10 flex items-center justify-center text-paars hover:outline-groen hover:text-wit hover:bg-groen"><Icon icon="mdi:chevron-left" height={32}/></button>
            <button onClick={() => api?.scrollNext()} className="transition-all duration-200 outline-paars outline-1 outline h-10 w-10 flex items-center justify-center text-wit bg-paars hover:outline-groen hover:text-wit hover:bg-groen"><Icon icon="mdi:chevron-right" height={32}/></button>
          </div>
        </div>
      </div>
      <Carousel className="w-full" setApi={setApi}>
        <CarouselContent>
          {carouselItems.map((item) => (
            <CarouselItem key={item.key} className="basis-2/3 md:basis-1/4 flex flex-col relative">
            <div className="relative group">
              <div className="relative overflow-hidden">
                <Image className="w-full h-full" src={item.imageSrc} alt={item.name} />
            
                {/* Overlay */}
                <div
                  className={`w-full h-full absolute top-0 left-0 flex flex-col justify-start md:justify-end transition-all opacity-80 duration-300 bg-gradient-to-tl from-paars to-groen from-10% md:opacity-0 md:group-hover:opacity-80 ${
                    visibleOverlays[item.key] ? 'max-md:translate-y-0' : 'max-md:translate-y-85/100'
                  }`}
                >
                  <p className={`${visibleOverlays[item.key] ? 'max-md:text-opacity-100' : 'max-md:text-opacity-0'} transition-all duration-300 text-wit text-base font-aktiv-grotesk-extended w-full p-4`}>{item.description}</p>
                </div>
            
                {/* Button to toggle overlay on mobile */}
                <div className="w-full h-12 absolute bottom-0 flex flex-row justify-between items-center p-2 md:hidden">
                  <p className={`text-white font-aptos transition-all duration-300" pl-2 ${visibleOverlays[item.key] ? 'opacity-0' : 'opacity-100'}`}>{item.role}</p>
                  <button
                    className="text-wit md:hidden"
                    onClick={() => toggleOverlay(item.key)}
                  >
                    <Icon
                      icon='mdi:chevron-up'
                      width={32}
                      height={32}
                      className={`transition-transform duration-300 ${visibleOverlays[item.key] ? '-rotate-180' : 'rotate-0'}`}
                    />
                  </button>
                </div>
              </div>
            </div>
            <p className="px-4 py-2 text-donkerpaars font-aktiv-grotesk-extended font-semibold">{item.name}</p>
          </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export { Experts };