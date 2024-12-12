import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Link } from "@/lib/i18n";
import * as m from "@/paraglide/messages.js";
import DecoRight from "./deco-right";

const Deskundigen = () => {
  return (
    <div className="container flex flex-col lg:flex-row gap-8 pb-16 pt-16 lg:pt-[28rem]">
      <div className="lg:w-1/2 flex flex-col gap-8">
        <h2 className="text-paars max-lg:text-xl">{m.such_house_weasel_leap()}</h2>
        <p className="font-aktiv-grotesk-extended text-xl max-lg:text-lg">{m.pretty_home_shark_approve()}</p>
        <Image className='object-cover py-4 max-lg:hidden' src="/images/systeem.svg" alt='Het systeem van Vosteq' height={80} width={370} />
        <h4 className="text-paars">{m.house_topical_stingray_buy()}</h4>
        <div className="flex text-donkergroen font-aptos text-base">
          <ul className="inline">
            <li className="inline-block py-1 hover:text-paars hover:font-semibold max-lg:pr-2"><Link href='/diensten/directieadvies'>{m.actual_round_termite_amaze()} &gt;</Link></li>
            <Separator />
            <li className="inline-block py-1 hover:text-paars hover:font-semibold max-lg:pr-2"><Link href='/diensten/innovatie-en-verandertrajecten'>{m.crisp_royal_deer_earn()} &gt;</Link></li>
            <Separator />
            <li className="inline-block py-1 hover:text-paars hover:font-semibold max-lg:pr-2"><Link href='/diensten/expertise-on-demand'>{m.bright_proof_crab_empower()} &gt;</Link></li>
          </ul>
        </div>
      </div>
      <div className="lg:w-1/2 container">
        <DecoRight imageSrc="/images/home2.webp" />
      </div>
    </div>
  );
}

export { Deskundigen };