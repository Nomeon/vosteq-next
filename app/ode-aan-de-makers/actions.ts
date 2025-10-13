"use server";


import { z } from "zod";
import { formSchema } from "./schema";
import { LoopsClient } from "loops";

const loops = new LoopsClient(process.env.LOOPS_SECRET as string);

export async function saveFormSubmission(data: z.infer<typeof formSchema>) {
  const customProperties = {
    firstName: data.voornaam,
    lastName: data.achternaam,
    position: data.functie ?? "",
    company: data.bedrijfsnaam,
    phone: data.telefoonnummer ?? "",
    // inspirations: JSON.stringify(data.inspirations),
    // allowedPhotos: true,
    source: "Nieuwsbrief formulier"
  }

  const mailingLists = {
    "cmgkngp7b6eo20ix64v2uamks": true,
  }

  try {
    const resp: {
      success: boolean;
      id?: string;
      message?: string;
    } = await loops.updateContact(
      data.email,
      customProperties,
      mailingLists,
    )
    
    return {
      success: resp.success,
      message: resp.message,
    }
  } catch (error) {
    console.error("Error saving form submission:", error);
    return {
      success: false,
      message: "Er is een fout opgetreden bij het opslaan van uw gegevens. Probeer het later opnieuw."
    }
  }
}
