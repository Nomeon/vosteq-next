'use client'

import { set, z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
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
import ReCAPTCHA from 'react-google-recaptcha'
import { useEffect, useRef, useState } from 'react'

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

function testMail() {
  fetch('/api/email-test', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
  })
}

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
  const [submitted, setSubmitted] = useState(false)
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsVerified] = useState(false);

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

  async function handleCaptchaSubmission(token: string | null) {
    try {
      if (token) {
        await fetch("/api/captcha", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });
        setIsVerified(true);
      }
    } catch (e) {
      setIsVerified(false);
    }
  }

  const handleChange = (token: string | null) => {
    handleCaptchaSubmission(token);
  };

  function handleExpired() {
    setIsVerified(false);
  }

  async function onSubmit(data: z.infer<typeof formSchema>) {
    const response = await fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    if (response.status === 200) {
      setSubmitted(true)
    } else {
      console.log(response)
    }
  }

  return (
    <div className='container xl:w-2/3 border border-donkergroen p-8 xl:p-16'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-4 pb-16'>
        <h2 className='text-paars font-light'>Neem contact op</h2>
        <p className='text-destructive font-aktiv-grotesk-extended'>*Invullen van dit veld is vereist</p>
      </div>
      {submitted ? <p className='text-paars px-4 md:px-32 py-32 items-center flex justify-center text-lg'>Bedankt voor je bericht. We nemen zo snel mogelijk contact met je op.</p> :
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
            <div className='pt-8 flex flex-col md:flex-row items-start md:items-end gap-4 justify-between'>
              <button type='submit' disabled={!isVerified} className="btn-solid">Verzenden</button>
              {/* <button onClick={testMail} type='button' className="btn-solid">Test mail</button> */}
              <ReCAPTCHA 
                className='z-50 max-md:scale-75 origin-left'
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                ref={recaptchaRef}
                onChange={handleChange}
                onExpired={handleExpired}
              />
            </div>
          </form>
        </Form>
      }
    </div>
  )
}
