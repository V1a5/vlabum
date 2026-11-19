"use client";

import { crewData } from "../../data/crew";

export function Crew() {
  return (
    <section
      id="Crew"
      className="relative w-full min-h-screen bg-background border-t-8 border-red overflow-hidden flex flex-col items-center justify-center py-20 sm:py-24 md:py-32 px-4 select-none"
    >
      {/* Overlay Halftone Dots */}
      <div className="absolute inset-0 bg-halftone-dots pointer-events-none z-0" />

      {/* Cahaya Merah Tengah */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(217, 13, 13, 0.32) 0%, rgba(26, 26, 26, 0) 62%)",
        }}
      />

      {/* =========================================================
          JUDUL SECTION: CREW / MEMBERS (Kotak Merah Miring)
      ========================================================= */}
      <div className="relative z-20 mb-12 md:mb-16">
        <div className="bg-red border-4 border-black px-10 sm:px-14 py-2 md:py-3 -rotate-2 shadow-comic-lg">
          <h2 className="font-bangers text-5xl sm:text-6xl md:text-7xl tracking-wider text-pale-cream uppercase leading-none">
            {crewData.title}
          </h2>
        </div>
      </div>

      {/* =========================================================
          WADAH UTAMA FRAME FOTO BERDUA + STIKER NAMA + INSTRUMEN
      ========================================================= */}
      <div className="relative z-20 max-w-3xl w-full flex items-center justify-center">
        {/* Aset Bass (Pojok Kiri Atas Frame) */}
        <div className="hidden sm:block absolute -left-24 md:-left-44 -top-12 md:-top-16 z-30 pointer-events-none rotate-102">
          <img
            src={crewData.assets.bass}
            alt="Bass Guitar"
            className="w-44 md:w-80 h-auto object-contain scale-110 md:scale-125 drop-shadow-[7px_6px_0px_#000000]"
          />
        </div>

        {/* Aset Piano (Pojok Kanan Bawah Frame) */}
        <div className="hidden sm:block absolute -right-20 md:-right-34 -bottom-12 md:-bottom-16 z-30 pointer-events-none -rotate-45">
          <img
            src={crewData.assets.piano}
            alt="Keyboard"
            className="w-44 md:w-80 h-auto object-contain scale-110 md:scale-125 drop-shadow-[-7px_10px_0px_#000000]"
          />
        </div>

        {/* =========================================================
            STIKER NAMA PENGGANTI TTD 1 (Kanan Atas: VLAS)
        ========================================================= */}
        <div className="absolute -right-2 sm:-right-6 md:-right-10 -top-6 sm:-top-8 z-30 rotate-6 pointer-events-none">
          <div className="bg-black border-4 border-pale-cream px-3.5 sm:px-5 py-1.5 sm:py-2 shadow-comic">
            <span className="block font-bangers text-2xl sm:text-3xl md:text-4xl tracking-wider text-pale-cream leading-none">
              {crewData.members[0]?.name || "VLAS"}
            </span>
            {crewData.members[0]?.role && (
              <span className="block font-space-mono text-[9px] sm:text-[11px] font-bold tracking-widest text-yellow uppercase mt-0.5">
                {crewData.members[0].role}
              </span>
            )}
          </div>
        </div>

        {/* =========================================================
            STIKER NAMA PENGGANTI TTD 2 (Kiri Bawah: PUTRA BUMI)
        ========================================================= */}
        <div className="absolute -left-2 sm:-left-6 md:-left-10 bottom-14 sm:bottom-16 md:bottom-20 z-30 -rotate-6 pointer-events-none">
          <div className="bg-red border-4 border-black px-3.5 sm:px-5 py-1.5 sm:py-2 shadow-comic">
            <span className="block font-bangers text-2xl sm:text-3xl md:text-4xl tracking-wider text-pale-cream leading-none">
              {crewData.members[1]?.name || "PUTRA BUMI"}
            </span>
            {crewData.members[1]?.role && (
              <span className="block font-space-mono text-[9px] sm:text-[11px] font-bold tracking-widest text-black bg-pale-cream px-1.5 py-0.5 uppercase mt-1 inline-block">
                {crewData.members[1].role}
              </span>
            )}
          </div>
        </div>

        {/* =========================================================
            FRAME FOTO UTAMA (Bingkai Polaroid + Selotip + Tulisan Tangan)
        ========================================================= */}
        <div className="relative z-20 w-full bg-pale-cream pt-3 sm:pt-4 md:pt-5 px-3 sm:px-4 md:px-5 pb-4 sm:pb-5 md:pb-6 border-4 border-black shadow-comic-lg">
          {/* Selotip Kiri Atas & Kanan Bawah agar nuansa tempelan zine makin hidup */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-24 sm:w-28 h-6 bg-[#D6CEB8]/90 border border-black/20 -rotate-2 shadow-sm pointer-events-none z-30" />

          {/* Bingkai Dalam Foto */}
          <div className="relative aspect-video w-full bg-black border-2 border-black overflow-hidden">
            {/* Foto Utama */}
            <img
              src={crewData.groupPhoto}
              alt="VLABUM Crew - Vlas & Putra"
              className="w-full h-full object-cover object-[60%_5%] contrast-110 saturate-90"
            />

            {/* Stempel Pojok dalam Foto */}
            {/* Stempel Pojok dalam Foto (Lebih kecil di <= 400px agar tidak menutupi wajah) */}
            <div className="absolute top-1.5 left-1.5 min-[401px]:top-3 min-[401px]:left-3 z-20 border min-[401px]:border-2 border-red bg-black/80 px-1.5 py-0 min-[401px]:px-2.5 min-[401px]:py-0.5 -rotate-3 pointer-events-none">
              <span className="font-space-mono text-[8px] min-[401px]:text-[10px] sm:text-xs font-bold tracking-wider min-[401px]:tracking-widest text-red uppercase leading-tight">
                DUO UNIT • JKT
              </span>
            </div>

            {/* Layer 1: Tekstur Film Grain / Bintik Kertas Analog */}
            <div
              className="absolute inset-0 opacity-35 mix-blend-overlay pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              }}
            />

            {/* Layer 2: Vignette Pinggir Foto */}
            <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.65)] pointer-events-none" />
          </div>

          {/* Caption Tulisan Tangan di Margin Bawah Polaroid */}
          <div className="mt-3 sm:mt-4 md:mt-5 px-2 flex flex-col sm:flex-row items-center justify-between gap-1 text-black">
            <span className="font-caveat text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide -rotate-1">
              VLABUM — Vlas &amp; Putra Bumi
            </span>
            <span className="font-space-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-neutral-700">
              EST. 2026 — INDONESIA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}