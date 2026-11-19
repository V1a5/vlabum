"use client";

import { supportData } from "../../data/support";
import { VisitorCounter } from "../../components/Support/VisitorCounter";

export function Support() {
  const hasSpotifyLink = Boolean(supportData.socials.spotify.href);
  return (
    <section
      id="Support"
      className="relative w-full bg-black overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20 px-4 flex flex-col items-center justify-center select-none"
    >
      {/* =========================================================
          GERIGI SEGITIGA MERAH DI BAGIAN ATAS
      ========================================================= */}
      <div
        className="absolute top-0 left-0 right-0 h-8 md:h-11 pointer-events-none z-10"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #830606 0%, #8A0707 10%, #8F0707 20%, #910808 30%, #8F0707 40%, #8A0707 50%, #820606 60%, #790606 70%, #6E0505 80%, #620404 90%, #570303 100%)",
          WebkitMaskImage:
            "linear-gradient(135deg, #000 50%, transparent 50%), linear-gradient(225deg, #000 50%, transparent 50%)",
          WebkitMaskSize: "40px 100%",
          WebkitMaskRepeat: "repeat-x",
          WebkitMaskPosition: "top left",
          maskImage:
            "linear-gradient(135deg, #000 50%, transparent 50%), linear-gradient(225deg, #000 50%, transparent 50%)",
          maskSize: "40px 100%",
          maskRepeat: "repeat-x",
          maskPosition: "top left",
        }}
      />

      {/* =========================================================
          WADAH KARTU UTAMA + BAYANGAN BLOK MERAH
      ========================================================= */}
      <div className="relative z-20 max-w-3xl w-full mt-4">
        {/* Blok Bayangan Merah di Belakang Kartu (Geser Kanan & Bawah) */}
        <div className="absolute inset-0 bg-red border-4 border-black translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 -rotate-1 pointer-events-none" />

        {/* Kartu Utama Putih-Krem */}
        <div className="relative bg-[#FAFAFA] text-black border-4 border-black p-7 sm:p-10 md:p-12 -rotate-1">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
            {/* =========================================================
                KOLOM KIRI: ILUSTRASI HEADSET RETRO KOMIK
            ========================================================= */}
            <div className="md:col-span-5 flex flex-col items-center justify-center">
              <div className="relative flex flex-col items-center -rotate-3">
                {/* Gelombang Suara Kecil di Atas Headset */}
                <div className="flex items-end gap-1.5 mb-2">
                  <span className="w-1.5 h-3 bg-black rounded-full" />
                  <span className="w-1.5 h-5 bg-red rounded-full" />
                  <span className="w-1.5 h-3 bg-black rounded-full" />
                </div>

                {/* SVG Headset Over-Ear Retro Bergaya Komik */}
                <svg
                  viewBox="0 0 200 180"
                  className="w-40 sm:w-44 md:w-48 h-auto drop-shadow-[-5px_6px_0px_#000000]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Band Atas Luar */}
                  <path
                    d="M36 108V84C36 46.4446 64.6538 16 100 16C135.346 16 164 46.4446 164 84V108"
                    stroke="#000000"
                    strokeWidth="16"
                    strokeLinecap="round"
                  />
                  {/* Bantalan Kepala Merah */}
                  <path
                    d="M54 34C67.5 22.5 83.2 16 100 16C116.8 16 132.5 22.5 146 34"
                    stroke="#D90D0D"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                  {/* Earcup Kiri (Luar) */}
                  <rect
                    x="20"
                    y="88"
                    width="34"
                    height="62"
                    rx="12"
                    fill="#D90D0D"
                    stroke="#000000"
                    strokeWidth="6"
                  />
                  {/* Bantalan Earcup Kiri (Dalam) */}
                  <rect
                    x="48"
                    y="94"
                    width="16"
                    height="50"
                    rx="6"
                    fill="#F3EFDF"
                    stroke="#000000"
                    strokeWidth="5"
                  />
                  {/* Detail Garis Komik Earcup Kiri */}
                  <line
                    x1="32"
                    y1="104"
                    x2="32"
                    y2="134"
                    stroke="#F3EFDF"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />

                  {/* Earcup Kanan (Luar) */}
                  <rect
                    x="146"
                    y="88"
                    width="34"
                    height="62"
                    rx="12"
                    fill="#D90D0D"
                    stroke="#000000"
                    strokeWidth="6"
                  />
                  {/* Bantalan Earcup Kanan (Dalam) */}
                  <rect
                    x="136"
                    y="94"
                    width="16"
                    height="50"
                    rx="6"
                    fill="#F3EFDF"
                    stroke="#000000"
                    strokeWidth="5"
                  />
                  {/* Detail Garis Komik Earcup Kanan */}
                  <line
                    x1="168"
                    y1="104"
                    x2="168"
                    y2="134"
                    stroke="#F3EFDF"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />

                  {/* Kabel Spiral Kecil di Bawah Kiri */}
                  <path
                    d="M37 150C37 166 56 170 72 164"
                    stroke="#000000"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Stiker Label Kecil di Bawah Headset */}
                <div className="-mt-2 bg-black text-pale-cream border-2 border-black px-3.5 py-1 shadow-[-3px_3px_0px_#D90D0D] rotate-2">
                  <span className="font-bangers text-sm sm:text-base tracking-widest uppercase">
                    {supportData.stickerLabel}
                  </span>
                </div>
              </div>
            </div>

            {/* =========================================================
                KOLOM KANAN: TEKS AJAKAN & TOMBOL SOSIAL MEDIA
            ========================================================= */}
            <div className="md:col-span-7 flex flex-col items-start">
              {/* Badge Merah Atas */}
              <div className="inline-block bg-red text-pale-cream border-2 border-black px-3 py-1 shadow-[-3px_3px_0px_#000000] mb-3.5">
                <span className="font-space-mono text-[10px] sm:text-xs font-bold tracking-wider uppercase">
                  {supportData.badge}
                </span>
              </div>

              {/* Headline Besar */}
              <h2 className="font-bangers text-3xl sm:text-4xl md:text-[40px] leading-[1.05] tracking-wide text-black uppercase mb-3">
                {supportData.headline}
              </h2>

              {/* Deskripsi Singkat */}
              <p className="font-space-mono text-xs sm:text-sm leading-relaxed text-neutral-700 mb-6">
                {supportData.description}
              </p>

              {/* Wadah 3 Tombol */}
              <div className="w-full sm:w-fit grid grid-cols-1 sm:grid-cols-[auto_auto] gap-3">
                {/* Baris 1 (Span 2 Kolom): Follow Instagram */}
                <a
                  href={supportData.socials.instagram.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:col-span-2 w-full inline-flex items-center justify-center gap-3 bg-red text-pale-cream font-bangers text-xl sm:text-2xl tracking-wider px-6 py-2.5 border-4 border-black shadow-comic hover:-translate-y-1 hover:bg-yellow hover:text-black transition-all duration-200"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  {supportData.socials.instagram.label}
                </a>

                {/* Baris 2 Kiri: Subscribe YouTube */}
                <a
                  href={supportData.socials.youtube.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-red text-pale-cream font-bangers text-base sm:text-lg tracking-wider px-4 py-2 border-3 border-black shadow-[-3px_3px_0px_#000000] hover:-translate-y-1 hover:bg-yellow hover:text-black transition-all duration-200"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  {supportData.socials.youtube.label}
                </a>

                {/* Baris 2 Kanan: Spotify */}
                {hasSpotifyLink ? (
                  <a
                    href={supportData.socials.spotify.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#1DB954] text-black font-bangers text-base sm:text-lg tracking-wider px-4 py-2 border-3 border-black shadow-[-3px_3px_0px_#000000] hover:-translate-y-1 hover:bg-yellow transition-all duration-200"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                    </svg>
                    {supportData.socials.spotify.label}
                  </a>
                ) : (
                  <div className="relative w-full inline-flex items-center justify-center gap-2 bg-[#D4D4D4] text-neutral-600 font-bangers text-base sm:text-lg tracking-wider px-4 py-2 border-3 border-neutral-500 shadow-[-3px_3px_0px_rgba(0,0,0,0.4)] cursor-not-allowed">
                    <span className="absolute -top-3 -right-2.5 bg-black text-white font-bangers text-xs tracking-wider px-2 py-0.5 border border-white rotate-6 shadow uppercase z-10">
                      SEGERA
                    </span>
                    <span className="inline-flex items-center gap-2 opacity-60">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                      </svg>
                      {supportData.socials.spotify.label}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          FOOTER BAWAH & VISITOR COUNTER
      ========================================================= */}
      <div className="relative z-20 max-w-3xl w-full mt-14 pt-6 border-t-2 border-pale-cream/20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-space-mono text-xs text-pale-cream/80 text-center sm:text-left">
          © 2026 VLABUM. ALL RIGHTS RESERVED.
        </p>
        <VisitorCounter />
      </div>
    </section>
  );
}