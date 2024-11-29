import { Popup } from '@/components/ui/popup';
import type { Metadata } from "next";
import { WatLevertHetOp } from '@/components/vosteq/wat-levert-het-op';
import { WerkStappen } from '@/components/vosteq/werk-stappen';
import { BottomCta } from '@/components/vosteq/bottom-cta';
import DecoRight from '@/components/vosteq/deco-right';

export const metadata: Metadata = {
  title: "Innovatie- en Verandertrajecten voor MKB-Maakbedrijven | Vosteq ",
  description: "Vosteq helpt jouw MKB-maakbedrijf met innovatie- en verandertrajecten. Voer transformaties door zonder je operaties te verstoren. Lees hoe ons parttime innovatieteam werkt!",
};

export default function InnovatieEnVerandertrajecten() {
  const steps = [
    {
      icon: 'mdi:cog-transfer',
      title: 'Soepel lopende innovaties',
      description: 'en veranderingen zonder verstoringen in de dagelijkse processen.'
    },
    {
      icon: 'mdi:shield-check',
      title: 'Duurzame resultaten',
      description: 'omdat we pas vertrekken wanneer de innovatie effectief is geïmplementeerd in jouw organisatie.'
    },
    {
      icon: 'mdi:account-group',
      title: 'Expertise op maat',
      description: 'met kennis en ervaring uit verschillende vakgebieden dat de last van projectwerkzaamheden op zich neemt.'
    },
    {
      icon: 'mdi:chart-line',
      title: 'Succesvolle transformatie',
      description: 'die volledig is afgestemd op de behoeften van jouw bedrijf en die meetbare resultaten oplevert.'
    },
    {
      icon: 'mdi:cash-multiple',
      title: 'Lage kosten',
      description: 'door efficiënt gebruik te maken van de parttime inzet van onze specialisten, zonder onnodige overhead.'
    }
  ];

  const accordionItems = [
    {
      value: 'stap1',
      stap: 'Stap 1.',
      title: 'Analyse en planning',
      description: 'We starten met een grondige analyse van jouw organisatie en het geplande project. Samen ontwikkelen we een gedetailleerd plan van aanpak dat rekening houdt met jouw operationele processen én de gewenste innovaties.'
    },
    {
      value: 'stap2',
      stap: 'Stap 2.',
      title: 'Gerichte ondersteuning',
      description: 'Op basis van jouw specifieke behoeften stellen we een op maat gemaakt team samen. Van het coördineren van projectactiviteiten tot het tijdelijk versterken van je team met gespecialiseerde kennis, wij staan klaar. En afhankelijk van de voortgang en complexiteit van het project passen we onze inzet flexibel aan.'
    },
    {
      value: 'stap3',
      stap: 'Stap 3.',
      title: 'Naadloze implementatie',
      description: 'Ons team werkt nauw samen met jouw medewerkers om te zorgen voor een soepele uitvoering van het project. Hierbij zorgen we dat innovaties niet alleen worden ingevoerd, maar ook direct werken binnen jouw organisatie.'
    },
    {
      value: 'stap4',
      stap: 'Stap 4.',
      title: 'Capaciteitsmanagement',
      description: 'We monitoren voortdurend de capaciteit van jouw team en passen onze aanpak aan om ervoor te zorgen dat de dagelijkse operaties probleemloos blijven verlopen.'
    }
  ]

  return (
    <div className='flex flex-col'>
      <Popup />
      <div className="container flex flex-col md:flex-row gap-16 md:gap-32 md:py-16 py-4">
        <div className="md:w-1/2 flex flex-col gap-4">
          <p className='font-aktiv-grotesk-extended text-base text-donkergroen'>Verandering zonder verstoring</p>
          <h1 className="text-paars">Innovatie- en verandertrajecten op maat</h1>
          <p className="font-aktiv-grotesk-extended text-paars">In de maakindustrie is het vinden van balans tussen dagelijkse operaties en innovatie cruciaal. Bij Vosteq begrijpen we dat verandertrajecten en nieuwe projecten een druk kunnen leggen op jouw team en processen. Daarom bieden we kosteneffectieve, parttime innovatie- en verbetertrajecten die jouw organisatie helpen groeien, zonder de kernactiviteiten te verstoren.</p>
          <h3 className='pt-8 text-paars max-md:text-2xl'>Een parttime innovatieteam voor maximale impact tegen minimale kosten</h3>
          <p className='text-diepgrijs'>Bij complexe transformaties is een geïntegreerde aanpak essentieel. Ons parttime innovatieteam bestaat uit directieadviseurs, projectmanagers, interim-managers en specialistische experts. Samen leveren we de kennis en kunde die nodig zijn om jouw doelen te realiseren – zonder de kosten van fulltime rollen.</p>
        </div>
        <div className="md:w-1/2 container relative pb-16">
          <DecoRight imageSrc='/images/projectmanagement.webp' />
        </div>
      </div>
      <WerkStappen accordionItems={accordionItems} />
      <WatLevertHetOp omschrijving='Met onze aanpak profiteer je van:' steps={steps} />
      <BottomCta titel='Wil je transformaties doorvoeren zonder je operaties te verstoren?' paragraph='Ontdek hoe ons parttime innovatieteam jouw bedrijf helpt bij een kosteneffectieve transformatie.' />
    </div>
  );
}