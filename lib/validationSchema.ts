"use client"

import { z } from 'zod';

export const formSchema = z.object({
  naam: z.string().min(2, { message: 'De naam moet minimaal 2 karakters bevatten.' }).max(50, { message: 'De naam mag maximaal 50 karakters bevatten.' }),
  onderwerp: z.string().min(2, { message: 'Het onderwerp moet minimaal 2 karakters bevatten.' }).max(50, { message: 'Het onderwerp mag maximaal 50 karakters bevatten.' }),
  email: z.string().email(),
  telefoonnummer: z.string().optional(),
  bericht: z.string().min(10, { message: 'Het bericht moet minimaal 10 karakters bevatten.' }).max(500, { message: 'Het bericht mag maximaal 500 karakters bevatten.' }),
})