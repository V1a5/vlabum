import type { Metadata } from "next";
import "./globals.css";
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
  title: "VLABUM+",
  description: "Band Indie",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bangers.variable} ${spaceMono.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
