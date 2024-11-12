import Image from 'next/image';
import { Popup } from '@/components/ui/popup';
import type { Metadata } from "next";
import { WatLevertHetOp } from "@/components/vosteq/wat-levert-het-op";
import { WerkStappen } from '@/components/vosteq/werk-stappen';
import { BottomCta } from '@/components/vosteq/bottom-cta';

export const metadata: Metadata = {
  title: "Vosteq | Waarden en normen",
  description: "Aan het bouwen!",
};

export default function WaardenEnNormen() {
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
      description: "We behandelen onze klanten, partners en collega's met respect. We bouwen aan vertrouwen door consistent te leveren wat we beloven."
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
      description: 'We nemen verantwoordelijkheid voor onze acties en hun impact op jouw bedrijf en de samenleving. Dit betekent ook dat we onze fouten erkennen en eraan werken om deze te corrigeren.'
    }
  ]

  return (
    <div className='flex flex-col'>
      <Popup />
      <div className="container flex flex-col md:flex-row gap-16 md:gap-32 md:py-16 py-4">
        <div className="md:w-1/2 flex flex-col gap-4">
            <h1 className="text-paars">Waarden en normen</h1>
            <p className="font-aktiv-grotesk-extended text-paars">Bij Vosteq vormen onze waarden de basis van alles wat we doen. Ze sturen onze beslissingen, ons gedrag en de manier waarop we samenwerken met onze klanten in het MKB. Deze waarden zijn diepgeworteld in onze bedrijfscultuur en bepalen hoe we onszelf als een betrouwbare partner onderscheiden in de maakindustrie.</p>
            <div className="flex flex-col gap-1 font-aptos text-base">
                <p className='font-bold'>Waarde 1 - Integriteit:</p>
                <p>We handelen altijd eerlijk en transparant, zowel intern als extern. Bij Vosteq geloven we dat langdurige relaties gebaseerd zijn op vertrouwen en daarom staan we voor  onze woorden en daden.</p>
                <p className='font-bold pt-2'>Waarde 2 - Betrokkenheid:</p>
                <p>We zijn meer dan alleen een dienstverlener; we zijn een partner die zich volledig inzet voor het succes van jouw bedrijf. We voelen ons persoonlijk betrokken bij elk project en geven niet op totdat de doelen zijn bereikt.</p>
                <p className='font-bold pt-2'>Waarde 3 - Innovatie:</p>
                <p>In een wereld die voortdurend verandert, streven we ernaar om altijd voorop te lopen met innovatieve oplossingen. We moedigen creativiteit aan en zijn continu op zoek naar nieuwe manieren om processen te verbeteren en waarde toe te voegen voor onze klanten.</p>
                <p className='font-bold pt-2'>Waarde 4 - Klantgerichtheid:</p>
                <p>Jouw behoeften staan centraal in alles wat we doen. We luisteren, begrijpen jou en passen onze aanpak aan om ervoor te zorgen dat oplossingen perfect aansluiten bij de specifieke uitdagingen van jouw MKB-bedrijf.</p>
                <p className='font-bold pt-2'>Waarde 5 - Duurzaamheid:</p>
                <p>We geloven in duurzame oplossingen die niet alleen bijdragen aan het succes van vandaag, maar ook aan een betere toekomst. Dit geldt voor de manier waarop we zaken doen, de oplossingen die we aanbieden en onze inzet voor maatschappelijke verantwoordelijkheid.</p>
            </div>
        </div>
        <div className="md:w-1/2 container relative pb-16">
          <Image className='object-cover' src="/images/deskundigen.webp" alt='Deskundigen' width={650} height={550} />
        </div>
      </div>
      <WerkStappen title={'Onze normen'} accordionItems={accordionItems} />
      <BottomCta titel="Wil je samenwerken met een partner die niet alleen resultaten levert, maar dit ook doet met integriteit, betrokkenheid en een duidelijke focus op jouw behoeften? " paragraph="Neem contact met ons op en ontdek hoe onze waarden en normen het verschil kunnen maken voor jouw MKB-bedrijf." />
    </div>
  );
}