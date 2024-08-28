'use client'
import { Icon } from "@iconify/react";
import { Separator } from "@/components/ui/separator";
import { Link } from "@/lib/i18n";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import React from "react";


const Verbeteren = () => {
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
    <div className="container flex flex-col items-center py-16">
      <h2 className="text-paars">Verbeteren in 5 stappen</h2>
      <div className="flex flex-row gap-4 py-12 max-md:hidden">
        {/* Optimaliseren */}
        <div className="outline outline-1 outline-groen w-56 h-96 px-4 flex flex-col flex-1 group hover:bg-groen transition-all duration-200">
          <div className="flex items-center justify-center h-32">
            <Icon className='text-groen group-hover:text-paars transition-all duration-200' icon='mdi:magnify' width={60} height={60} />
          </div>
          <h4 className="text-paars text-xl">Optimaliseren</h4>
          <Separator className="bg-paars my-2" />
          <p className="text-donkergroen font-aktiv-grotesk-extended font-semibold mb-4 group-hover:text-wit transition-all duration-200">Continue verbeteren</p>
          <p className="text-diepgrijs font-aktiv-grotesk-extended group-hover:text-wit transition-all duration-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Link className='mt-auto pb-4' href="/">
            <p className="font-aktiv-grotesk-extended text-base text-paars group-hover:text-wit transition-all duration-200">Meer {">"}</p>
          </Link>
        </div>
        {/* Innoveren */}
        <div className="outline outline-1 outline-groen w-56 h-96 px-4 flex flex-col flex-1 group hover:bg-groen transition-all duration-200">
          <div className="flex items-center justify-center h-32">
            <Icon className='text-groen group-hover:text-paars transition-all duration-200' icon='mdi:lightbulb-on' width={60} height={60} />
          </div>
          <h4 className="text-paars text-xl">Innoveren</h4>
          <Separator className="bg-paars my-2" />
          <p className="text-donkergroen font-aktiv-grotesk-extended font-semibold mb-4 group-hover:text-wit transition-all duration-200">Doorbraak</p>
          <p className="text-diepgrijs font-aktiv-grotesk-extended group-hover:text-wit transition-all duration-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Link className='mt-auto pb-4' href="/">
            <p className="font-aktiv-grotesk-extended text-base text-paars group-hover:text-wit transition-all duration-200">Meer {">"}</p>
          </Link>
        </div>
        {/* Implementeren */}
        <div className="outline outline-1 outline-groen w-56 h-96 px-4 flex flex-col flex-1 group hover:bg-groen transition-all duration-200">
          <div className="flex items-center justify-center h-32">
            <Icon className='text-groen group-hover:text-paars transition-all duration-200' icon='mdi:hammer-wrench' width={60} height={60} />
          </div>
          <h4 className="text-paars text-xl">Implementeren</h4>
          <Separator className="bg-paars my-2" />
          <p className="text-donkergroen font-aktiv-grotesk-extended font-semibold mb-4 group-hover:text-wit transition-all duration-200">Omzetten</p>
          <p className="text-diepgrijs font-aktiv-grotesk-extended group-hover:text-wit transition-all duration-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Link className='mt-auto pb-4' href="/">
            <p className="font-aktiv-grotesk-extended text-base text-paars group-hover:text-wit transition-all duration-200">Meer {">"}</p>
          </Link>
        </div>
        {/* Herstructureren */}
        <div className="outline outline-1 outline-groen w-56 h-96 px-4 flex flex-col flex-1 group hover:bg-groen transition-all duration-200">
          <div className="flex items-center justify-center h-32">
            <Icon className='text-groen group-hover:text-paars transition-all duration-200' icon='mdi:account-group' width={60} height={60} />
          </div>
          <h4 className="text-paars text-xl">Herstructureren</h4>
          <Separator className="bg-paars my-2" />
          <p className="text-donkergroen font-aktiv-grotesk-extended font-semibold mb-4 group-hover:text-wit transition-all duration-200">Basis op orde</p>
          <p className="text-diepgrijs font-aktiv-grotesk-extended group-hover:text-wit transition-all duration-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Link className='mt-auto pb-4' href="/">
            <p className="font-aktiv-grotesk-extended text-base text-paars group-hover:text-wit transition-all duration-200">Meer {">"}</p>
          </Link>
        </div>
        {/* Veranderen */}
        <div className="outline outline-1 outline-groen w-56 h-96 px-4 flex flex-col flex-1 group hover:bg-groen transition-all duration-200">
          <div className="flex items-center justify-center h-32">
            <Icon className='text-groen group-hover:text-paars transition-all duration-200' icon='mdi:sync' width={60} height={60} />
          </div>
          <h4 className="text-paars text-xl">Veranderen</h4>
          <Separator className="bg-paars my-2" />
          <p className="text-donkergroen font-aktiv-grotesk-extended font-semibold mb-4 group-hover:text-wit transition-all duration-200">Mensen meenemen</p>
          <p className="text-diepgrijs font-aktiv-grotesk-extended group-hover:text-wit transition-all duration-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Link className='mt-auto pb-4' href="/">
            <p className="font-aktiv-grotesk-extended text-base text-paars group-hover:text-wit transition-all duration-200">Meer {">"}</p>
          </Link>
        </div>
      </div>
      {/* Mobile Carousel */}

      <div className="w-full pt-4 md:hidden">
        <Carousel setApi={setApi} className="py-4 px-8">
          <CarouselContent>
            <CarouselItem key={1} className="w-full flex items-center">
            <div className="w-full h-96 p-2">
              <div className="outline outline-1 outline-groen px-4 flex flex-col flex-1 group hover:bg-groen transition-all duration-200">
                <div className="flex items-center justify-center h-32">
                  <Icon className='text-groen group-hover:text-paars transition-all duration-200' icon='mdi:magnify' width={60} height={60} />
                </div>
                <h4 className="text-paars text-xl">Optimaliseren</h4>
                <Separator className="bg-paars my-2" />
                <p className="text-donkergroen font-aktiv-grotesk-extended font-semibold mb-4 group-hover:text-wit transition-all duration-200">Continue verbeteren</p>
                <p className="text-diepgrijs font-aktiv-grotesk-extended group-hover:text-wit transition-all duration-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Link className='mt-auto pb-4' href="/">
                  <p className="font-aktiv-grotesk-extended text-base text-paars group-hover:text-wit transition-all duration-200">Meer {">"}</p>
                </Link>
              </div>
            </div>
            </CarouselItem>
            <CarouselItem key={2} className="w-full flex items-center">
              <div className="w-full h-96 p-2">
              <div className="outline outline-1 outline-groen px-4 flex flex-col flex-1 group hover:bg-groen transition-all duration-200">
                <div className="flex items-center justify-center h-32">
                  <Icon className='text-groen group-hover:text-paars transition-all duration-200' icon='mdi:lightbulb-on' width={60} height={60} />
                </div>
                <h4 className="text-paars text-xl">Innoveren</h4>
                <Separator className="bg-paars my-2" />
                <p className="text-donkergroen font-aktiv-grotesk-extended font-semibold mb-4 group-hover:text-wit transition-all duration-200">Doorbraak</p>
                <p className="text-diepgrijs font-aktiv-grotesk-extended group-hover:text-wit transition-all duration-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Link className='mt-auto pb-4' href="/">
                  <p className="font-aktiv-grotesk-extended text-base text-paars group-hover:text-wit transition-all duration-200">Meer {">"}</p>
                </Link>
              </div>
            </div>
            </CarouselItem>
            <CarouselItem key={3} className="w-full flex items-center">
            <div className="w-full h-96 p-2">
              <div className="outline outline-1 outline-groen px-4 flex flex-col flex-1 group hover:bg-groen transition-all duration-200">
                <div className="flex items-center justify-center h-32">
                  <Icon className='text-groen group-hover:text-paars transition-all duration-200' icon='mdi:hammer-wrench' width={60} height={60} />
                </div>
                <h4 className="text-paars text-xl">Implementeren</h4>
                <Separator className="bg-paars my-2" />
                <p className="text-donkergroen font-aktiv-grotesk-extended font-semibold mb-4 group-hover:text-wit transition-all duration-200">Omzetten</p>
                <p className="text-diepgrijs font-aktiv-grotesk-extended group-hover:text-wit transition-all duration-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Link className='mt-auto pb-4' href="/">
                  <p className="font-aktiv-grotesk-extended text-base text-paars group-hover:text-wit transition-all duration-200">Meer {">"}</p>
                </Link>
              </div>
            </div>
            </CarouselItem>
            <CarouselItem key={4} className="w-full flex items-center justify-center">
              <div className="w-full h-96 p-2">
                <div className="outline outline-1 outline-groen px-4 flex flex-col flex-1 group hover:bg-groen transition-all duration-200">
                  <div className="flex items-center justify-center h-32">
                    <Icon className='text-groen group-hover:text-paars transition-all duration-200' icon='mdi:account-group' width={60} height={60} />
                  </div>
                  <h4 className="text-paars text-xl">Herstructureren</h4>
                  <Separator className="bg-paars my-2" />
                  <p className="text-donkergroen font-aktiv-grotesk-extended font-semibold mb-4 group-hover:text-wit transition-all duration-200">Basis op orde</p>
                  <p className="text-diepgrijs font-aktiv-grotesk-extended group-hover:text-wit transition-all duration-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <Link className='mt-auto pb-4' href="/">
                    <p className="font-aktiv-grotesk-extended text-base text-paars group-hover:text-wit transition-all duration-200">Meer {">"}</p>
                  </Link>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem key={5} className="w-full flex items-center">
            <div className="w-full h-96 p-2">
              <div className="outline outline-1 outline-groen px-4 flex flex-col flex-1 group hover:bg-groen transition-all duration-200">
                <div className="flex items-center justify-center h-32">
                  <Icon className='text-groen group-hover:text-paars transition-all duration-200' icon='mdi:sync' width={60} height={60} />
                </div>
                <h4 className="text-paars text-xl">Veranderen</h4>
                <Separator className="bg-paars my-2" />
                <p className="text-donkergroen font-aktiv-grotesk-extended font-semibold mb-4 group-hover:text-wit transition-all duration-200">Mensen meenemen</p>
                <p className="text-diepgrijs font-aktiv-grotesk-extended group-hover:text-wit transition-all duration-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Link className='mt-auto pb-4' href="/">
                  <p className="font-aktiv-grotesk-extended text-base text-paars group-hover:text-wit transition-all duration-200">Meer {">"}</p>
                </Link>
              </div>
            </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        <div className="flex flex-row justify-between w-full">
          <p className="text-5xl text-paars font-extralight font-aktiv-grotesk-extended">{current}/{count}</p>
          <div className="flex flex-row items-center gap-2">
            <button onClick={() => api?.scrollPrev()} className="transition-all duration-200 outline-paars outline-1 outline h-10 w-10 flex items-center justify-center text-paars hover:outline-groen hover:text-wit hover:bg-groen"><Icon icon="mdi:chevron-left" height={32}/></button>
            <button onClick={() => api?.scrollNext()} className="transition-all duration-200 outline-paars outline-1 outline h-10 w-10 flex items-center justify-center text-wit bg-paars hover:outline-groen hover:text-wit hover:bg-groen"><Icon icon="mdi:chevron-right" height={32}/></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Verbeteren };