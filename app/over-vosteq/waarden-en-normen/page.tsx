import { Popup } from '@/components/ui/popup';
import type { Metadata } from "next";
import { WatLevertHetOp } from "@/components/vosteq/wat-levert-het-op";
import DecoRight from '@/components/vosteq/deco-right';
import { WerkStappen } from '@/components/vosteq/werk-stappen';
import { BottomCta } from '@/components/vosteq/bottom-cta';

export const metadata: Metadata = {
  title: "Waarden en Normen: Betrouwbare Partner voor MKB-Maakbedrijven | Vosteq ",
  description: "Ontdek hoe de waarden en normen van Vosteq bijdragen aan duurzame groei en succes voor MKB-maakbedrijven. Lees meer over onze werkwijze. ",
};

export default function WaardenEnNormen() {
  const steps = [
    {
      'icon': 'mdi:verified',
      'title': 'Betrouwbaarheid',
      'description': 'Je kunt rekenen op een partner die zijn beloftes nakomt.'
    },
    {
      'icon': 'mdi:handshake',
      'title': 'Betrokkenheid',
      'description': 'Wij zetten ons volledig in voor jouw succes.'
    },
    {
      'icon': 'mdi:wrench',
      'title': 'Innovatie',
      'description': 'Wij bieden oplossingen die jouw bedrijf helpen voorop te blijven lopen.'
    },
    {
      'icon': 'mdi:account-group',
      'title': 'Duurzame groei',
      'description': 'Onze aanpak is gericht op blijvende waarde en maatschappelijke verantwoordelijkheid.'
    }

  ];

  const accordionItems = [
    {
      value: 'stap1',
      stap: 'Eerlijkheid en transparantie',
      title: '',
      description: 'We communiceren open en eerlijk met onze klanten en binnen ons team. We zeggen wat we doen en doen wat we zeggen.'
    },
    {
      value: 'stap2',
      stap: 'Respect en vertrouwen',
      title: '',
      description: "Wij behandelen onze klanten, partners en collega’s met respect en bouwen aan vertrouwen door consistent te leveren wat we beloven."
    },
    {
      value: 'stap3',
      stap: 'Professionaliteit',
      title: '',
      description: 'We handhaven de hoogste normen van professionaliteit in alles wat we doen. Dit betekent dat we ons werk serieus nemen, deadlines respecteren en streven naar de hoogste kwaliteit.'
    },
    {
      value: 'stap4',
      stap: 'Verantwoordelijkheid',
      title: '',
      description: 'We nemen verantwoordelijkheid voor onze acties en hun impact op jouw bedrijf en de samenleving. Dit betekent dat we onze fouten erkennen en actief werken aan het corrigeren ervan.'
    }
  ]

  return (
    <div className='flex flex-col'>
      <Popup />
      <div className="container flex flex-col lg:flex-row gap-16 lg:gap-32 lg:py-16 py-4">
        <div className="lg:w-1/2 flex flex-col gap-4">
          <p className='font-aktiv-grotesk-extended text-base text-donkergroen'>De basis van ons succes</p>
          <h1 className="text-paars">Waarden en normen</h1>
          <p className="font-aktiv-grotesk-extended text-paars">Bij Vosteq vormen onze waarden de ruggengraat van alles wat we doen. Ze sturen onze beslissingen, ons gedrag en de manier waarop we samenwerken met onze klanten in de maakindustrie. Deze waarden zijn diepgeworteld in onze bedrijfscultuur en onderscheiden ons als een betrouwbare partner voor MKB-maakbedrijven.</p>
          <div className="flex flex-col gap-1 font-aptos text-base">
              <p className='font-bold'>Integriteit:</p>
              <p>Wij handelen eerlijk en transparant, zowel intern als extern. Vertrouwen is de basis voor langdurige relaties, en daarom staan we altijd voor onze woorden en daden.</p>
              <p className='font-bold pt-2'>Betrokkenheid:</p>
              <p>Wij zijn meer dan een dienstverlener; we zijn een toegewijde partner. Onze inzet stopt niet totdat jouw doelen zijn bereikt.</p>
              <p className='font-bold pt-2'>Innovatie:</p>
              <p>In een wereld die voortdurend verandert, streven wij naar creatieve en vernieuwende oplossingen. We zoeken continu naar manieren om processen te verbeteren en meer waarde toe te voegen.</p>
              <p className='font-bold pt-2'>Klantgerichtheid:</p>
              <p>Jouw behoeften staan centraal. We luisteren, begrijpen jouw uitdagingen en passen onze aanpak daarop aan.</p>
              <p className='font-bold pt-2'>Duurzaamheid:</p>
              <p>Wij geloven in duurzame oplossingen die niet alleen vandaag impact maken, maar ook bijdragen aan een betere toekomst.</p>
          </div>
        </div>
        <div className="lg:w-1/2 container relative pb-16">
          <DecoRight imageSrc="/images/oplossingen.webp" />
        </div>
      </div>
      <WerkStappen title='Onze normen:' accordionItems={accordionItems} />
      <WatLevertHetOp omschrijving='Hoe onze waarden en normen het verschil maken:' steps={steps} />
      <BottomCta titel="Wil jij samenwerken met een partner die niet alleen resultaten levert, maar dit doet met integriteit en betrokkenheid?" paragraph="Ontdek hoe onze waarden en normen jouw bedrijf kunnen versterken. Neem vandaag nog contact met ons op!" />
    </div>
  );
}