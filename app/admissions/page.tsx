import type { Metadata } from "next";
import AdmissionsClient from "./AdmissionsClient";

export const metadata: Metadata = {
  title: "Penerimaan Siswa Baru",
};

export default function AdmissionsPage() {
  return <AdmissionsClient />;
}
