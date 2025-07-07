"use client";

import { useState, useRef } from "react";
import { Badge3D } from "./badge";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ReCAPTCHA from "react-google-recaptcha";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { saveFormSubmission } from "./actions";

const items = [
  {
    id: "inspiratie",
    label: "Veel inspiratie opdoen",
  },
  {
    id: "praktische-tips",
    label: "Praktische tips waar ik direct mee aan de slag kan",
  },
  {
    id: "oplossingsrichting",
    label: "Een oplossingsrichting voor MKB-uitdagingen",
  },
  {
    id: "gezellige-middag",
    label: "Gewoon een gezellige middag",
  },
  {
    id: "nieuwe-mensen",
    label: "Nieuwe mensen ontmoeten",
  },
  {
    id: "inzicht-trends",
    label: "Inzicht in trends of ontwikkelingen in mijn vakgebied",
  },
  {
    id: "beter-beeld-vosteq",
    label: "Een beter beeld krijgen van wat Vosteq doet",
  },
  {
    id: "sparren-ideeën",
    label: "Sparren over ideeën of plannen",
  },
  {
    id: "kennis-maken-partner",
    label: "Kennis maken met Vosteq als mogelijke partner",
  },
  {
    id: "frisse-blik",
    label: "Een frisse blik op mijn situatie of organisatie",
  },
  {
    id: "leren-ervaringen-anderen",
    label: "Leren van de ervaringen van anderen",
  },
  {
    id: "bevestiging-goede-weg",
    label: "Bevestiging dat ik op de goede weg zit",
  },
  {
    id: "verrassen",
    label: "Niks, ik laat me gewoon verrassen",
  },
] as const;

const inspirations = [
  {
    id: "strategie",
    label:
      "Strategie. Wat als je strategie niet meer werkt - maar niemand het zegt?",
  },
  {
    id: "veranderen",
    label:
      "Veranderen. Wat als je visie werkelijkheid wordt - en jij weer écht kunt ondernemen?  ",
  },
  {
    id: "empoweren",
    label:
      "Empoweren. Wat als iedereen gaat bijdragen - zonder dat je hoeft te duwen?",
  },
] as const;

export const formSchema = z.object({
  bedrijfsnaam: z.string(),
  voornaam: z
    .string()
    .min(1, "Voornaam is verplicht")
    .max(20, "Voornaam mag maximaal 20 tekens bevatten"),
  achternaam: z
    .string()
    .min(1, "Achternaam is verplicht")
    .max(20, "Achternaam mag maximaal 20 tekens bevatten"),
  functie: z.string().optional(),
  email: z
    .string()
    .email("Ongeldig e-mailadres")
    .min(1, "E-mailadres is verplicht"),
  telefoonnummer: z.string().optional(),
  // items: z.array(z.string()).min(3, "Selecteer minimaal 3 opties"),
  inspirations: z.array(z.string()).max(2, "Selecteer maximaal 2 opties"),
  nieuwsbrief: z.boolean().optional(),
  beeldmateriaal: z.boolean().optional(),
});

