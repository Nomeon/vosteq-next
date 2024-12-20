'use client'

import { carouselItems } from "@/lib/carousel-items";
import { useState, useEffect } from "react";
import { 
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem
} from "@/components/ui/carousel";
import Image from "next/image";
import { Icon } from "@iconify/react";

const VeranderExperts = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [visibleOverlays, setVisibleOverlays] = useState(
      Array(carouselItems.length).fill(false)
    );

    const [shuffledItems, setShuffledItems] = useState([...carouselItems]);
    
    useEffect(() => {
        const itemsCopy = [...carouselItems];
        itemsCopy.sort(() => Math.random() - 0.5);
        setShuffledItems(itemsCopy);
    }, []);

    const toggleOverlay = (index: number) => {
        setVisibleOverlays((prev) =>
          prev.map((isVisible, i) => (i === index ? !isVisible : isVisible))
        );
    };

    return (
        <div className="container pb-16 md:pb-32">
            <div className="grid md:grid-cols-4 grid-cols-1 gap-8 max-md:hidden">
                {shuffledItems.map((item, idx) => (
                    <div key={idx} className="basis-2/3 md:basis-1/4 flex flex-col relative">
                        <div className="relative group">
                            <div className="relative overflow-hidden">
                                <Image className="w-full h-full" src={item.imageSrc!} alt={item.name} />

                                {/* Overlay */}
                                <div
                                className={`w-full h-full absolute top-0 left-0 flex flex-col justify-start md:justify-end transition-all opacity-80 duration-300 bg-gradient-to-tl from-paars to-groen from-10% md:opacity-0 md:group-hover:opacity-80 ${
                                visibleOverlays[idx] ? 'max-md:translate-y-0' : 'max-md:translate-y-85/100'
                                }`}
                                >
                                <p className={`${visibleOverlays[idx] ? 'max-md:text-opacity-100' : 'max-md:text-opacity-0'} transition-all duration-300 text-wit text-base font-aktiv-grotesk-extended w-full p-4`}>{item.description}</p>
                                </div>
                            </div>
                        </div>
                        <p className="px-4 py-2 text-donkerpaars font-aktiv-grotesk-extended font-semibold">{item.name}</p>
                    </div>
                ))}
            </div>
            <Carousel className="w-full md:hidden" setApi={setApi}>
                <CarouselContent>
                {shuffledItems.map((item, idx) => (
                    <CarouselItem key={idx} className="basis-2/3 md:basis-1/4 flex flex-col relative">
                    <div className="relative group">
                    <div className="relative overflow-hidden">
                        <Image className="w-full h-full" src={item.imageSrc!} alt={item.name} />
                    
                        {/* Overlay */}
                        <div
                        className={`w-full h-full absolute top-0 left-0 flex flex-col justify-start md:justify-end transition-all opacity-80 duration-300 bg-gradient-to-tl from-paars to-groen from-10% md:opacity-0 md:group-hover:opacity-80 ${
                            visibleOverlays[idx] ? 'max-md:translate-y-0' : 'max-md:translate-y-85/100'
                        }`}
                        >
                        <p className={`${visibleOverlays[idx] ? 'max-md:text-opacity-100' : 'max-md:text-opacity-0'} transition-all duration-300 text-wit text-base font-aktiv-grotesk-extended w-full p-4`}>{item.description}</p>
                        </div>
                    
                        {/* Button to toggle overlay on mobile */}
                        <div className="w-full h-12 absolute bottom-0 flex flex-row justify-between items-center p-2 md:hidden">
                        <p className={`text-white font-aptos transition-all duration-300" pl-2 ${visibleOverlays[idx] ? 'opacity-0' : 'opacity-100'}`}></p>
                        <button
                            className="text-wit md:hidden"
                            onClick={() => toggleOverlay(idx)}
                        >
                            <Icon
                            icon='mdi:chevron-up'
                            width={32}
                            height={32}
                            className={`transition-transform duration-300 ${visibleOverlays[idx] ? '-rotate-180' : 'rotate-0'}`}
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

export { VeranderExperts };