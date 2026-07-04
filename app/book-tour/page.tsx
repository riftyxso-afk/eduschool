import type { Metadata } from "next";
import BookTourClient from "./BookTourClient";

export const metadata: Metadata = {
  title: "Jadwalkan Tur Sekolah",
};

export default function BookTourPage() {
  return <BookTourClient />;
}
