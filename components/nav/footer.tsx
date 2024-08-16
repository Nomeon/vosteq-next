import { Input } from "@/components/ui/input";
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col">
      <div className="bg-paars flex flex-col items-center">
        <h2 className="text-wit font-aktiv-grotesk-extended pt-32">Haal ook meer uit mensen en machine</h2>
        <p className="text-wit text-lg font-light font-aktiv-grotesk-extended pt-8">Ontdek hoe Vosteq jouw bedrijf kan transformeren naar Smart Manufacturing</p>
        <div className="flex flex-row gap-4 pt-8">
          <Input />
          <button className="btn-solid-to-outline">Aanmelden</button>
        </div>
        <p className="text-wit pt-4 pb-32 text-xs font-aktiv-grotesk">Door je aan te melden, bevestig je dat je akkoord gaat met onze Algemene Voorwaarden.</p>
      </div>
      <div className="flex justify-between h-48 px-16">
        <div className='flex flex-row items-center gap-6'>
          <Image src='/vosteq-logo.svg' width={134} height={24} alt='logo' />
          <p className="font-aktiv-grotesk-extended text-paars font-semibold">de veranderexperts</p>
        </div>
        <div className="text-black flex items-center">
          <ul className="flex flex-row font-aktiv-grotesk-extended gap-4">
            <li>Markten</li>
            <li>Kennis en inspiratie</li>
            <li>Ons team</li>
            <li>Werkwijze</li>
            <li>Over Vosteq</li>
          </ul>
        </div>
        <div className="flex flex-row gap-4 items-center text-paars">
          <Icon icon="mdi:facebook" width="24" height="24" />
          <Icon icon="mdi:instagram" width="24" height="24" />
          <Icon icon="ri:twitter-x-line" width="20" height="20" />
          <Icon icon="mdi:linkedin" width="24" height="24" />
          <Icon icon="mdi:youtube" width="24" height="24" />
        </div>
      </div>
      <div className="flex bg-groen h-32 items-center justify-center font-aptos text-wit gap-4">
        <p>© 2024 Vosteq. Alle rechten voorbehouden.</p>
        <Link href="/"><p className="underline">Privacybeleid</p></Link>
        <Link href="/"><p className="underline">Algemene Voorwaarden</p></Link>
        <Link href="/"><p className="underline">Cookie-instellingen</p></Link>
      </div>
    </footer>
  );
};

export { Footer };