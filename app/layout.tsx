import type { Metadata } from "next";
import "./globals.css";
import { PageGate } from "./components/PageGate";
import { Bangers, Space_Mono, Caveat } from "next/font/google";
import { Toaster } from "sonner";

const bangers = Bangers({
  weight: "400",
  variable: "--font-bangers",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  weight: "400",
  variable: "--font-space-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vlabum.vercel.app"),
  title: "VLABUM+ — Indie Band",
  description:
    "Website resmi VLABUM+. Dengarkan lagu, baca cerita di balik lirik, dan ikuti rilisan terbaru kami.",
  openGraph: {
    title: "VLABUM+ — Indie Band",
    description:
      "Dengarkan rilisan terbaru VLABUM+ dalam format pemutar kaset interaktif, lengkap dengan lirik dan cerita di balik lagu.",
    url: "https://vlabum.vercel.app",
    siteName: "VLABUM+",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "VLABUM+ Official Website",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VLABUM+ — Indie Band",
    description:
      "Dengarkan rilisan terbaru VLABUM+ dalam format pemutar kaset interaktif, lengkap dengan lirik dan cerita di balik lagu.",
    images: ["/og-image.jpeg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bangers.variable} ${spaceMono.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <PageGate>{children}</PageGate>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}