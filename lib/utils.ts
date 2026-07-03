export type Lang = "id" | "en";

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(dateStr: string, lang: Lang): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString(lang === "id" ? "id-ID" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getLangText(id: string, en: string, lang: Lang): string {
  return lang === "id" ? id : en;
}
