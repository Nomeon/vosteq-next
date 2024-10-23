import type { Metadata } from "next";
import { NotFoundComponent } from "@/components/nav/not-found-component";

export const metadata: Metadata = {
  title: "Vosteq | 404",
  description: "Deze pagina kon helaas niet gevonden worden...",
};


export default function NotFound() {
  return (
    <NotFoundComponent />
  )
};