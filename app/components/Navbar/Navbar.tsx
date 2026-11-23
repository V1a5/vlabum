"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGlobalReady } from "../../components/PageGate";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#About" },
  { name: "Song", href: "#Song" },
];

export function Navbar() {
  const navRef = useRef<HTMLElement | null>(null);
  const isPageReady = useGlobalReady();

  useEffect(() => {
    if (!isPageReady) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
          duration: 0.85,
        },
      });

      // 1. Background Navbar turun mulus dari atas layar
      tl.fromTo(
        navRef.current,
        { yPercent: -100, autoAlpha: 0 },
        { yPercent: 0, autoAlpha: 1, duration: 0.7, clearProps: "transform" }
      )
        // 2. Logo muncul dari kiri (mulai sebelum background selesai turun)
        .fromTo(
          ".nav-logo",
          { x: -25, autoAlpha: 0 },
          { x: 0, autoAlpha: 1, clearProps: "transform" },
          "-=0.35"
        )
        // 3. Menu link turun bergantian
        .fromTo(
          ".nav-item",
          { y: -16, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            stagger: 0.12,
            clearProps: "transform",
          },
          "-=0.55"
        );
    }, navRef);

    return () => ctx.revert();
  }, [isPageReady]);

  return (
    <nav
      ref={navRef}
      className="opacity-0 relative flex flex-row justify-between items-center w-full h-14 sm:h-16 px-3 min-[400px]:px-5 md:px-8 bg-pale-cream text-black"
    >
      {/* Logo */}
      <a href="/" className="nav-logo opacity-0 shrink-0">
        <img
          src="/assets/logo/logo_no_bg.png"
          alt="Logo"
          className="h-12 min-[400px]:h-14 md:h-20 w-auto"
        />
      </a>

      {/* Navigation Links */}
      <div className="flex items-center md:absolute md:left-1/2 md:-translate-x-1/2 gap-1.5 min-[400px]:gap-3 sm:gap-5 md:gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="nav-item opacity-0 group inline-flex items-center gap-1.5 sm:gap-2.5 font-bangers px-2 min-[400px]:px-3 md:px-4 py-0.5 text-lg min-[400px]:text-xl md:text-2xl hover:text-white hover:bg-red hover:-rotate-2 hover:shadow-[-3px_3px_0px_#000000] md:hover:shadow-[-4px_4px_0px_#000000] transition-all duration-300 ease-in-out"
          >
            {link.name}

            {link.name === "Song" && (
              <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-red group-hover:bg-white transition-colors duration-300 shrink-0" />
            )}
          </a>
        ))}
      </div>
    </nav>
  );
}