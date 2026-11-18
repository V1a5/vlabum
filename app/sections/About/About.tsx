"use client";

import { aboutData } from "../../data/about";

const figmaAboutLetters = [
  // HURUF A (Group 26)
  {
    char: "A",
    outerRect: { x: 17.3, y: 83.72, w: 114, h: 160.04, bg: "#FFFFFF", rotate: 3.08 },
    innerRect: { x: 32.29, y: 96.44, w: 96.13, h: 145.83, bg: "#000000", rotate: 0.45 },
    text: { x: 39.04, y: 108.18, w: 83.1, h: 135.24, color: "#FFFFFF", rotate: -1.09 },
  },
  // HURUF b (Group 29)
  {
    char: "b",
    outerRect: { x: 119.02, y: 66.89, w: 114, h: 160.04, bg: "#000000", rotate: -5.62 },
    innerRect: { x: 128.13, y: 73.99, w: 96.13, h: 145.83, bg: "#FFFFFF", rotate: -6.24 },
    text: { x: 135.76, y: 85.76, w: 78.21, h: 124.65, color: "#000000", rotate: -6.24 },
  },
  // HURUF o (Group 28)
  {
    char: "o",
    outerRect: { x: 220.05, y: 63.61, w: 114, h: 160.04, bg: "#FFFFFF", rotate: 3.08 },
    innerRect: { x: 229.43, y: 70.84, w: 96.13, h: 145.83, bg: "#E10600", rotate: 3.17 },
    text: { x: 225.35, y: 71.73, w: 96.13, h: 135.24, color: "#FFFFFF", rotate: -12.19 },
  },
  // HURUF u (Group 27)
  {
    char: "u",
    outerRect: { x: 311.78, y: 43.42, w: 114, h: 165.35, bg: "#FFFFFF", rotate: -3.94 },
    innerRect: { x: 321.26, y: 49.53, w: 97.76, h: 150.71, bg: "#000000", rotate: -4.89 },
    text: { x: 323.25, y: 62.46, w: 84.73, h: 124.65, color: "#FFFFFF", rotate: -10.25 },
  },
  // HURUF t (Group 30)
  {
    char: "t",
    outerRect: { x: 423.18, y: 53.89, w: 114, h: 160.04, bg: "#000000", rotate: -4.08 },
    innerRect: { x: 426.57, y: 60.2, w: 96.13, h: 145.83, bg: "#FFFFFF", rotate: -6.24 },
    text: { x: 419.96, y: 64.53, w: 96.13, h: 135.24, color: "#000000", rotate: -6.24 },
  },
  // HURUF u (Group 31)
  {
    char: "u",
    outerRect: { x: 560.34, y: 20.63, w: 114, h: 165.35, bg: "#FFFFFF", rotate: -8.07 },
    innerRect: { x: 570.27, y: 27.22, w: 97.76, h: 150.71, bg: "#E10600", rotate: -9.03 },
    text: { x: 573.68, y: 40.99, w: 84.73, h: 124.65, color: "#FFFFFF", rotate: -14.38 },
  },
  // HURUF S (Group 32)
  {
    char: "S",
    outerRect: { x: 672.64, y: 7.58, w: 114, h: 160.04, bg: "#FFFFFF", rotate: -0.65 },
    innerRect: { x: 675.5, y: 13, w: 96.13, h: 145.83, bg: "#000000", rotate: -2.81 },
    text: { x: 670.63, y: 17.64, w: 96.13, h: 135.24, color: "#FFFFFF", rotate: -2.81 },
  },
];

