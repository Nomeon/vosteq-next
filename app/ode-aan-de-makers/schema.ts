import { z } from "zod";

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