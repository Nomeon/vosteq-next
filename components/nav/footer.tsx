'use client';

import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from "next/link";

const Footer = () => {
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    console.log(e);
  }

  return (
    <footer className="flex flex-col">
      <div className="bg-paars flex flex-col items-center container max-md:text-center py-16">
        <h2 className="text-wit font-aktiv-grotesk-extended">Haal ook meer uit mensen en machine</h2>
        <p className="text-wit text-lg font-light font-aktiv-grotesk-extended pt-8">Ontdek hoe Vosteq jouw bedrijf kan transformeren naar Smart Manufacturing</p>
          <form onSubmit={onSubmit} className="flex flex-col md:flex-row gap-4 pt-8">
            <input
              type="email"
              name="email"
              placeholder="Vul je e-mailadres in"
              className="py-2 px-4 border-2 border-wit font-aptos focus:outline-none focus:border-2 focus:border-groen"
            />
            <div>
              <button className="btn-solid-to-outline">Aanmelden</button>
            </div>
          </form>
        <p className="text-wit pt-4 text-xs font-aktiv-grotesk">Door je aan te melden, bevestig je dat je akkoord gaat met onze Algemene Voorwaarden.</p>
      </div>
      <div className="flex flex-col md:flex-row justify-between max-md:gap-16 max-md:items-center md:px-16 py-16">
        <div className='flex flex-row items-center gap-6'>
          <Image src='/vosteq-logo.svg' width={134} height={24} alt='logo' />
          <p className="font-aktiv-grotesk-extended text-paars font-semibold">de veranderexperts</p>
        </div>
        <div className="text-black flex items-center">
          <ul className="flex flex-col max-md:items-center md:flex-row font-aktiv-grotesk-extended gap-4">
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
      <div className="flex flex-col md:flex-row bg-groen py-12 items-center justify-center font-aptos text-wit gap-4">
        <p>© 2024 Vosteq. Alle rechten voorbehouden.</p>
        <Link href="/"><p className="underline">Privacybeleid</p></Link>
        <Link href="/"><p className="underline">Algemene Voorwaarden</p></Link>
        <Link href="/"><p className="underline">Cookie-instellingen</p></Link>
      </div>
    </footer>
  );
};

export { Footer };