import Image from "next/image";
import { Link } from "@/lib/i18n";
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
          <button className='btn-solid'><Link href='/diensten/innovatie-en-verandertrajecten'>{m.cool_noisy_snail_drum()}</Link></button>
          <button className='btn-solid'><Link href='/diensten/expertise-on-demand'>{m.blue_warm_bee_dig()}</Link></button>
        </div>
        <Image className='md:-mt-48 object-cover md:translate-y-1/2 max-md:pt-16' src={hero} alt='Vosteq bij Hapert' placeholder="blur" />
      </section>
    </div>
  );
}

export { HomeHero };