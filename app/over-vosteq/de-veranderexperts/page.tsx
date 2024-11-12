'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import Image from "next/image";
import Harry from "@/public/images/experts/Harry.webp";
import Ronald from "@/public/images/experts/Ronald_de_Witte.webp";
import Maarten from "@/public/images/experts/Maarten_Woertman.webp";
import Marijke from "@/public/images/experts/Marijke_Oosterveld.webp";
import Stijn from "@/public/images/experts/Stijn_Nijhuis.webp";
import Bob from "@/public/images/experts/Bob_Selker.webp";
import Joyce from "@/public/images/experts/Joyce_Kloosterman.webp";
import { useState } from "react";
import { Icon } from "@iconify/react";
import DecoRight from "@/components/vosteq/deco-right";

export default function DeVeranderexperts() {
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
        <div className="container">
          <div className="container flex flex-col md:flex-row gap-16 md:gap-32 md:py-16 py-4">
            <div className="md:w-1/2 flex flex-col gap-4">
              <h1 className="text-paars">De veranderexperts</h1>
              <p className="font-aktiv-grotesk-extended text-paars">Bij Vosteq werken we met een team van ervaren verander-experts die gespecialiseerd zijn in diverse aspecten van Smart Manufacturing. Onze experts brengen niet alleen hun kennis en ervaring mee, maar ook een frisse blik en innovatieve ideeën. We zijn er trots op dat we niet alleen adviseren, maar ook actief bijdragen aan de implementatie van oplossingen die werken. <br />Of het nu gaat om procesoptimalisatie, automatisering of het verkorten van doorlooptijden, onze verander-experts weten hoe ze complexe uitdagingen moeten aanpakken en omzetten in duurzame verbeteringen.</p>
            </div>
            <div className="md:w-1/2 md:container relative pb-16">
              <DecoRight imageSrc="/images/Vosteq-Hapert-2018-1.webp"/>
            </div>
          </div>
          <h2 className="md:pb-16 pb-8 text-paars">Ons team van specialisten</h2>
          <div className="grid md:grid-cols-4 grid-cols-1 gap-8 max-md:hidden">
            {carouselItems.map((item, idx) => (
                <div key={idx} className="basis-2/3 md:basis-1/4 flex flex-col relative">
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
                </div>
            ))}
          </div>
          <Carousel className="w-full md:hidden" setApi={setApi}>
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