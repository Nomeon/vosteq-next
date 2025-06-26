"use client";

import { useState, useRef } from "react";
import { Badge3D } from "./badge";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ReCAPTCHA from "react-google-recaptcha";

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

const formSchema = z.object({
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
  items: z.array(z.string()).min(3, "Selecteer minimaal 3 opties"),
});

export default function Page() {
  const [submitted, setSubmitted] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsVerified] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bedrijfsnaam: "",
      voornaam: "",
      achternaam: "",
      functie: "",
      email: "",
      telefoonnummer: "",
      items: [],
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
    setFirstName(data.voornaam);
    setLastName(data.achternaam);
    setCompanyName(data.bedrijfsnaam);
    setSubmitted(true);
  }

  return (
    <div className="flex">
      {!submitted ? (
        <div className="flex flex-col items-center justify-center w-full h-full container">
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
                    <h2 className="text-paars text-xl -mb-4">Gegevens</h2>
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
                  <FormField
                    control={form.control}
                    name="items"
                    
                    render={() => (
                      <FormItem className="w-full">
                        <h2 className="text-paars text-xl mb-2">
                          Wat verwacht ik van het event?
                        </h2>
                        {items.map((item) => (
                          <div className="pt-2" key={item.id}>
                            <FormField
                              key={item.id}
                              control={form.control}
                              name="items"
                              render={({ field }) => {
                                return (
                                  <FormItem
                                    key={item.id}
                                    className="flex flex-row items-center relative"
                                  >
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(item.id)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([
                                                ...field.value,
                                                item.id,
                                              ])
                                            : field.onChange(
                                                field.value?.filter(
                                                  (value) => value !== item.id
                                                )
                                              );
                                        }}
                                      />
                                    </FormControl>
                                    <p className="font-aktiv-grotesk text-xs absolute left-6 -top-2">
                                      {item.label}
                                    </p>
                                  </FormItem>
                                );
                              }}
                            />
                          </div>
                        ))}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
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
              </form>
            </Form>
          </div>
        </div>
      ) : (
        <>
          <div className="flex h-[calc(100vh-8rem)] items-center justify-center gap-4 container">
            <div className="h-full flex flex-col w-1/2 justify-center items-center gap-8">
              <h1 className="text-paars text-2xl">Bedankt voor je aanmelding!</h1>
              <p className="text-paars text-xl font-aktiv-grotesk text-center">
                We kijken ernaar uit je te zien op 25 september 2025 bij
              </p>
              <p className="text-center text-paars text-2xl font-aktiv-grotesk-extended font-semibold">
                "Ode aan de Makers"
              </p>
            </div>
            <div className="w-1/2 h-full">
              <Badge3D firstName={firstName} lastName={lastName} companyName={companyName} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
