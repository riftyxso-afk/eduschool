import type { Metadata } from "next";
import ProgramsClient from "./ProgramsClient";

export const metadata: Metadata = {
  title: "Program Akademik",
};

export default function ProgramsPage() {
  return <ProgramsClient />;
}
