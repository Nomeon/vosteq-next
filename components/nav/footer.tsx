import { Icon } from '@iconify/react';
import Image from 'next/image';
import { Link } from "@/lib/i18n";

const Footer = () => {
  return (
    <footer className="flex flex-col">
      <div className="flex flex-col container lg:flex-row justify-between max-lg:gap-16 max-lg:items-center lg:px-16 py-16">
        <div className='flex flex-row items-center gap-6'>
          <Image src='/vosteq-logo.svg' width={134} height={24} alt='logo' />
          <p className="font-aktiv-grotesk-extended text-paars font-semibold">de veranderexperts</p>
        </div>
        <div className="text-black flex items-center">
          <ul className="flex flex-col max-lg:items-center lg:flex-row font-aktiv-grotesk-extended lg:gap-8 gap-4">
            <li><Link href='/diensten'>Diensten</Link></li>
            <li><Link href='/onze-aanpak'>Onze aanpak</Link></li>
            <li><Link href='/klant-cases'>Klant cases</Link></li>
            <li><Link href='/over-vosteq'>Over Vosteq</Link></li>
          </ul>
        </div>
        <div className="flex flex-row gap-4 items-center text-paars">
          <Link aria-label="Vosteq LinkedIn" target='_blank' href='https://www.linkedin.com/company/vosteq-veranderexperts-in-smart-manufacturing/'>
            <Icon icon="mdi:linkedin" width="36" height="36" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row bg-groen py-12 items-center justify-center font-aptos text-wit gap-4">
        <p>© 2025 Vosteq. Alle rechten voorbehouden.</p>
        <Link href="/"><p className="underline">Privacybeleid</p></Link>
        <Link target="_blank" rel="noopener noreferrer" href="/Algemene voorwaarden Vosteq Innovations B.V.pdf"><p className="underline">Algemene Voorwaarden</p></Link>
        {/* <Link href="/"><p className="underline">Cookie-instellingen</p></Link> */}
      </div>
    </footer>
  );
};

export { Footer };