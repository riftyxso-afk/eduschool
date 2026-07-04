import type { Metadata } from "next";
import AdminClient from "./AdminClient";

export const metadata: Metadata = {
  title: "Admin Panel",
  robots: "noindex, nofollow",
};

export default function AdminPage() {
  return <AdminClient />;
}
