"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const footerRef = useRef<HTMLElement | null>(null);
  const [isCardOpen, setIsCardOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.7 },
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 92%",
          once: true,
        },
      });

      tl.fromTo(
        ".footer-left",
        { y: 24, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, clearProps: "transform" }
      ).fromTo(
        ".footer-right",
        { y: 24, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, clearProps: "transform" },
        "-=0.45"
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <footer
        ref={footerRef}
        className="flex flex-col md:flex-row justify-between bg-black items-start md:items-center text-white py-8 border-t-2 border-white px-5 gap-6 select-none"
      >
        {/* KIRI: Info Band & Sosmed */}
        <div className="footer-left opacity-0 container font-space-mono mx-auto px-4">
          <h1 className="text-2xl mb-2">VLABUM+ OFFICIAL</h1>
          <p className="text-grey-100 text-sm">
            Indie Band • Jakarta Selatan, Indonesia <br />
            ©2026 Vlabum. Semua hak kebisingan dilindungi undang-undang distorsi.
          </p>
          <div className="flex flex-row gap-4 mt-4">
            <a
              href="https://www.instagram.com/vlabum.ofc/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <img
                src="/assets/instagram_color.svg"
                alt="Instagram"
                className="w-10 h-auto"
              />
            </a>
            <a
              href="https://www.youtube.com/@vlabumplus"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <img
                src="/assets/youtube_color.svg"
                alt="YouTube"
                className="w-10 h-auto"
              />
            </a>
          </div>
        </div>

        {/* KANAN: Kotak Kredit (Klik untuk Buka Kartu Kontak Vlas) */}
        <button
          type="button"
          onClick={() => setIsCardOpen(true)}
          className="footer-right opacity-0 group container mx-auto px-4 font-space-mono bg-background w-full md:w-1/2 py-4 mt-2 md:mt-0 border-dashed border-2 border-grey-100 hover:border-yellow transition-all cursor-pointer flex items-center justify-between gap-3 text-left"
        >
          <p className="text-sm text-grey-100">
            Website crafted by{" "}
            <span className="font-bold text-white group-hover:text-yellow underline decoration-dotted underline-offset-4">
              Vlas
            </span>{" "}
            — Web Developer &amp; UI/UX Designer
          </p>
          <span className="text-yellow font-bold shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
            ↗
          </span>
        </button>
      </footer>

      {/* POP-UP KARTU KONTAK KREATOR */}
      {isCardOpen && (
        <div
          onClick={() => setIsCardOpen(false)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-md w-full bg-pale-cream text-black border-4 border-black p-6 sm:p-7 shadow-[8px_8px_0px_#D90D0D] -rotate-1"
          >
            <button
              type="button"
              onClick={() => setIsCardOpen(false)}
              className="absolute -top-3.5 -right-3.5 bg-red text-pale-cream font-bangers text-lg px-3 py-0.5 border-3 border-black shadow-[-2px_2px_0px_#000000] hover:bg-yellow hover:text-black cursor-pointer"
            >
              X
            </button>

            <span className="inline-block bg-black text-pale-cream font-space-mono text-[10px] font-bold tracking-widest px-2.5 py-1 uppercase mb-2">
              CREATOR &amp; DESIGNER
            </span>

            <h4 className="font-bangers text-3xl sm:text-4xl tracking-wide text-black uppercase leading-none mb-2">
              MUHAMMAD VLAS
            </h4>

            <p className="font-space-mono text-xs leading-relaxed text-neutral-800 mb-4">
              Web Developer &amp; UI/UX Designer. Merancang dan membangun keseluruhan visual, sistem desain, dan web interaktif VLABUM menggunakan Next.js, Tailwind CSS, dan Figma.
            </p>

            <div className="flex flex-col gap-2.5 font-bangers text-lg tracking-wider">
              <a
                href="https://www.linkedin.com/in/muhammadvlas/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#0A66C2] text-white border-3 border-black py-2 px-4 text-center shadow-[-3px_3px_0px_#000000] hover:-translate-y-0.5 transition-transform"
              >
                CONNECT ON LINKEDIN ↗
              </a>

              <a
                href="https://www.instagram.com/vlas1.1/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-red text-pale-cream border-3 border-black py-2 px-4 text-center shadow-[-3px_3px_0px_#000000] hover:-translate-y-0.5 transition-transform"
              >
                INSTAGRAM (@VLAS1.1) ↗
              </a>

              <a
                href="https://github.com/V1a5"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-black text-pale-cream border-3 border-black py-2 px-4 text-center shadow-[-3px_3px_0px_#D90D0D] hover:-translate-y-0.5 transition-transform"
              >
                GITHUB PROFILE ↗
              </a>

              <a
                href="mailto:valsmamokiak@gmail.com"
                className="w-full bg-yellow text-black border-3 border-black py-2 px-4 text-center shadow-[-3px_3px_0px_#000000] hover:-translate-y-0.5 transition-transform"
              >
                EMAIL / PROJECT INQUIRY ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}