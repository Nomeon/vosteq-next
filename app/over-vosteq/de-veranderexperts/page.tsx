import DecoRight from "@/components/vosteq/deco-right";
import WatLevertHetOp from "@/components/vosteq/wat-levert-het-op";
import BottomCta from "@/components/vosteq/bottom-cta";
import WerkStappen from "@/components/vosteq/werk-stappen";
import { VeranderExperts } from "@/components/vosteq/veranderexperts-caroussel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "De Verander-Experts: Duurzame Oplossingen voor MKB-Maakbedrijven | Vosteq",
  description: "Maak kennis met de verander-experts van Vosteq. Van procesoptimalisatie tot supply chain: wij helpen MKB-maakbedrijven met duurzame verbeteringen.",
};

export default function DeVeranderexperts() {
    const steps = [
      {
      icon: 'mdi:lightbulb-on',
      title: 'Diepgaande expertise',
      description: 'Onze specialisten hebben uitgebreide ervaring in de maakindustrie en MKB.'
      },
      {
      icon: 'mdi:rocket-launch',
      title: 'Innovatieve aanpak',
      description: 'Wij brengen nieuwe perspectieven en creatieve oplossingen.'
      },
      {
      icon: 'mdi:account-group',
      title: 'Actieve betrokkenheid',
      description: 'Onze experts werken samen met jouw team aan het behalen van meetbare resultaten.'
      },
      {
      icon: 'mdi:leaf',
      title: 'Duurzame resultaten',
      description: 'Wij richten ons op blijvende verbeteringen die jouw bedrijf efficiënter en concurrerender maken.'
      }
    ];
  
    const accordionItems = [
      {
        value: 'stap1',
        stap: 'Procesoptimalisatie',
        title: '',
        description: 'Verhoog de efficiëntie en verminder verspilling in jouw bedrijfsprocessen.'
      },
      {
        value: 'stap2',
        stap: 'Automatisering en digitalisering',
        title: '',
        description: ' Implementeer slimme technologieën die jouw bedrijf toekomstbestendig maken.'
      },
      {
        value: 'stap3',
        stap: 'Verkorting van doorlooptijden',
        title: '',
        description: 'Versnel processen en verbeter leverprestaties.'
      },
      {
        value: 'stap4',
        stap: 'Supply chain en logistiek',
        title: '',
        description: 'Optimaliseer je ketenbeheer en logistieke processen.'
      },
      {
        value: 'stap5',
        stap: 'Marketing en verkoop',
        title: '',
        description: 'Creëer meer waarde met gerichte strategieën.'
      },
      {
        value: 'stap6',
        stap: 'Operations en service',
        title: '',
        description: 'Verbeter operationele prestaties en klantenservice.'
      }
    ]
    
    return (
      <div className='flex flex-col'>
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 lg:py-16 py-4">
            <div className="lg:w-1/2 flex flex-col gap-4">
              <p className='font-aktiv-grotesk-extended text-base text-donkergroen'>Veranderexperts voor MKB-maakbedrijven</p>
              <h1 className="text-paars">De veranderexperts van Vosteq</h1>
              <p className="font-aktiv-grotesk-extended text-paars">Bij Vosteq werken we met een toegewijd team van ervaren verander-experts die jouw MKB-maakbedrijf helpen bij transformatie en groei. Onze specialisten brengen niet alleen diepgaande kennis en ervaring mee, maar ook een frisse blik en innovatieve ideeën.<br /><br />Wij gaan verder dan alleen adviseren: we staan naast jouw team om veranderingen door te voeren die écht werken en blijvend resultaat opleveren.</p>
            </div>
            <div className="lg:w-1/2 container relative pb-16">
              <DecoRight imageSrc="/images/interimexperts.webp" />
            </div>
          </div>
          <h2 className="lg:pb-16 pb-8 text-paars max-lg:text-xl">Ons team van specialisten</h2>
        </div>
        <VeranderExperts />
        <WerkStappen title='Expertise in alle facetten van bedrijfsvoering' accordionItems={accordionItems} />
        <WatLevertHetOp omschrijving='De specialisten van Vosteq bieden:' steps={steps} />
        <BottomCta titel="Wil jij ervaren hoe onze verander-experts jouw bedrijf kunnen helpen groeien en innoveren? " paragraph="Neem vandaag nog contact met ons op en ontdek hoe wij complexe uitdagingen omzetten in duurzame oplossingen."/>
      </div>
    )
}