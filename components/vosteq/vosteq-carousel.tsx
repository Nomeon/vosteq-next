'use client';

import { useState, useEffect } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Icon } from "@iconify/react";
import { DatoCase } from "@/lib/definitions";
import { Image } from "react-datocms";
import Link from "next/link";


const VosteqCarousel = ({ cases }: { cases: DatoCase[] }) => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState<number>(0)
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
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
    <section className="bg-[#F1F9F9] w-full">
      <div className="container pt-8 lg:pb-32 pb-8">
        <div className="flex flex-row justify-between px-16 items-center pb-8 max-lg:hidden">
          <h2 className="text-paars">Vosteq in de praktijk</h2>
          <div className="flex flex-row gap-8">
            <p className="text-5xl text-paars font-extralight font-aktiv-grotesk-extended">{current}/{count}</p>
            <div className="flex flex-row items-center gap-2">
              <button aria-label="carousel previous" onClick={() => api?.scrollPrev()} className="transition-all duration-200 outline-paars outline-1 outline h-10 w-10 flex items-center justify-center text-paars hover:outline-groen hover:text-wit hover:bg-groen"><Icon icon="mdi:chevron-left" height={32}/></button>
              <button aria-label="carousel next" onClick={() => api?.scrollNext()} className="transition-all duration-200 outline-paars outline-1 outline h-10 w-10 flex items-center justify-center text-wit bg-paars hover:outline-groen hover:text-wit hover:bg-groen"><Icon icon="mdi:chevron-right" height={32}/></button>
            </div>
          </div>
        </div>
        <Carousel className="w-full" setApi={setApi}>
          <CarouselContent>
            {cases.map((caseItem, idx) => (
              <CarouselItem key={idx} className="w-full flex lg:gap-8 flex-col lg:flex-row">
                <div className="flex lg:w-1/2 w-full">
                  <Image 
                    objectFit="cover"
                    data={caseItem.mainImage.responsiveImage}
                  />
                </div>
                <div className="flex flex-col lg:w-1/2 lg:p-16 bg-wit p-4 h-full">
                  <p className="text-paars font-aktiv-grotesk-extended text-base pb-4 flex-none">
                    {caseItem.service} bij {caseItem.title}
                  </p>
                  <p className="text-paars font-aktiv-grotesk-extended text-base lg:text-2xl pb-8 font-semibold grow">
                    "{caseItem.quote}"
                  </p>
                  <div className="flex-none">
                    <button aria-label="bekijk case" className="btn-outline font-semibold"><Link href={`/klant-cases/${caseItem.slug}`}>Bekijk case</Link></button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="flex flex-row justify-between w-full lg:hidden pt-8">
          <p className="text-5xl text-paars font-extralight font-aktiv-grotesk-extended">{current}/{count}</p>
          <div className="flex flex-row items-center gap-2">
            <button aria-label="carousel previous" onClick={() => api?.scrollPrev()} className="transition-all duration-200 outline-paars outline-1 outline h-10 w-10 flex items-center justify-center text-paars hover:outline-groen hover:text-wit hover:bg-groen"><Icon icon="mdi:chevron-left" height={32}/></button>
            <button aria-label="carousel next" onClick={() => api?.scrollNext()} className="transition-all duration-200 outline-paars outline-1 outline h-10 w-10 flex items-center justify-center text-wit bg-paars hover:outline-groen hover:text-wit hover:bg-groen"><Icon icon="mdi:chevron-right" height={32}/></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { VosteqCarousel };