export function About() {
  return (
    <section
      id="About"
      className="relative w-full min-h-screen bg-background overflow-hidden flex items-center justify-center py-16 sm:py-24 md:py-32 px-4 sm:px-6 select-none"
    >
      {/* BACKGROUND DIAGONAL KUNING - HITAM */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[22%] sm:top-[26%] -left-20 -right-20 h-20 sm:h-28 md:h-36 bg-yellow/55 -rotate-12" />
        <div className="absolute top-[8%] sm:top-[10%] -left-20 -right-20 h-32 sm:h-44 md:h-56 bg-yellow -rotate-12" />
        <div className="absolute -bottom-24 sm:-bottom-32 -left-20 -right-20 h-[44%] sm:h-[48%] bg-yellow -rotate-12" />
      </div>

      {/* WADAH UTAMA KARTU MANIFESTO + JUDUL + INSTRUMEN */}
      <div className="relative z-10 max-w-4xl w-full mt-4 sm:mt-8 md:mt-12">
        {/* =========================================================
            JUDUL ABOUT US (Responsif mulai 375px hingga Desktop)
        ========================================================= */}
        <div className="relative z-30 w-[290px] sm:w-[460px] md:w-[560px] lg:w-[650px] left-0 sm:-left-4 md:-left-10 lg:-left-28 -mb-5 sm:-mb-9 md:-mb-12 lg:-mb-16 pointer-events-none">
          <svg
            viewBox="0 0 795 250"
            className="w-full h-auto overflow-visible block"
          >
            {figmaAboutLetters.map((item, idx) => {
              const cxOuter = item.outerRect.x + item.outerRect.w / 2;
              const cyOuter = item.outerRect.y + item.outerRect.h / 2;

              const cxInner = item.innerRect.x + item.innerRect.w / 2;
              const cyInner = item.innerRect.y + item.innerRect.h / 2;

              const cxText = item.text.x + item.text.w / 2;
              const cyText = item.text.y + item.text.h / 2;

              return (
                <g key={idx}>
                  <rect
                    x={item.outerRect.x}
                    y={item.outerRect.y}
                    width={item.outerRect.w}
                    height={item.outerRect.h}
                    fill={item.outerRect.bg}
                    transform={`rotate(${item.outerRect.rotate} ${cxOuter} ${cyOuter})`}
                  />
                  <rect
                    x={item.innerRect.x}
                    y={item.innerRect.y}
                    width={item.innerRect.w}
                    height={item.innerRect.h}
                    fill={item.innerRect.bg}
                    transform={`rotate(${item.innerRect.rotate} ${cxInner} ${cyInner})`}
                  />
                  <text
                    x={cxText}
                    y={cyText}
                    fill={item.text.color}
                    fontSize="150"
                    textAnchor="middle"
                    dominantBaseline="central"
                    className="font-bangers uppercase select-none"
                    transform={`rotate(${item.text.rotate} ${cxText} ${cyText})`}
                  >
                    {item.char}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* =========================================================
            ASET BASS (KIRI BAWAH KARTU - Muncul mulai Tablet 640px/700px)
        ========================================================= */}
        <div className="hidden sm:block absolute -left-24 md:-left-36 lg:-left-100 -bottom-20 md:-bottom-28 lg:-bottom-56 z-30 pointer-events-none rotate-60">
          <img
            src={aboutData.assets.bass}
            alt="Bass Guitar"
            className="w-44 md:w-64 lg:w-150 h-auto object-contain scale-110 lg:scale-125 drop-shadow-[-1px_8px_0px_#000000]"
          />
        </div>

        {/* =========================================================
            ASET GITAR (KANAN ATAS KARTU - Muncul mulai Tablet 640px/700px)
        ========================================================= */}
        <div className="hidden sm:block absolute -right-24 md:-right-36 lg:-right-90 -top-6 md:top-4 lg:top-16 z-10 pointer-events-none -rotate-80">
          <img
            src={aboutData.assets.guitar}
            alt="Electric Guitar"
            className="w-44 md:w-64 lg:w-150 h-auto object-contain scale-110 lg:scale-125 drop-shadow-[-8px_8px_0px_#000000]"
          />
        </div>

        {/* =========================================================
            KARTU MANIFESTO UTAMA (KREM)
        ========================================================= */}
        <div className="relative z-20 bg-pale-cream text-black border-4 border-black shadow-comic-lg p-5 sm:p-8 md:p-12">
          {/* 3 Selotip (Masking Tape - Aman dari overflow di layar 375px) */}
          <div className="absolute -top-3 left-8 sm:left-12 md:left-24 w-16 sm:w-20 md:w-24 h-5 sm:h-6 bg-[#D6CEB8]/90 border border-black/20 -rotate-12 shadow-sm pointer-events-none" />
          <div className="absolute -top-3 right-3 sm:-right-4 md:-right-5 w-16 sm:w-20 md:w-24 h-5 sm:h-6 bg-[#D6CEB8]/90 border border-black/20 rotate-18 shadow-sm pointer-events-none" />
          <div className="absolute -bottom-3 right-3 sm:-right-4 w-16 sm:w-20 md:w-24 h-5 sm:h-6 bg-[#D6CEB8]/90 border border-black/20 -rotate-18 shadow-sm pointer-events-none" />

          {/* Grid Konten Dalam Kartu */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-10 items-center">
            {/* KOLOM KIRI: Bingkai Foto Band */}
            <div className="md:col-span-5 flex justify-center">
              <div className="w-full max-w-[260px] sm:max-w-[300px] border-4 border-black bg-black shadow-comic -rotate-1">
                <div className="aspect-square w-full overflow-hidden bg-neutral-900">
                  <img
                    src={aboutData.photo.src}
                    alt={aboutData.photo.caption}
                    className="w-full h-full object-cover object-[50%_25%] grayscale contrast-125"
                  />
                </div>
                <div className="bg-red border-t-4 border-black py-1.5 px-3 text-center">
                  <p className="font-space-mono text-[10px] sm:text-xs font-bold tracking-wider text-pale-cream uppercase">
                    {aboutData.photo.caption}
                  </p>
                </div>
              </div>
            </div>

            {/* KOLOM KANAN: Teks Manifesto */}
            <div className="md:col-span-7 flex flex-col items-start">
              <span className="inline-block bg-black text-pale-cream font-space-mono text-[10px] sm:text-xs font-bold tracking-widest px-2.5 py-1 uppercase mb-2.5 sm:mb-3">
                {aboutData.badge}
              </span>

              <h2 className="font-bangers text-2xl sm:text-3xl md:text-[32px] leading-tight tracking-wide text-red uppercase mb-3 sm:mb-4">
                {aboutData.headline}
              </h2>

              <p className="font-space-mono text-xs sm:text-sm leading-relaxed text-neutral-800 mb-4 sm:mb-5">
                {aboutData.description}
              </p>

              <blockquote className="w-full bg-[#E5DFCD] border-l-4 border-neutral-500 p-3 sm:p-4 font-space-mono text-xs leading-relaxed text-neutral-900 mb-5 sm:mb-6">
                {aboutData.quote}
              </blockquote>

              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                {aboutData.tags.map((tag) => (
                  <span
                    key={tag.label}
                    className={`inline-block font-bangers text-sm sm:text-base tracking-wider px-3 sm:px-3.5 py-1 border-2 border-black hover:-rotate-2 hover:shadow-[-4px_4px_0px_#000000] transition-all ${tag.bg}`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}