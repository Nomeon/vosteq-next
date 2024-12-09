'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  Select, 
  SelectValue, 
  SelectTrigger, 
  SelectContent, 
  SelectItem,
  SelectGroup,
  SelectLabel
} from '@/components/ui/select'

const topicItems = [
  {
    name: "Innovatie, markt en strategie",
    items: [
      {
        itemName: 'Groei',
        value: 'ims-groei'
      },
      {
        itemName: 'Strategie',
        value: 'ims-strategie'
      },
      {
        itemName: 'Commercie en servitisatie',
        value: 'ims-commercie'
      },
      {
        itemName: 'Duurzaamheid',
        value: 'ims-duurzaamheid'
      },
      {
        itemName: 'Verhoging toegevoegde waarde',
        value: 'ims-toegevoegde-waarde'
      },
      {
        itemName: 'Innovatie, toepassen nieuwe technologie',
        value: 'ims-innovatie'
      }
    ]
  },
  {
    name: "Digitalisering en IT",
    items: [
      {
        itemName: 'Planning / ERP',
        value: 'dit-planning'
      },
      {
        itemName: 'Digitalisering / data / AI in productie',
        value: 'dit-digitalisering'
      }
    ]
  },
  {
    name: "Operations, productie & supply chain",
    items: [
      {
        itemName: 'Verhoging flexibiliteit en wendbaarheid',
        value: 'ops-flexibiliteit'
      },
      {
        itemName: 'Procesoptimalisatie',
        value: 'ops-procesoptimalisatie'
      },
      {
        itemName: 'Automatisering / robotisering',
        value: 'ops-automatisering'
      },
      {
        itemName: 'Lean manufacturing',
        value: 'ops-lean'
      },
      {
        itemName: 'Kwaliteit / kennisborging',
        value: 'ops-kwaliteit'
      },
      {
        itemName: 'Supply chain / logistiek',
        value: 'ops-supply-chain'
      },
      {
        itemName: 'Smart manufacturing',
        value: 'ops-smart-manufacturing'
      },
      {
        itemName: 'Industrie 4.0',
        value: 'ops-industrie40'
      }
    ]
  },
  {
    name: "Organisatie en leiderschap",
    items: [
      {
        itemName: 'Meer uit mens en organisatie',
        value: 'ol-mens'
      },
      {
        itemName: 'Projectmanagement ondersteuning',
        value: 'ol-projectmanagement'
      },
      {
        itemName: 'Expertise ondersteuning',
        value: 'ol-organisatieontwikkeling'
      },
    ]
  },
  {
    name: "Overig",
    items: [
      {
        itemName: 'Omschrijf je vraag in het bericht',
        value: 'overig'
      }
    ]
  }
]

export const formSchema = z.object({
  topic: z.string({
    required_error: 'Kies een topic',
  }).min(1, {
    message: 'Kies een topic',
  }),
  naam: z.string({
    required_error: 'Vul je naam in',
  }).min(3, {
    message: 'Naam moet minimaal 3 tekens bevatten',
  }).max(50, {
    message: 'Naam kan maximaal 50 tekens bevatten',
  }),
  onderwerp: z.string({
    required_error: 'Vul een onderwerp in',  
  }).min(3, {
    message: 'Onderwerp moet minimaal 3 tekens bevatten',
  }).max(50, {
    message: 'Onderwerp kan maximaal 50 tekens bevatten',
  }),
  email: z.string({
    required_error: 'Vul je e-mailadres in',
  }).email({
    message: 'Dit is geen geldig e-mailadres',
  }),
  telefoonnummer: z.string(),
  bericht: z.string().min(10, {
    message: 'Bericht moet minimaal 10 tekens bevatten',
  }).max(500, {
    message: 'Bericht kan maximaal 500 tekens lang zijn',
  })
})

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: '',
      naam: '',
      onderwerp: '',
      email: '',
      telefoonnummer: '',
      bericht: '',
    }
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log('data: ', data)
  }

  return (
    <div className='xl:w-2/3 border border-donkergroen p-8 xl:p-16'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-4 pb-16'>
        <h2 className='text-paars font-light'>Neem contact op</h2>
        <p className='text-destructive font-aktiv-grotesk-extended'>*Invullen van dit veld is vereist</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-8">
          <div className='flex flex-col md:flex-row w-full gap-4 items-center'>
            <p className='text-paars text-base font-medium whitespace-nowrap font-aktiv-grotesk-extended'>Ik heb interesse in:*</p>
            <FormField control={form.control} name="topic" render={({ field }) => (
              <FormItem className='w-full'>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Kies een topic" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {topicItems.map((item) => (
                      <SelectGroup key={`select-${item.name}`}>
                        <SelectLabel className='text-paars font-aptos'>{item.name}</SelectLabel>
                        {item.items.map((subItem) => (
                          <SelectItem className='font-aptos' key={`select-${item.name}-${subItem.value}`} value={subItem.value}>{subItem.itemName}</SelectItem>
                        ))}
                      </SelectGroup>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage className='absolute' />
              </FormItem>
            )} />
          </div>
          <div className='flex flex-col md:flex-row gap-8 md:gap-16 w-full'>
            <FormField control={form.control} name="naam" render={({ field }) => (
              <FormItem className='w-full'>
                <FormControl>
                  <Input placeholder="Naam*" {...field} />
                </FormControl>
                <FormMessage className='absolute'/>
              </FormItem>
            )} />
            <FormField control={form.control} name="onderwerp" render={({ field }) => (
              <FormItem className='w-full'>
                <FormControl>
                  <Input placeholder="Onderwerp*" {...field} />
                </FormControl>
                <FormMessage className='absolute' />
              </FormItem>
            )} />
          </div>
          <FormField control={form.control} name="email" render={({ field }) => (
            <FormItem className=''>
              <FormControl>
                <Input placeholder="E-mailadres*" {...field} />
              </FormControl>
              <FormMessage className='absolute'/>
            </FormItem>
          )} />
          <FormField control={form.control} name="telefoonnummer" render={({ field }) => (
            <FormItem className=''>
              <FormControl>
                <Input placeholder="Telefoonnummer" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <h3 className='text-paars pt-8'>Bericht</h3>
          <FormField control={form.control} name="bericht" render={({ field }) => (
            <FormItem className='-mt-4'>
              <FormControl>
                <Textarea placeholder='...' {...field} />
              </FormControl>
              <FormMessage className='absolute' />
            </FormItem>
          )} />
          <div className='pt-8'>
            <button type='submit' className="btn-solid">Verzenden</button>
          </div>
        </form>
      </Form>
    </div>
  )
}
