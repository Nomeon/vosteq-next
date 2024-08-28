import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Link } from "@/lib/i18n";

const Deskundigen = () => {
  return (
    <div className="container flex flex-col md:flex-row gap-8 pb-16 pt-16 md:pt-[28rem]">
      <div className="md:w-1/2 flex flex-col gap-8">
        <h2 className="text-paars">Deskundigen in Smart Manufacturing die het MKB maakbedrijf in Nederland ondersteunen.</h2>
        <p className="font-aktiv-grotesk-extended text-xl">Met meer dan 25 jaar ervaring helpen we bedrijven hun onbenutte potentieel te ontdekken en te benutten. We werken samen met jouw medewerkers om bewustwording te creëren, nieuwe inzichten aan te reiken en obstakels weg te nemen.</p>
        <Image className='object-cover py-4 max-md:hidden' src="/images/systeem.svg" alt='Het systeem van Vosteq' height={80} width={370} />
        <h4 className="text-paars">Kennis en inspiratie</h4>
        <div className="flex text-donkergroen font-aptos text-base">
          <ul className="inline">
            <li className="inline-block py-1 hover:text-paars hover:font-semibold max-md:pr-2"><Link href='/'>Veranderen naar een nieuwe toekomstbestendige horizon {">"}</Link></li>
            <Separator />
            <li className="inline-block py-1 hover:text-paars hover:font-semibold max-md:pr-2"><Link href='/'>Nuchter kijken naar jouw bedrijf en ideeën vormen {">"}</Link></li>
            <Separator />
            <li className="inline-block py-1 hover:text-paars hover:font-semibold max-md:pr-2"><Link href='/'>Alleen bieden wat echt nodig is voor jouw bedrijf {">"}</Link></li>
          </ul>
        </div>
      </div>
      <div className="md:w-1/2">
        <Image className='object-cover' src="/images/deskundigen.svg" alt='Deskundigen' width={650} height={550} />
      </div>
    </div>
  );
}

export { Deskundigen };