export default function Page() {
  const [submitted, setSubmitted] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsVerified] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bedrijfsnaam: "",
      voornaam: "",
      achternaam: "",
      functie: "",
      email: "",
      telefoonnummer: "",
      // items: [],
      inspirations: [],
      nieuwsbrief: false,
      beeldmateriaal: false,
    },
  });

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
    const loopsResp = await saveFormSubmission(data);
    if (!loopsResp.success) {
      console.error("Error saving form submission:", loopsResp.message);
      setErrorMessage(
        "Er is iets misgegaan. Probeer het opnieuw of neem contact op met s.nijhuis@vosteq.nl"
      );
      return;
    }

    setErrorMessage(null);
    setFirstName(data.voornaam);
    setLastName(data.achternaam);
    setCompanyName(data.bedrijfsnaam);
    setSubmitted(true);
  }

  return (
    <div className="flex flex-col">
      <div className="container flex flex-col lg:flex-row gap-16 lg:gap-32 lg:py-16 py-4">
        <div className="lg:w-1/2 flex flex-col gap-4">
          <h1 className="text-paars">Ode aan de makers</h1>
          <p className="font-aktiv-grotesk-extended text-paars">
            Op <b>25 september 2025</b> vieren we het 20-jarig jubileum van
            Vosteq met een ode aan jou - de maker. Geen lange speeches, maar
            interactieve workshops, beeldende klantverhalen en volop ruimte om
            elkaar te ontmoeten en in gesprek te gaan. Scroll naar beneden om je
            aan te melden, of klik op de knop.
          </p>
          <button
            aria-label="aanmeldformulier"
            className="btn-solid w-fit"
            onClick={() => {
              document.querySelector("#aanmeldformulier")?.scrollIntoView({
                block: "center",
                behavior: "smooth",
              });
            }}
          >
            Aanmelden
          </button>
          <h3 className="pt-8 text-paars max-lg:text-2xl">Het programma</h3>
          <ul className="text-diepgrijs font-aktiv-grotesk-extended space-y-1 font-light">
            <li>
              <span className="mr-4">13:00 uur</span>Inloop met smakelijke
              ontvangst
            </li>
            <li>
              <span className="mr-4">13:30 uur</span>Morgen wordt vandaag
              bedacht
            </li>
            <li>
              <span className="mr-4">13:45 uur</span>Verandering in beeld
            </li>
            <li>
              <span className="mr-4">14:15 uur</span>Inspirerende sessies
            </li>
            <li>
              <span className="mr-4">15:45 uur</span>Op reis naar de toekomst
            </li>
            <li>
              <span className="mr-4">16:15 uur</span>Een ode aan de makers
            </li>
            <li>
              <span className="mr-4">17:00 uur</span>Netwerken, voor de
              verandering
            </li>
            <li>
              <span className="mr-4">17:30 uur</span>Tijd om morgen werk te
              maken van vandaag
            </li>
          </ul>
        </div>
        <div className="lg:w-1/2 container relative pb-16">
          <div className="relative sm:w-full md:w-2/3 lg:w-full aspect-[18/21]">
            <div
              className="absolute left-[7.1%] right-[9.33%] border-border border bg-cover bg-center top-0 bottom-0 shadow-xl bg-gradient-to-r from-[#6ABEC0] to-[#88268E]"
              style={{
                backgroundImage: `url(${"/images/ode-aan-de-makers.png"})`,
              }}
            />
          </div>
        </div>
      </div>
      {!submitted ? (
        <div
          id="aanmeldformulier"
          className="flex flex-col items-center justify-center w-full h-full container mb-8"
        >
          <div className="container xl:w-2/3 border border-donkergroen p-8 my-8">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
              <h1 className="text-paars text-2xl">Aanmeldformulier</h1>
              <p className="text-paars text-2xl font-aktiv-grotesk-extended font-semibold">
                "Ode aan de Makers"
              </p>
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-8"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-full flex flex-col gap-8">
                    <h2 className="text-paars text-lg -mb-4">Gegevens</h2>
                    <FormField
                      control={form.control}
                      name="voornaam"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormControl>
                            <Input placeholder="Voornaam*" {...field} />
                          </FormControl>
                          <FormMessage className="absolute" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="achternaam"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormControl>
                            <Input placeholder="Achternaam*" {...field} />
                          </FormControl>
                          <FormMessage className="absolute" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="bedrijfsnaam"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormControl>
                            <Input placeholder="Bedrijfsnaam*" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="functie"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormControl>
                            <Input placeholder="Functie" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="">
                          <FormControl>
                            <Input placeholder="E-mailadres*" {...field} />
                          </FormControl>
                          <FormMessage className="absolute" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="telefoonnummer"
                      render={({ field }) => (
                        <FormItem className="">
                          <FormControl>
                            <Input placeholder="Telefoonnummer" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-full flex flex-col gap-4">
                    {/* <FormField
                      control={form.control}
                      name="items"
                      render={({ field }) => (
                        <FormItem className="w-full space-y-4">
                          <h2 className="text-paars text-lg -mb-2">
                            Wat verwacht ik van het event?
                          </h2>
                          <p className="text-xs font-aktiv-grotesk-extended">
                            Selecteer minimaal 3 verwachtingen, (
                            {field.value.length} geselecteerd)*
                          </p>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <button
                                type="button"
                                className="btn-solid text-xs"
                              >
                                Selecteer verwachtingen
                              </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-80 overflow-y-auto">
                              <DropdownMenuLabel>
                                Selecteer minimaal 3 opties
                              </DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              {items.map((item) => (
                                <DropdownMenuCheckboxItem
                                  key={item.id}
                                  checked={field.value.includes(item.id)}
                                  onSelect={(e) => e.preventDefault()}
                                  onCheckedChange={(checked) => {
                                    if (checked) {
                                      field.onChange([...field.value, item.id]);
                                    } else {
                                      field.onChange(
                                        field.value.filter((v) => v !== item.id)
                                      );
                                    }
                                  }}
                                >
                                  {item.label}
                                </DropdownMenuCheckboxItem>
                              ))}
                            </DropdownMenuContent>
                          </DropdownMenu>
                          <FormMessage />
                        </FormItem>
                      )}
                    /> */}
                    <FormField
                      control={form.control}
                      name="inspirations"
                      render={({ field }) => (
                        <FormItem className="w-full space-y-4">
                          <h2 className="text-paars text-lg -mb-2">
                            Voorkeur voor inspirerende sessies?
                          </h2>
                          <p className="text-xs font-aktiv-grotesk-extended">
                            Selecteer 2 inspirerende sessies. We proberen zoveel
                            mogelijk rekening te houden met je voorkeuren, maar
                            vol = vol. ({field.value.length} geselecteerd)*
                          </p>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <button
                                type="button"
                                className="btn-solid text-xs"
                              >
                                Selecteer sessies
                              </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-80 overflow-y-auto">
                              <DropdownMenuLabel>
                                Selecteer maximaal 2 opties
                              </DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              {inspirations.map((item) => {
                                const [firstWord, ...rest] =
                                  item.label.split(" ");
                                return (
                                  <DropdownMenuCheckboxItem
                                    key={item.id}
                                    checked={field.value.includes(item.id)}
                                    onSelect={(e) => e.preventDefault()}
                                    onCheckedChange={(checked) => {
                                      if (checked) {
                                        field.onChange([
                                          ...field.value,
                                          item.id,
                                        ]);
                                      } else {
                                        field.onChange(
                                          field.value.filter(
                                            (v) => v !== item.id
                                          )
                                        );
                                      }
                                    }}
                                  >
                                    <p>
                                      <span className="font-semibold">
                                        {firstWord}
                                      </span>{" "}
                                      {rest.join(" ")}
                                    </p>
                                  </DropdownMenuCheckboxItem>
                                );
                              })}
                            </DropdownMenuContent>
                          </DropdownMenu>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex flex-col items-start gap-2">
                      <FormField
                        control={form.control}
                        name="nieuwsbrief"
                        render={({ field }) => (
                          <FormItem className="flex items-center gap-2">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                className="rounded-none mt-2"
                              />
                            </FormControl>
                            <FormLabel className="font-light text-diepgrijs text-sm text-center font-aktiv-grotesk-extended">
                              Ik wil graag de nieuwsbrief ontvangen
                            </FormLabel>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="beeldmateriaal"
                        render={({ field }) => (
                          <FormItem className="flex items-center gap-2">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                className="rounded-none"
                              />
                            </FormControl>
                            <FormLabel className="font-light text-diepgrijs text-sm font-aktiv-grotesk-extended">
                              Ik ga ermee akkoord dat Vosteq beeldmateriaal
                              gebruikt dat tijdens het event is gemaakt en
                              waarop ik mogelijk te zien ben.
                            </FormLabel>
                          </FormItem>
                        )}
                      />
                      {!form.getValues("beeldmateriaal") && (
                        <div className="text-xs italic text-paars flex flex-col gap-2">
                          <p>
                            “Je hebt nog geen akkoord gegeven voor het gebruik
                            van beeldmateriaal (foto en video) waarop je
                            mogelijk herkenbaar of onherkenbaar in beeld bent.
                            Tijdens het event worden opnames gemaakt die
                            uitsluitend worden ingezet voor terugblikken,
                            sfeerimpressies en promotionele uitingen van Vosteq.
                            We gaan uiteraard zorgvuldig om met het
                            beeldmateriaal.
                          </p>
                          <p>
                            Mocht je principiële bezwaren hebben of andere
                            zwaarwegende redenen om niet in beeld te willen
                            komen, neem dan gerust contact op met Ingrid Genger
                            via{" "}
                            <a
                              className="font-bold underline"
                              href="mailto:i.genger@vosteq.nl"
                            >
                              i.genger@vosteq.nl
                            </a>
                            .
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="pt-8 flex flex-col md:flex-row items-start md:items-end gap-4 justify-between">
                  <button
                    type="submit"
                    disabled={!isVerified}
                    className="btn-solid"
                  >
                    Verzenden
                  </button>
                  <ReCAPTCHA
                    className="z-50 max-md:scale-75 origin-left"
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                    ref={recaptchaRef}
                    onChange={handleChange}
                    onExpired={handleExpired}
                  />
                </div>
                {errorMessage && (
                  <div className="text-red-600 text-sm font-semibold mb-4">
                    {errorMessage}
                  </div>
                )}
              </form>
            </Form>
          </div>
        </div>
      ) : (
        <>
          <div className="flex h-[calc(100vh-8rem)] items-center justify-center gap-4 container flex-col lg:flex-row">
            <div className="h-1/3 lg:h-full flex flex-col w-full lg:w-1/2 justify-center items-center gap-8">
              <h1 className="text-paars text-2xl max-lg:text-center">
                Bedankt voor je aanmelding!
              </h1>
              <p className="text-paars text-base lg:text-xl font-aktiv-grotesk text-center">
                Houd je mail in de gaten — binnenkort ontvang je meer informatie
                over Ode aan de makers op 25 september. Noteer de datum alvast
                in de agenda. We kijken uit naar je komst.
              </p>
            </div>
            <div className="w-full lg:w-1/2 h-2/3 lg:h-full max-lg:h-96">
              <Badge3D
                firstName={firstName}
                lastName={lastName}
                companyName={companyName}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
