import { Icon } from "@iconify/react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";


const Verbeteren = () => {
  return (
    <div className="container flex flex-col items-center py-16">
      <h2 className="text-paars">Verbeteren in 5 stappen</h2>
      <div className="flex flex-row gap-4 py-12">
        {/* Optimaliseren */}
        <div className="outline outline-1 outline-groen w-60 h-96 px-4 flex flex-col flex-1 group hover:bg-groen transition-all duration-200">
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
    </div>
  )
}

export { Verbeteren };