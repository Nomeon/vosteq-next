import { Popup } from "@/components/ui/popup";
import { Metadata } from "next";
import Link from "next/link";
import DecoRight from "@/components/vosteq/deco-right";
import DecoLeft from "@/components/vosteq/deco-left";

export const metadata: Metadata = {
  title: "... | Vosteq",
  description: "...",
};

export default function OverVosteq() {
  return (
    <div className="flex flex-col items-center w-full">
      <Popup />
      <div className="w-full h-96 flex flex-col items-center justify-center gap-16 bg-gradient-to-br from-paars to-groen from-60%">
        <h1 className="text-wit">Over vosteq</h1>
        <p className="text-wit text-lg w-2/3 text-center">Wij zijn Vosteq: jouw partner in organisatieverbetering en procesoptimalisatie. Met onze kennis en ervaring helpen we jouw bedrijf naar een nieuwe toekomstbestendige horizon. Ontdek hoe we meer uit mens en machine halen.</p>
      </div>
    </div>
  )
}