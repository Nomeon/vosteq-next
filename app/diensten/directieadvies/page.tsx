import type { Metadata } from "next";
import { Diensten } from "@/components/vosteq/diensten";

export const metadata: Metadata = {
  title: "Vosteq | Directieadvies",
  description: "Aan het bouwen!",
};

export default function Directieadvies() {
  return (
    <Diensten />
  );
}