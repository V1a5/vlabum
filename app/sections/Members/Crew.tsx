"use client";

import { crewData } from "../../data/crew";

export function Crew() {
    return (
        <section
            id="Crew"
            className="relative w-full min-h-screen bg-background border-t-8 border-red overflow-hidden flex flex-col items-center justify-center py-24 md:py-32 px-4 select-none"
        >
            {/* Overlay Halftone Dots */}
            <div className="absolute inset-0 bg-halftone-dots pointer-events-none z-0" />

            {/* Cahaya Merah Tengah (Diamond/Radial Glow di belakang frame) */}
            <div
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                    background:
                        "radial-gradient(circle at center, rgba(217, 13, 13, 0.32) 0%, rgba(26, 26, 26, 0) 62%)",
                }}
            />

            {/* =========================================================
          JUDUL SECTION: CREW (Kotak Merah Miring)
      ========================================================= */}
            <div className="relative z-20 mb-12 md:mb-16">
                <div className="bg-red border-4 border-black px-10 sm:px-14 py-2 md:py-3 -rotate-2 shadow-comic-lg">
                    <h2 className="font-bangers text-5xl sm:text-6xl md:text-7xl tracking-wider text-pale-cream uppercase leading-none">
                        {crewData.title}
                    </h2>
                </div>
            </div>

            {/* =========================================================
          WADAH UTAMA FRAME FOTO BERDUA + NAMA SAMBUNG + INSTRUMEN
      ========================================================= */}
            <div className="relative z-20 max-w-3xl w-full flex items-center justify-center">

                {/* Aset Keyboard / Piano (Pojok Kiri Atas Frame) */}
                <div className="hidden md:block absolute -left-34 -top-36 z-30 pointer-events-none -rotate-42">
                    <img
                        src={crewData.assets.piano}
                        alt="Keyboard"
                        className="w-80 h-auto object-contain scale-125 drop-shadow-[-6px_6px_0px_#000000]"
                    />
                </div>

                {/* Aset Bass (Pojok Kanan Bawah Frame) */}
                <div className="hidden md:block absolute -right-44 -bottom-16 z-30 pointer-events-none rotate-105">
                    <img
                        src={crewData.assets.bass}
                        alt="Bass Guitar"
                        className="w-80 h-auto object-contain scale-125 drop-shadow-[5px_-5px_0px_#000000]"
                    />
                </div>

                {/* Tanda Tangan Kiri Bawah: Vlas (TTDV_White.png) */}
                <div className="absolute -left-2 sm:-left-20 -bottom-6 sm:-bottom-8 z-30 -rotate-6 pointer-events-none">
                    <img
                        src={crewData.members[0].signature}
                        alt={`Tanda tangan ${crewData.members[0].name}`}
                        className="h-30 sm:h-20 md:h-80 w-auto object-contain drop-shadow-[-3px_3px_0px_#000000]"
                    />
                </div>

                {/* Tanda Tangan Kanan Atas: Putra (TTPB_White.png) */}
                <div className="absolute -right-5 sm:-right-32 -top-9 sm:-top-32 z-30 rotate-4 pointer-events-none">
                    <img
                        src={crewData.members[1].signature}
                        alt={`Tanda tangan ${crewData.members[1].name}`}
                        className="h-30 sm:h-20 md:h-80 w-auto object-contain drop-shadow-[-3px_3px_0px_#000000]"
                    />
                </div>

                {/* =========================================================
    FRAME FOTO UTAMA (Bingkai Polaroid Memanjang di Bawah + Tekstur Analog)
========================================================= */}
                <div className="relative z-20 w-full bg-pale-cream pt-3 sm:pt-4 md:pt-5 px-3 sm:px-4 md:px-5 pb-16 sm:pb-20 md:pb-28 border-4 border-black shadow-comic-lg">
                    <div className="relative aspect-video w-full bg-black border-2 border-black overflow-hidden">
                        {/* Foto Utama */}
                        <img
                            src={crewData.groupPhoto}
                            alt="VLABUM Crew - Vlas & Putra"
                            className="w-full h-full object-cover contrast-110 saturate-90"
                        />

                        {/* Layer 1: Tekstur Film Grain / Bintik Kertas Analog */}
                        <div
                            className="absolute inset-0 opacity-35 mix-blend-overlay pointer-events-none"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                            }}
                        />

                        {/* Layer 2: Halftone Halus & Vignette Pinggir Foto */}
                        <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.65)] pointer-events-none" />
                    </div>
                </div>

            </div>
        </section>
    );
}