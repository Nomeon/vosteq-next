"use client";

import { useState, useRef } from "react";
import { Badge3D } from "./badge";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ReCAPTCHA from "react-google-recaptcha";
import { formSchema } from "./schema";
import { saveFormSubmission } from "./actions";

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
            Op <b>25 september </b>vierden we samen met ruim 150 gasten het 20-jarig
            jubileum van Vosteq. Een bijzonder moment dat we hebben aangegrepen
            om iets terug te geven aan de mensen die het verschil maken in de
            maakindustrie. Ode aan de Makers werd een dag vol inspiratie,
            ontmoetingen en waardevolle inzichten. Samen hebben we werk gemaakt
            van morgen. Tijdens het evenement is veel waardevolle informatie
            gedeeld. Daar gaan we actief mee aan de slag en daar komen we zeker
            bij je op terug. Het was een schitterende dag en dat hebben we
            vastgelegd in de aftermovie. Beleef de hoogtepunten opnieuw of
            ontdek wat je gemist hebt.
          </p>
          <p className="pt-8 font-aktiv-grotesk-extended">
            Wil je op de hoogte blijven van de nieuwe ontwikkelingen bij Vosteq?
            Meld je aan voor onze nieuwsbrief.
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

      {/* Aftermovie Section */}
      <div className="container py-16">
        <div className="flex flex-col items-center gap-8">
          <h2 className="text-paars w-full text-left">Bekijk de aftermovie</h2>
          <div className="w-full aspect-video">
            <video
              className="w-full h-full object-cover border border-border shadow-xl rounded-xl"
              controls
              preload="metadata"
            >
              <source src="/aftermovie.mp4" type="video/mp4" />
              Je browser ondersteunt geen video.
            </video>
          </div>
        </div>
      </div>

      {!submitted ? (
        <div
          id="aanmeldformulier"
          className="flex flex-col items-center justify-center w-full h-full container mb-8"
        >
          <div className="container xl:w-2/3 border border-donkergroen p-8 my-8">
            <div className="flex flex-col justify-center items-center gap-4 mb-8">
              <h1 className="text-paars text-2xl">Nieuwsbrief</h1>
              <p className="text-paars text-center font-aktiv-grotesk-extended">
                Op de hoogte blijven van de nieuwe ontwikkelingen bij Vosteq?
                Meld je aan voor onze nieuwsbrief
              </p>
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-8"
              >
                <div className="flex flex-col gap-8">
                  <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                    <h2 className="text-paars text-lg -mb-4 md:col-span-2">
                      Gegevens
                    </h2>
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
