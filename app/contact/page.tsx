import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Kontak",
};

export default function ContactPage() {
  return <ContactClient />;
}
