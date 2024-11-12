import Image from 'next/image';
import { Popup } from '@/components/ui/popup';
import type { Metadata } from "next";
import { WatLevertHetOp } from '@/components/vosteq/wat-levert-het-op';
import { WerkStappen } from '@/components/vosteq/werk-stappen';
import { BottomCta } from '@/components/vosteq/bottom-cta';
import DecoRight from '@/components/vosteq/deco-right';

export const metadata: Metadata = {
  title: "Vosteq | Projectmanagement",
  description: "Aan het bouwen!",
};

export default function Projectmanagement() {
  const steps = [
    {
      icon: 'mdi:cog-transfer',
      title: 'Soepel lopende innovaties',
      description: 'en veranderingen, zonder dat de dagelijkse operaties worden verstoord.'
    },
    {
      icon: 'mdi:account-group',
      title: 'Een gefocust team',
      description: 'terwijl wij de extra last van projectwerkzaamheden op ons nemen.'
    },
    {
      icon: 'mdi:shield-check',
      title: 'Duurzame resultaten',
      description: 'aangezien wij niet vertrekken voordat de innovatie effectief werkt binnen jouw organisatie.'
    }
  ];

  const accordionItems = [
    {
      value: 'stap1',
      stap: 'Stap 1.',
      title: 'Analyse en planning',
      description: 'We beginnen met een grondige analyse van het project en de impact die het zal hebben op jouw organisatie. Op basis hiervan ontwikkelen we een gedetailleerd plan van aanpak dat rekening houdt met zowel de verander- en innovatiebehoeften als de continuïteit van de dagelijkse operaties.'
    },
    {
      value: 'stap2',
      stap: 'Stap 2.',
      title: 'Aanvullende ondersteuning',
      description: 'We bieden de specifieke ondersteuning die jouw team nodig heeft, precies waar en wanneer dat nodig is. Dit kan variëren van het coördineren van projectactiviteiten tot het tijdelijk versterken van je team met gespecialiseerde kennis.'
    },
    {
      value: 'stap3',
      stap: 'Stap 3.',
      title: 'Implementatie',
      description: 'We zorgen voor een naadloze uitvoering van het project, waarbij we constant met jouw team afstemmen om er zo voor te zorgen dat de innovatie niet alleen wordt ingevoerd, maar ook werkt in de bedrijfscontext.'
    },
    {
      value: 'stap4',
      stap: 'Stap 4.',
      title: 'Capaciteitsmanagement',
      description: 'Tijdens het hele proces houden we de capaciteit van je operationele processen in de gaten en passen we onze aanpak aan om ervoor te zorgen dat deze  niet in het gedrang komt.'
    }
  ]

  return (
    <div className='flex flex-col'>
      <Popup />
      <div className="container flex flex-col md:flex-row gap-16 md:gap-32 md:py-16 py-4">
        <div className="md:w-1/2 flex flex-col gap-4">
          <p className='font-aktiv-grotesk-extended text-base text-donkergroen'>Organisatie verbetering</p>
          <h1 className="text-paars">Projectmanagement</h1>
          <p className="font-aktiv-grotesk-extended text-paars">In de maakindustrie is de balans tussen dagelijkse operaties en innovatie cruciaal. Veranderingen en nieuwe projecten kunnen veel van je team vergen, wat risico’s met zich meebrengt voor de continuïteit van je operationele processen. Bij Vosteq bieden we projectmanagement dat specifiek gericht op is verandering en innovatie. We ondersteunen jouw organisatie bij veranderingen en innovaties zonder de kernactiviteiten te verstoren.</p>
          <h2 className='pt-8 text-paars max-md:text-2xl'>Verlichten van de druk</h2>
          <p className='text-diepgrijs'>In de maakindustrie is de balans tussen dagelijkse operaties en innovatie cruciaal. Veranderingen en nieuwe projecten kunnen veel van je team vergen, wat risico’s met zich meebrengt voor de continuïteit van je operationele processen. Bij Vosteq bieden we projectmanagement dat specifiek gericht op is verandering en innovatie. We ondersteunen jouw organisatie bij veranderingen en innovaties zonder de kernactiviteiten te verstoren.</p>
        </div>
        <div className="md:w-1/2 container relative pb-16">
          <DecoRight imageSrc='/images/projectmanagement.webp' />
        </div>
      </div>
      <WerkStappen accordionItems={accordionItems} />
      <WatLevertHetOp omschrijving='Dankzij ons projectmanagement:' steps={steps} />
      <BottomCta titel='Wil je innovaties implementeren zonder je operaties te verstoren?' paragraph='Neem dan vandaag nog contact met ons op en ontdek hoe ons projectmanagement ervoor zorgt dat de veranderingen in jouw bedrijf écht gaan werken!' />
    </div>
  );
}