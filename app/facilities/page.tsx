import type { Metadata } from "next";
import FacilitiesClient from "./FacilitiesClient";

export const metadata: Metadata = {
  title: "Fasilitas",
};

export default function FacilitiesPage() {
  return <FacilitiesClient />;
}
