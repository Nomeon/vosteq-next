import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Icon } from "@iconify/react";


const HomeHero = () => {
  return (
    <section className="w-full text-white bg-paars md:container relative flex flex-col items-center">
      <h1 className="pt-16 text-center max-md:container">Meer uit mens en machine</h1>
      <p className="font-aktiv-grotesk text-lg text-center pt-16 w-2/3 max-md:container">Wij zijn Vosteq, experts in Smart Manufacturing. Met onze kennis en ervaring helpen we jouw bedrijf 
      naar een nieuwe toekomstbestendige horizon. Ontdek hoe we meer uit mens en machine halen.</p>
      <div className="pt-16 flex gap-2 flex-col md:flex-row max-md:items-center">
        <button className='btn-solid'><Link href='/'>Directie advies</Link></button>
        <button className='btn-solid'><Link href='/'>Project management</Link></button>
        <button className='btn-solid'><Link href='/'>Interim management</Link></button>
        <button className='btn-solid'><Link href='/'>Expert capaciteit</Link></button>
      </div>
      <Image className='md:-mt-48 object-cover md:translate-y-1/2 max-md:pt-16' src="/images/hero.png" alt='Hero' height={400} width={1100} />
      <div className="w-40 bg-geel p-6 flex flex-col gap-2 text-paars absolute right-0 top-1/2 group hover:bg-groen hover:text-wit transition-all duration-200 max-md:hidden">
        <p className="font-aktiv-grotesk-extended text-lg leading-5 font-bold">Haal ook meer uit mens en machine?</p>
        <Separator className="bg-paars group-hover:bg-wit transition-all duration-200"/>
        <Link href='/' className="font-aktiv-grotesk flex flex-row items-center">
         <p className="w-2/3">Spar met ons team</p>
         <Icon icon='mdi:chevron-right' className='fly text-wit w-1/3 h-full hidden group-hover:inline'/>
        </Link>
      </div>
    </section>
  );
}

export { HomeHero };