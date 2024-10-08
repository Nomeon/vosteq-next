"use client"

import React, { useState } from "react";
import { z } from "zod";
import { formSchema } from "@/lib/validationSchema";

type FormError = {
  naam?: string;
  onderwerp?: string;
  email?: string;
  telefoonnummer?: string;
  bericht?: string;
};

const ContactForm = () => {

  const [formData, setFormData] = useState({
    naam: "",
    onderwerp: "",
    email: "",
    telefoonnummer: "",
    bericht: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      formSchema.parse(formData);
      console.log("Formulier is geldig!");
      setErrors("");
    } catch (e) {
      if (e instanceof z.ZodError) {
        const errorObject = e.errors.reduce((acc: FormError, curr) => {
          const key = curr.path[0] as keyof FormError; // Ensure the key is a valid FormError key
          acc[key] = curr.message;
          return acc;
        }, {});
        setErrors(errorObject);
        console.log(errorObject);
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full md:w-2/3 border border-groen px-4 py-8 md:p-16">
      <div className="flex flex-col md:flex-row pb-8 gap-2 md:justify-between md:items-center">
        <h2 className="text-paars md:text-4xl text-3xl font-normal">Neem contact op</h2>
        <p className="font-aktiv-grotesk-extended text-warning text-sm">*Invullen van dit veld is vereist</p>
      </div>
      {Object.values(errors).some(value => value) && (
        <div className="w-full border-2 border-warning p-4 flex flex-col">
          <p className="text-warning font-semibold pb-2">Let op! Wij konden uw bericht niet versturen vanwege foutmeldingen.</p>
          <p className="">De volgende velden zijn leeg of niet goed ingevuld:</p>
          <ul className="list-disc list-outside pl-6">
            {Object.entries(errors).map(([key, value]) => (
              <li key={key} className="">{String(value)}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="flex w-full flex-col md:flex-row justify-between gap-8 md:gap-16">
        <input value={formData.naam} onChange={handleChange} required name='naam' id="naam" type="text" placeholder="Naam*" className='focus:outline-none py-2 border-b border-black w-full font-aktiv-grotesk-extended' />
        <input value={formData.onderwerp} onChange={handleChange} required name='onderwerp' id="onderwerp" type="text" placeholder="Onderwerp*" className='focus:outline-none py-2 border-b border-black w-full font-aktiv-grotesk-extended' />
      </div>
      <input value={formData.email} onChange={handleChange} required name='email' id="email" type="email" placeholder="E-mailadres*" className='focus:outline-none py-2 border-b border-black w-full font-aktiv-grotesk-extended' />
      <input value={formData.telefoonnummer} onChange={handleChange} name='telefoonnummer' id="telefoonnummer" type="tel" placeholder="Telefoonnummer" className='focus:outline-none py-2 border-b border-black w-full mb-8 font-aktiv-grotesk-extended' />
      <h3 className="font-bold text-paars">Bericht</h3>
      <textarea required name='bericht' id='bericht' value={formData.bericht} onChange={handleChange} className='focus:outline-none p-2 border border-groen w-full h-36' />
      <div>
        <button type='submit' className="btn-solid">Verzenden</button>
      </div>
    </form>
  )
}

export { ContactForm };