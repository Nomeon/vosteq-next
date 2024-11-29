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
import WatLevertHetOp from "@/components/vosteq/wat-levert-het-op";
import BottomCta from "@/components/vosteq/bottom-cta";
import WerkStappen from "@/components/vosteq/werk-stappen";
import { title } from "process";

export default function DeVeranderexperts() {
    const [api, setApi] = useState<CarouselApi>();
    const [visibleOverlays, setVisibleOverlays] = useState<{ [key: number]: boolean }>({});

    const steps = [
      {
      icon: 'mdi:lightbulb-on',
      title: 'Diepgaande expertise',
      description: 'Onze specialisten hebben uitgebreide ervaring in de maakindustrie en MKB.'
      },
      {
      icon: 'mdi:rocket-launch',
      title: 'Innovatieve aanpak',
      description: 'Wij brengen nieuwe perspectieven en creatieve oplossingen.'
      },
      {
      icon: 'mdi:account-group',
      title: 'Actieve betrokkenheid',
      description: 'Onze experts werken samen met jouw team aan het behalen van meetbare resultaten.'
      },
      {
      icon: 'mdi:leaf',
      title: 'Duurzame resultaten',
      description: 'Wij richten ons op blijvende verbeteringen die jouw bedrijf efficiënter en concurrerender maken.'
      }
    ];
  
    const accordionItems = [
      {
        value: 'stap1',
        stap: 'Procesoptimalisatie',
        title: '',
        description: 'Verhoog de efficiëntie en verminder verspilling in jouw bedrijfsprocessen.'
      },
      {
        value: 'stap2',
        stap: 'Automatisering en digitalisering',
        title: '',
        description: ' Implementeer slimme technologieën die jouw bedrijf toekomstbestendig maken.'
      },
      {
        value: 'stap3',
        stap: 'Verkorting van doorlooptijden',
        title: '',
        description: 'Versnel processen en verbeter leverprestaties.'
      },
      {
        value: 'stap4',
        stap: 'Supply chain en logistiek',
        title: '',
        description: 'Optimaliseer je ketenbeheer en logistieke processen.'
      },
      {
        value: 'stap5',
        stap: 'Marketing en verkoop',
        title: '',
        description: 'Creëer meer waarde met gerichte strategieën.'
      },
      {
        value: 'stap6',
        stap: 'Operations en service',
        title: '',
        description: 'Verbeter operationele prestaties en klantenservice.'
      }

    ]

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
      <div className='flex flex-col'>

        <div className="container pb-32">
          <div className="flex flex-col md:flex-row gap-16 md:gap-32 md:py-16 py-4">
            <div className="md:w-1/2 flex flex-col gap-4">
              <p className='font-aktiv-grotesk-extended text-base text-donkergroen'>Veranderexperts voor MKB-maakbedrijven</p>
              <h1 className="text-paars">De veranderexperts van Vosteq</h1>
              <p className="font-aktiv-grotesk-extended text-paars">Bij Vosteq werken we met een toegewijd team van ervaren verander-experts die jouw MKB-maakbedrijf helpen bij transformatie en groei. Onze specialisten brengen niet alleen diepgaande kennis en ervaring mee, maar ook een frisse blik en innovatieve ideeën.<br /><br />Wij gaan verder dan alleen adviseren: we staan naast jouw team om veranderingen door te voeren die écht werken en blijvend resultaat opleveren.</p>
            </div>
            <div className="md:w-1/2 md:container relative pb-8">
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

        <WerkStappen title='Expertise in alle facetten van bedrijfsvoering' accordionItems={accordionItems} />
        <WatLevertHetOp omschrijving='De specialisten van Vosteq bieden:' steps={steps} />
        <BottomCta titel="Wil jij ervaren hoe onze verander-experts jouw bedrijf kunnen helpen groeien en innoveren? " paragraph="Neem vandaag nog contact met ons op en ontdek hoe wij complexe uitdagingen omzetten in duurzame oplossingen."/>
        
      </div>
    )
}