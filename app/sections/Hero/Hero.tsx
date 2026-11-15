"use client";

import { heroData } from "../../data/hero";

export function Hero() {
  return (
    <section
      id="Home"
      className="relative w-full min-h-[calc(100vh-4rem)] bg-hero-radial overflow-hidden flex flex-col justify-between select-none"
    >
      {/* Overlay Halftone Dots */}
      <div className="absolute inset-0 bg-halftone-dots pointer-events-none z-0" />

      {/* =========================================================
          DEKORASI ATAS (Pita Miring + Piano di Kiri, Mic di Kanan)
      ========================================================= */}
      {/* Kiri Atas: Pita Merah-Putih + Keyboard */}
      <div className="hidden sm:block absolute top-30 -left-12 z-10 pointer-events-none">
        <div className="relative -rotate-24">
          {/* Pita Putih Bayangan */}
          <div className="w-64 md:w-70 h-24 bg-pale-cream translate-y-4 -translate-x-2 shadow-comic" />
          {/* Pita Merah Utama */}
          <div className="absolute top-0 left-0 w-64 md:w-80 h-22 bg-red shadow-comic" />
          {/* Aset Piano */}
          <img
            src={heroData.assets.piano}
            alt="Keyboard"
            className="absolute -top-6 left-16 md:left-4 w-28 md:w-100 h-auto rotate-36 drop-shadow-[-4px_6px_0px_#000000]"
          />
        </div>
      </div>

      {/* Kanan Atas: Pita Merah-Putih + Mic */}
      <div className="hidden sm:block absolute bottom-120 -right-12 z-10 pointer-events-none">
        <div className="relative -rotate-16">
          {/* Pita Putih Bayangan */}
          <div className="w-72 md:w-86 h-24 bg-pale-cream translate-y-4 translate-x-10 shadow-comic" />
          {/* Pita Merah Utama */}
          <div className="absolute top-0 left-0 w-72 md:w-96 h-22 bg-red shadow-comic" />
          {/* Aset Mic */}
          <img
            src={heroData.assets.mic}
            alt="Microphone"
            className="absolute -top-8 left-12 md:left-[-90] md:top-[-190] w-24 md:w-100 h-auto rotate-24 drop-shadow-[-4px_6px_0px_#000000]"
          />
        </div>
      </div>

      {/* =========================================================
          KONTEN TENGAH (Logo VLABUM + Tombol CTA + Bass & Gitar)
      ========================================================= */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-4 pt-5 pb-10 md:pt-40">
        <div className="relative flex flex-col items-center max-w-4xl w-full">
          {/* Aset Bass (Kiri Bawah Logo) */}
          <img
            src={heroData.assets.bass}
            alt="Bass Guitar"
            className="hidden md:block absolute -left-8 lg:-left-30 -bottom-14 w-44 lg:w-102 h-auto rotate-60 pointer-events-none drop-shadow-[-6px_6px_0px_#000000]"
          />

          {/* Aset Gitar (Kanan Bawah Logo) */}
          <img
            src={heroData.assets.guitar}
            alt="Electric Guitar"
            className="hidden md:block absolute -right-8 lg:-right-50 -bottom-26 w-48 lg:w-102 h-auto -rotate-20 pointer-events-none drop-shadow-[-6px_6px_0px_#000000]"
          />

          {/* Logo Utama */}
          <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-90 flex items-center justify-center">
            {/* Lapis Luar: Mengunci posisi persis di tengah */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* Lapis Dalam: Mobile kecil (w-56 scale-110), Desktop besar (lg:w-100 lg:scale-[1.5]) */}
              <img
                src={heroData.logo}
                alt="VLABUM Logo"
                className="w-66 sm:w-72 md:w-96 lg:w-140 h-auto object-contain scale-110 sm:scale-125 lg:scale-[1.5]"
              />
            </div>
          </div>

          {/* Tombol CTA (Play The Music & About Us) */}
          <div className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-5 md:gap-7">
            <a
              href={heroData.cta.primary.href}
              className="inline-flex items-center -rotate-4 gap-2.5 bg-red bg-clip-padding text-pale-cream font-bangers text-xl md:text-2xl tracking-wider px-6 md:px-8 py-2.5 md:py-3 border-4 border-black shadow-comic
    transform-gpu will-change-transform [backface-visibility:hidden]
    transition-[translate,rotate,background-color,color] duration-200 ease-out
    hover:-translate-y-1 hover:bg-yellow hover:rotate-2 hover:text-black active:translate-y-0"
            >
              <span className="text-sm md:text-base">▶</span>
              {heroData.cta.primary.label}
            </a>

            <a
              href={heroData.cta.secondary.href}
              className="inline-flex items-center rotate-3 gap-2.5 bg-pale-cream bg-clip-padding text-black font-bangers text-xl md:text-2xl tracking-wider px-6 md:px-8 py-2.5 md:py-3 border-4 border-black shadow-comic
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
          PITA BAWAH MENYILANG (Pita Hitam Lebih Besar & Strip Tegas)
      ========================================================= */}
      <div className="relative z-30 w-full h-44 md:h-52 pointer-events-none">
        {/* Pita 1: Merah (Miring ke Kanan Bawah, di lapisan belakang) */}
        <div className="absolute bottom-20 md:bottom-24 -left-8 -right-8 bg-red border-y-4 border-black py-2.5 md:py-3 rotate-3 shadow-comic-lg overflow-hidden">
          <div className="flex items-center whitespace-nowrap gap-6 font-bangers text-xl md:text-3xl tracking-wider text-black">
            {[...heroData.ribbonRed, ...heroData.ribbonRed, ...heroData.ribbonRed].map(
              (text, idx) => (
                <span key={idx} className="inline-flex items-center gap-6">
                  <span>{text}</span>
                  <span className="text-pale-cream font-bold text-2xl">+</span>
                </span>
              )
            )}
          </div>
        </div>

        {/* Pita 2: Hitam Filmstrip (Lebih besar, dinaikkan agar strip bawah tidak terpotong) */}
        <div className="absolute bottom-6 md:bottom-5 -left-8 -right-8 bg-black border-t-4 border-pale-cream pt-3.5 md:pt-4 -rotate-2 shadow-[0_-6px_20px_rgba(0,0,0,0.8)] overflow-hidden">
          {/* Baris Teks Marquee (Diperbesar) */}
          <div className="flex items-center whitespace-nowrap gap-8 font-bangers text-3xl md:text-5xl tracking-wider text-pale-cream">
            {[...heroData.ribbonBlack, ...heroData.ribbonBlack, ...heroData.ribbonBlack].map(
              (text, idx) => (
                <span key={idx} className="inline-flex items-center gap-8">
                  <span>{text}</span>
                  <span className="text-red font-bold text-3xl md:text-4xl">+</span>
                </span>
              )
            )}
          </div>

          {/* Strip Kotak Putih-Hitam Serong / Miring */}
          <div
            className="mt-2.5 md:mt-3 w-full h-2.5 md:h-6"
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