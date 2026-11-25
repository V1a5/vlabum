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
  title: "VLABUM+",
  description: "Band Indie",
  openGraph: {
    title: "VLABUM+",
    description: "Band Indie",
    url: "https://vlabum.vercel.app",
    siteName: "VLABUM+",
    images: [
      {
        url: "/og-image.jpeg",
        alt: "VLABUM+",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VLABUM+",
    description: "Band Indie",
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