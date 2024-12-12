import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';

const defaultTitle = 'Hoe gaan we te werk?';

export default function WerkStappen(props: {
  title?: string;
  accordionItems: { value: string, stap: string, title: string, description: string }[];
}) {

  const title = props.title || defaultTitle;

  return(
    <div className='bg-gradient-to-b from-paars to-groen from-30% max-lg:mb-16'>
        <div className='container flex flex-col lg:flex-row py-16'>
          <div className='lg:w-1/2 flex flex-col gap-8 justify-center'>
            <h2 className='text-wit max-lg:text-2xl'>{title}</h2>
            <Image className='object-cover py-4 max-lg:hidden system-white' src="/images/systeem.svg" alt='Het systeem van Vosteq' height={80} width={370} />
          </div>
          <Accordion type='single' collapsible className='lg:w-1/2'>
            {props.accordionItems.map((item, index) => (
              <AccordionItem value={item.value} className='my-2' key={index}>
                <AccordionTrigger className='text-wit text-sm lg:text-lg hover:text-geel'><div className='flex'><p className='pr-2 font-bold'>{item.stap}</p>{item.title}</div></AccordionTrigger>
                <AccordionContent className='lg:text-base text-wit my-4'>
                  {item.description}
                </AccordionContent>
                <Separator className='bg-wit' />
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
  )
}

export { WerkStappen };