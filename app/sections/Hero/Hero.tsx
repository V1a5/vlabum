"use client";

import { MarqueeRibbon } from "../../components/Hero/MarqueeRibbon";
import { heroData } from "../../data/hero";

export function Hero() {
  return (
    <section
      id="Home"
      className="relative w-full min-h-[calc(100vh-4rem)] bg-black overflow-hidden flex flex-col justify-between select-none"
    >
      {/* =========================================================
    BACKGROUND FOTO (ROTATE 90 + FULL SCREEN + EFEK ANTI PECAH)
========================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center bg-black">
        {/* Foto yang diputar 90 derajat dan di-scale agar penuh menutupi layar */}
        <img
          src={heroData.bgImage}
          alt="VLABUM Background"
          className="w-[160vh] h-[100vw] max-w-none object-cover rotate-70 scale-110 blur-[2px] grayscale contrast-125 brightness-75"
        />

        {/* Layer 1: Tekstur Film Grain / Noise Analog (Menyamarkan piksel foto yang di-zoom) */}
        <div
          className="absolute inset-0 opacity-40 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Layer 2: Halftone Dots + Vignette Gelap-Merah khas Persona 5 */}
        <div className="absolute inset-0 bg-halftone-dots opacity-75" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, rgba(217, 13, 13, 0.25) 0%, rgba(0, 0, 0, 0.78) 85%)",
          }}
        />
      </div>

      {/* =========================================================
          DEKORASI ATAS (Responsif untuk Tablet 700px & Desktop)
      ========================================================= */}
      {/* Kiri Atas: Pita Merah-Putih + Keyboard */}
      <div className="hidden sm:block absolute top-14 md:top-20 -left-16 md:-left-12 z-10 pointer-events-none">
        <div className="relative -rotate-24">
          <div className="w-52 md:w-72 lg:w-80 h-16 md:h-22 bg-pale-cream translate-y-3 -translate-x-2 shadow-comic" />
          <div className="absolute top-0 left-0 w-52 md:w-72 lg:w-80 h-16 md:h-22 bg-red shadow-comic" />
          <img
            src={heroData.assets.piano}
            alt="Keyboard"
            className="absolute -top-6 md:-top-10 left-14 md:left-16 w-40 md:w-64 lg:w-80 h-auto rotate-36 drop-shadow-[-4px_6px_0px_#000000]"
          />
        </div>
      </div>

      {/* Kanan Atas: Pita Merah-Putih + Mic */}
      <div className="hidden sm:block absolute top-16 md:top-24 -right-16 md:-right-12 z-10 pointer-events-none">
        <div className="relative -rotate-16">
          <div className="w-56 md:w-80 lg:w-96 h-16 md:h-22 bg-pale-cream translate-y-3 translate-x-6 shadow-comic" />
          <div className="absolute top-0 left-0 w-56 md:w-80 lg:w-96 h-16 md:h-22 bg-red shadow-comic" />
          <img
            src={heroData.assets.mic}
            alt="Microphone"
            className="absolute -top-10 md:-top-16 left-6 md:left-4 w-36 md:w-56 lg:w-72 h-auto rotate-24 drop-shadow-[-4px_6px_0px_#000000]"
          />
        </div>
      </div>

      {/* =========================================================
          KONTEN TENGAH (Logo VLABUM + Tombol CTA + Bass & Gitar)
      ========================================================= */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-4 pt-12 pb-8 sm:pt-24 md:pt-32">
        <div className="relative flex flex-col items-center max-w-4xl w-full">
          {/* Aset Bass (Kiri Bawah Logo) */}
          <img
            src={heroData.assets.bass}
            alt="Bass Guitar"
            className="hidden sm:block absolute -left-6 md:-left-10 lg:-left-28 -bottom-10 md:-bottom-14 w-36 md:w-56 lg:w-88 h-auto rotate-60 pointer-events-none drop-shadow-[-6px_6px_0px_#000000]"
          />

          {/* Aset Gitar (Kanan Bawah Logo) */}
          <img
            src={heroData.assets.guitar}
            alt="Electric Guitar"
            className="hidden sm:block absolute -right-6 md:-right-12 lg:-right-36 -bottom-14 md:-bottom-20 w-40 md:w-60 lg:w-92 h-auto -rotate-20 pointer-events-none drop-shadow-[-6px_6px_0px_#000000]"
          />

          {/* Logo Utama */}
          <div className="relative w-full h-44 sm:h-56 md:h-72 lg:h-88 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <img
                src={heroData.logo}
                alt="VLABUM Logo"
                className="w-64 sm:w-80 md:w-105 lg:w-135 h-auto object-contain sm:scale-110 lg:scale-125 drop-shadow-[0_8px_16px_rgba(0,0,0,0.85)]"
              />
            </div>
          </div>

          {/* Tombol CTA (Play The Music & About Us) */}
          <div className="mt-4 sm:mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-7 w-full sm:w-auto">
            <a
              href={heroData.cta.primary.href}
              className="w-full max-w-[260px] sm:w-auto inline-flex items-center justify-center -rotate-3 sm:-rotate-4 gap-2.5 bg-red text-pale-cream font-bangers text-lg sm:text-xl md:text-2xl tracking-wider px-6 md:px-8 py-2.5 md:py-3 border-4 border-black shadow-comic
                transform-gpu will-change-transform [backface-visibility:hidden]
                transition-[translate,rotate,background-color,color] duration-200 ease-out
                hover:-translate-y-1 hover:bg-yellow hover:rotate-2 hover:text-black active:translate-y-0"
            >
              <span className="text-sm md:text-base">▶</span>
              {heroData.cta.primary.label}
            </a>

            <a
              href={heroData.cta.secondary.href}
              className="w-full max-w-[260px] sm:w-auto inline-flex items-center justify-center rotate-2 sm:rotate-3 gap-2.5 bg-pale-cream text-black font-bangers text-lg sm:text-xl md:text-2xl tracking-wider px-6 md:px-8 py-2.5 md:py-3 border-4 border-black shadow-comic
                transform-gpu will-change-transform [backface-visibility:hidden]
                transition-[translate,rotate,background-color,color] duration-200 ease-out
                hover:-translate-y-1 hover:bg-yellow hover:-rotate-2 active:translate-y-0"
            >
              {heroData.cta.secondary.label}
              <span className="text-lg md:text-xl">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* =========================================================
          PITA BAWAH MENYILANG
      ========================================================= */}
      <div className="relative z-30 w-full h-36 sm:h-44 md:h-52 pointer-events-none">
        {/* Pita 1: Merah (Jalan ke Kanan) */}
        <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 -left-8 -right-8 bg-red border-y-4 border-black py-2 sm:py-2.5 md:py-3 rotate-3 shadow-comic-lg overflow-hidden">
          <MarqueeRibbon
            items={heroData.ribbonRed}
            separatorColor="text-pale-cream"
            direction="right"
            speedSeconds={30}
            className="font-bangers text-lg sm:text-xl md:text-3xl tracking-wider text-black"
          />
        </div>

        {/* Pita 2: Hitam Filmstrip (Jalan ke Kiri) */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-5 -left-8 -right-8 bg-black border-t-4 border-pale-cream pt-2.5 sm:pt-3.5 md:pt-4 -rotate-2 shadow-[0_-6px_20px_rgba(0,0,0,0.8)] overflow-hidden">
          <MarqueeRibbon
            items={heroData.ribbonBlack}
            separatorColor="text-red"
            direction="left"
            speedSeconds={25}
            className="font-bangers text-2xl sm:text-3xl md:text-5xl tracking-wider text-pale-cream"
          />

          <div
            className="mt-2 sm:mt-2.5 md:mt-3 w-full h-2 sm:h-2.5 md:h-6"
            style={{
              backgroundImage:
                "repeating-linear-gradient(-60deg, #F3EFDF 0px, #F3EFDF 18px, transparent 18px, transparent 34px)",
            }}
          />
        </div>
      </div>
    </section>
  );
}