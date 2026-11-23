"use client";

import { createContext, useContext, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PageReadyContext = createContext(false);

export function useGlobalReady() {
  return useContext(PageReadyContext);
}

export function PageGate({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let mounted = true;

    const initPage = async () => {
      // 1. Tunggu semua gambar, CSS, dan JS awal selesai dimuat
      if (document.readyState !== "complete") {
        await new Promise<void>((resolve) => {
          window.addEventListener("load", () => resolve(), { once: true });
        });
      }

      // 2. Tunggu font kustom siap
      if (document.fonts?.ready) {
        await document.fonts.ready;
      }

      // 3. Beri jeda 2 frame agar CPU browser tenang sebelum animasi mulai
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!mounted) return;
          setIsReady(true);
          // Refresh kalkulasi posisi ScrollTrigger setelah semua elemen siap
          ScrollTrigger.refresh();
        });
      });
    };

    initPage();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <PageReadyContext.Provider value={isReady}>
      {/* Layar penahan singkat selama proses loading awal */}
      {!isReady && (
        <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-pale-cream border-t-red rounded-full animate-spin" />
        </div>
      )}

      {/* Seluruh isi website */}
      <div className={isReady ? "opacity-100" : "opacity-0"}>{children}</div>
    </PageReadyContext.Provider>
  );
}