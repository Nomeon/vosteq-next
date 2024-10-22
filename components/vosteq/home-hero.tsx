import Image from "next/image";
import { Link } from "@/lib/i18n";
import { Separator } from "@/components/ui/separator";
import { Icon } from "@iconify/react";
import * as m from "@/paraglide/messages.js";
import hero from '@/public/images/Vosteq-Hapert-2018-1.webp';


const HomeHero = () => {
  return (
    <div className='w-full bg-paars'>
      <section className="w-full text-white md:container relative flex flex-col items-center">
        <h1 className="pt-16 text-center max-md:container">{m.green_swift_goldfish_commend()}</h1>
        <p className="font-aktiv-grotesk text-lg text-center pt-16 w-2/3 max-md:container">{m.aloof_blue_hedgehog_pat()}</p>
        <div className="pt-16 flex gap-2 flex-col md:flex-row max-md:items-center">
          <button className='btn-solid'><Link href='/diensten/directieadvies'>{m.house_away_puffin_cuddle()}</Link></button>
          <button className='btn-solid'><Link href='/diensten/projectmanagement'>{m.plain_this_turkey_type()}</Link></button>
          <button className='btn-solid'><Link href='/diensten/interim-management'>{m.cool_noisy_snail_drum()}</Link></button>
          <button className='btn-solid'><Link href='/diensten/interim-experts'>{m.blue_warm_bee_dig()}</Link></button>
        </div>
        <Image className='md:-mt-48 object-cover md:translate-y-1/2 max-md:pt-16' src={hero} alt='Vosteq bij Hapert' placeholder="blur" />
        <div className="w-40 bg-geel p-6 flex flex-col gap-2 text-paars absolute right-8 top-1/2 group hover:bg-groen hover:text-wit transition-all duration-200 max-md:hidden">
          <p className="font-aktiv-grotesk-extended text-lg leading-5 font-bold">{m.patchy_plane_lark_breathe()}</p>
          <Separator className="bg-paars group-hover:bg-wit transition-all duration-200"/>
          <Link href='/' className="font-aktiv-grotesk flex flex-row items-center">
          <p className="w-2/3">{m.knotty_gross_elk_aid()}</p>
          <Icon icon='mdi:chevron-right' className='fly text-wit w-1/3 h-full hidden group-hover:inline'/>
          </Link>
        </div>
      </section>
    </div>
  );
}

export { HomeHero };