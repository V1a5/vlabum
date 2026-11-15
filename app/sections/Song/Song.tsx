"use client";

import { useEffect, useRef, useState } from "react";
import { songsData } from "../../data/song";

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "00:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

export function Song() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Daftar lagu yang sudah rilis (untuk navigasi Prev/Next/Ended)
  const playableIndices = songsData
    .map((song, index) => (!song.comingSoon ? index : -1))
    .filter((index) => index !== -1);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isEjected, setIsEjected] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);

  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [activeTab, setActiveTab] = useState<"lyrics" | "story">("lyrics");

  const currentSong = songsData[currentIndex];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !currentSong.audioSrc) return;

    audio.load();
    setCurrentTime(0);
    setIsEjected(false);

    if (isPlaying) {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const handleTogglePlay = () => {
    const audio = audioRef.current;
    if (!audio || currentSong.comingSoon) return;

    if (isEjected) {
      setIsEjected(false);
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  const handlePrev = () => {
    if (playableIndices.length <= 1) {
      if (audioRef.current) audioRef.current.currentTime = 0;
      setCurrentTime(0);
      return;
    }
    const pos = playableIndices.indexOf(currentIndex);
    const prevPos = pos <= 0 ? playableIndices.length - 1 : pos - 1;
    setCurrentIndex(playableIndices[prevPos]);
  };

  const handleNext = () => {
    if (playableIndices.length <= 1) {
      if (audioRef.current) audioRef.current.currentTime = 0;
      setCurrentTime(0);
      return;
    }
    const pos = playableIndices.indexOf(currentIndex);
    const nextPos = pos >= playableIndices.length - 1 ? 0 : pos + 1;
    setCurrentIndex(playableIndices[nextPos]);
  };

  const handleEject = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    setIsPlaying(false);
    setCurrentTime(0);
    setIsEjected((prev) => !prev);
  };

  const handleSelectSong = (idx: number) => {
    if (songsData[idx].comingSoon) return;
    setIsEjected(false);
    if (idx === currentIndex) {
      handleTogglePlay();
    } else {
      setCurrentIndex(idx);
      setIsPlaying(true);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = Number(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <section
      id="Song"
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center py-20 md:py-28 px-4 select-none"
      style={{
        background:
          "radial-gradient(circle at 30% 45%, #B90B0B 0%, #7F0606 60%, #560303 100%)",
      }}
    >
      {/* Overlay Halftone Dots Halus */}
      <div className="absolute inset-0 bg-halftone-dots opacity-35 pointer-events-none z-0" />

      {/* Elemen Audio HTML5 */}
      <audio
        ref={audioRef}
        src={currentSong.audioSrc}
        onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onEnded={() => {
          setIsPlaying(false);
          setCurrentTime(0);
        }}
      />

      {/* =========================================================
          CONTAINER UTAMA 2 KOLOM SEIMBANG (6 Kolom Kiri : 6 Kolom Kanan)
      ========================================================= */}
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

        {/* =========================================================
            KOLOM KIRI (6 Kolom): CASSETTE DECK PLAYER + PLATFORM LINKS
        ========================================================= */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          {/* Kotak Tape Deck Utama (Diperbesar & Proporsional) */}
          <div className="bg-black border-4 border-white p-5 sm:p-6 md:p-7 shadow-[10px_10px_0px_#000000]">

            {/* Header Status Bar Deck */}
            <div className="flex items-center justify-between font-space-mono text-xs sm:text-sm mb-3.5 px-1">
              <div className="flex items-center gap-2.5">
                <span
                  className={`w-3 h-3 rounded-full ${isPlaying
                    ? "bg-red animate-pulse shadow-[0_0_8px_#D90D0D]"
                    : isEjected
                      ? "bg-yellow"
                      : "bg-neutral-500"
                    }`}
                />
                <span
                  className={`font-bold tracking-wider uppercase ${isPlaying ? "text-red" : "text-neutral-400"
                    }`}
                >
                  {isEjected ? "Ejected" : isPlaying ? "Playing" : "Paused"}
                </span>
              </div>

              <span className="text-neutral-300 tracking-wider">
                {formatTime(currentTime)} /{" "}
                {duration > 0 ? formatTime(duration) : currentSong.duration}
              </span>
            </div>

            {/* Jendela Kaset (Cassette Window) */}
            <div className="relative w-full aspect-[16/10] bg-neutral-900 border-3 border-neutral-700 overflow-hidden flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 pointer-events-none z-20" />

              {isEjected ? (
                <div className="text-center font-space-mono text-xs sm:text-sm text-neutral-400 uppercase tracking-widest px-4">
                  [ NO CASSETTE INSERTED — PRESS PLAY OR SELECT TRACK ]
                </div>
              ) : (
                <img
                  src={currentSong.cassetteSvg}
                  alt={currentSong.title}
                  style={{ filter: currentSong.cassetteFilter || "none" }}
                  className={`w-full h-full object-contain transition-transform duration-300 ${isPlaying ? "scale-[1.02]" : "scale-100"
                    }`}
                />
              )}
            </div>

            {/* Progress Bar / Scrubber Lagu */}
            <div className="mt-5 mb-5">
              <div className="relative w-full h-3 bg-neutral-800 border border-neutral-600 flex items-center">
                <div
                  className="h-full bg-pale-cream transition-all duration-100"
                  style={{ width: `${progressPercent}%` }}
                />
                <input
                  type="range"
                  min={0}
                  max={duration || 100}
                  step={0.1}
                  value={currentTime}
                  onChange={handleSeek}
                  aria-label="Seek audio"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
            </div>

            {/* 4 Tombol Kontrol Deck: PREV | PLAY/PAUSE | NEXT | EJECT */}
            <div className="grid grid-cols-4 gap-3 mb-5">
              <button
                type="button"
                onClick={handlePrev}
                className="bg-pale-cream text-black border-2 border-black py-2.5 px-2 font-bangers text-lg sm:text-xl tracking-wider flex items-center justify-center gap-1.5 hover:bg-yellow active:translate-y-0.5 transition-all cursor-pointer"
              >
                <span className="text-xs">⏮</span> PREV
              </button>

              <button
                type="button"
                onClick={handleTogglePlay}
                className="bg-red text-pale-cream border-2 border-black py-2.5 px-2 font-bangers text-lg sm:text-xl tracking-wider flex items-center justify-center gap-1.5 hover:bg-yellow hover:text-black active:translate-y-0.5 transition-all cursor-pointer"
              >
                <span className="text-xs">{isPlaying ? "❚❚" : "▶"}</span>
                {isPlaying ? "PAUSE" : "PLAY"}
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="bg-pale-cream text-black border-2 border-black py-2.5 px-2 font-bangers text-lg sm:text-xl tracking-wider flex items-center justify-center gap-1.5 hover:bg-yellow active:translate-y-0.5 transition-all cursor-pointer"
              >
                NEXT <span className="text-xs">⏭</span>
              </button>

              <button
                type="button"
                onClick={handleEject}
                className={`border-2 border-white py-2.5 px-2 font-bangers text-lg sm:text-xl tracking-wider flex items-center justify-center gap-1.5 active:translate-y-0.5 transition-all cursor-pointer ${isEjected
                  ? "bg-yellow text-black border-black"
                  : "bg-black text-pale-cream hover:bg-neutral-800"
                  }`}
              >
                <span className="text-xs">⏏</span> EJECT
              </button>
            </div>

            {/* Volume Slider */}
            <div className="flex items-center gap-3 font-space-mono text-xs sm:text-sm text-neutral-300">
              <span>Volume</span>
              <div className="relative flex-1 h-2.5 bg-neutral-700 rounded-full flex items-center">
                {/* Garis Merah Terisi */}
                <div
                  className="h-full bg-red rounded-full"
                  style={{ width: `${volume * 100}%` }}
                />

                {/* 👇 INI BOLA (KNOB) VOLUME-NYA */}
                {/* Bola Volume dengan posisi absolute agar selalu pas di ujung garis merah */}
                <div
                  className="absolute w-4 h-4 bg-red border-2 border-white rounded-full shadow pointer-events-none"
                  style={{ left: `calc(${volume * 100}% - 8px)` }}
                />

                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.01}
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  aria-label="Volume"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
              <span className="w-10 text-right">{Math.round(volume * 100)}%</span>
            </div>
          </div>

          {/* Bagian Bawah Kiri: LISTEN TO THIS SONG ON (YouTube & Spotify Segera) */}
          <div className="mt-7">
            <div className="inline-block bg-black border-2 border-white px-4 py-1.5 mb-3.5 shadow-[4px_4px_0px_#000000]">
              <span className="font-bangers text-lg sm:text-xl tracking-wider text-pale-cream uppercase">
                LISTEN TO THIS SONG ON
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {/* Tombol YouTube (Pakai yt_logo_fullcolor_almostblack_digital.png) */}
              <a
                href={currentSong.youtubeUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-4 border-black py-4 px-5 shadow-comic flex items-center justify-center hover:-translate-y-1 hover:bg-yellow transition-all duration-200"
              >
                <img
                  src="/assets/yt_logo_fullcolor_almostblack_digital.png"
                  alt="YouTube"
                  className="h-8 sm:h-20 w-auto object-contain"
                />
              </a>

              {/* Tombol Spotify (Abu-Abu Nonaktif + Stiker SEGERA di Pojok Kanan Atas) */}
              {currentSong.spotifyUrl ? (
                <a
                  href={currentSong.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border-4 border-black py-4 px-5 shadow-comic flex items-center justify-center gap-2 hover:-translate-y-1 hover:bg-yellow transition-all duration-200"
                >
                  <img
                    src="/assets/Spotify.png"
                    alt="Spotify"
                    className="h-8 sm:h-20 w-auto object-contain"
                  />
                </a>
              ) : (
                <div className="relative bg-[#DCDCDC] border-4 border-neutral-500 py-4 px-5 shadow-[4px_4px_0px_rgba(0,0,0,0.45)] flex items-center justify-center gap-2 cursor-not-allowed">
                  {/* Stiker Hitam Miring: SEGERA */}
                  <span className="absolute -top-3.5 -right-2.5 bg-black text-white font-bangers text-sm sm:text-base tracking-wider px-3 py-0.5 border-2 border-white rotate-8 shadow-md uppercase z-10">
                    SEGERA
                  </span>

                  {/* Logo Spotify Redup / Abu-Abu */}
                  <div className="flex items-center gap-2 opacity-45 grayscale">
                    <img
                      src="/assets/Spotify.png"
                      alt="Spotify"
                      className="h-8 sm:h-20 w-auto object-contain"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* =========================================================
            KOLOM KANAN (6 Kolom): LIST SONG + LIRIK / CERITA LAGU
        ========================================================= */}
        <div className="lg:col-span-6 flex flex-col justify-between gap-6">

          {/* KOTAK 1: LIST SONG */}
          <div className="bg-pale-cream text-black border-4 border-black shadow-comic-lg overflow-hidden">
            {/* Header Hitam LIST SONG */}
            <div className="bg-black text-pale-cream px-5 py-3 flex items-center justify-between border-b-4 border-black">
              <h2 className="font-bangers text-3xl sm:text-4xl tracking-wider uppercase leading-none">
                LIST SONG
              </h2>

              <div className="flex items-center gap-3">
                <span className="bg-red text-pale-cream font-space-mono text-xs font-bold px-2.5 py-0.5 border border-white">
                  {playableIndices.length} Song
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setViewMode((prev) => (prev === "list" ? "grid" : "list"))
                  }
                  title="Ganti Tampilan Daftar Lagu"
                  className="p-1.5 bg-neutral-900 hover:bg-red text-pale-cream border border-neutral-600 transition-colors cursor-pointer"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 2l4 4-4 4" />
                    <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                    <path d="M7 22l-4-4 4-4" />
                    <path d="M21 13v2a4 4 0 0 1-4 4H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* MODE 1: TAMPILAN BARIS KASET TUMPUK */}
            {viewMode === "list" ? (
              <div className="p-4 sm:p-5 flex flex-col gap-3">
                {songsData.map((song, idx) => {
                  const isActive = idx === currentIndex && !song.comingSoon;
                  const isLocked = Boolean(song.comingSoon);

                  return (
                    <button
                      key={song.id}
                      type="button"
                      disabled={isLocked}
                      onClick={() => handleSelectSong(idx)}
                      style={{
                        backgroundColor: isLocked ? "#8A8A8A" : song.stripColor,
                      }}
                      className={`relative w-full border-3 border-black p-1.5 flex items-center gap-2 transition-all duration-150 text-left ${isLocked
                        ? "opacity-75 cursor-not-allowed"
                        : isActive
                          ? "translate-x-2 shadow-[-4px_4px_0px_#000000] ring-2 ring-black cursor-pointer"
                          : "hover:translate-x-1 opacity-95 hover:opacity-100 cursor-pointer"
                        }`}
                    >
                      {/* Nomor Urut Kiri */}
                      <span className="bg-black text-pale-cream font-space-mono text-xs font-bold px-2 py-1">
                        {song.number}
                      </span>

                      {/* Label Tengah */}
                      <div
                        className={`flex-1 border-2 border-black px-3 py-1 flex items-center justify-between ${isLocked ? "bg-neutral-300" : "bg-pale-cream"
                          }`}
                      >
                        <span
                          className={`font-bangers text-base sm:text-lg tracking-wider uppercase truncate ${isLocked ? "text-neutral-600" : "text-black"
                            }`}
                        >
                          {song.title}
                        </span>

                        {isLocked ? (
                          <span className="bg-black text-white font-bangers text-xs tracking-wider px-2 py-0.5 rotate-2 uppercase ml-2 shrink-0">
                            SEGERA
                          </span>
                        ) : (
                          <span className="font-space-mono text-xs font-bold text-neutral-700 ml-2">
                            {song.duration}
                          </span>
                        )}
                      </div>

                      {/* Lubang Kaset Kanan */}
                      <span className="w-3.5 h-3.5 rounded-full bg-black mr-1 shrink-0" />
                    </button>
                  );
                })}
              </div>
            ) : (
              /* MODE 2: TAMPILAN GRID KARTU KASET */
              <div className="p-4 sm:p-5 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {songsData.map((song, idx) => {
                  const isActive = idx === currentIndex && !song.comingSoon;
                  const isLocked = Boolean(song.comingSoon);

                  return (
                    <button
                      key={song.id}
                      type="button"
                      disabled={isLocked}
                      onClick={() => handleSelectSong(idx)}
                      className={`relative border-3 border-black p-2.5 flex flex-col justify-between transition-all text-left ${isLocked
                        ? "bg-neutral-300 opacity-75 cursor-not-allowed"
                        : isActive
                          ? "bg-[#FFC700] shadow-[-4px_4px_0px_#000000] -translate-y-1 cursor-pointer"
                          : "bg-[#D9D9D9] hover:bg-white hover:-translate-y-0.5 cursor-pointer"
                        }`}
                    >
                      {/* Badge Status di Pojok Kanan Atas */}
                      {isLocked ? (
                        <span className="absolute -top-2.5 right-1.5 bg-black text-white font-bangers text-[11px] tracking-wider px-2 py-0.5 border border-white rotate-4 uppercase z-10">
                          SEGERA
                        </span>
                      ) : (
                        isActive && (
                          <span className="absolute -top-2.5 right-1.5 bg-red text-black font-bangers text-[11px] tracking-wider px-2 py-0.5 border-2 border-black uppercase z-10">
                            NOW PLAYING
                          </span>
                        )
                      )}

                      {/* Gambar Kaset */}
                      <div className="w-full aspect-[16/10] mb-2 overflow-hidden">
                        <img
                          src={song.cassetteSvg}
                          alt={song.title}
                          style={{ filter: song.cassetteFilter || "none" }}
                          className={`w-full h-full object-contain ${isLocked ? "opacity-50" : ""
                            }`}
                        />
                      </div>

                      {/* Footer Kartu */}
                      <div className="w-full border-t-2 border-black pt-1.5 flex items-center justify-between">
                        <span className="bg-black text-pale-cream font-bangers text-xs tracking-wider px-1.5 py-0.5">
                          #{song.number}
                        </span>
                        <span className="font-bangers text-sm text-black tracking-wider">
                          {song.duration}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* KOTAK 2: TAB LIRIK LAGU & CERITA DI BALIK LAGU */}
          <div className="relative flex-1 bg-white text-black border-4 border-black p-5 sm:p-6 shadow-comic-lg flex flex-col">
            {/* Selotip Merah di Pojok Kanan Atas */}
            <div className="absolute -top-3 right-6 w-16 h-5 bg-red/90 border border-black/30 rotate-3 pointer-events-none" />

            {/* Header Tab */}
            <div className="flex flex-wrap items-center gap-2 border-b-2 border-black pb-3 mb-4">
              <button
                type="button"
                onClick={() => setActiveTab("lyrics")}
                className={`font-bangers text-base sm:text-lg tracking-wider px-4 py-1 border-2 border-black transition-colors cursor-pointer ${activeTab === "lyrics"
                  ? "bg-black text-pale-cream"
                  : "bg-pale-cream text-black hover:bg-yellow"
                  }`}
              >
                LIRIK LAGU
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("story")}
                className={`font-bangers text-base sm:text-lg tracking-wider px-4 py-1 border-2 border-black transition-colors cursor-pointer ${activeTab === "story"
                  ? "bg-black text-pale-cream"
                  : "bg-pale-cream text-black hover:bg-yellow"
                  }`}
              >
                CERITA DI BALIK LAGU
              </button>
            </div>

            {/* Konten Lirik atau Cerita */}
            <div className="max-h-64 overflow-y-auto pr-2 font-space-mono text-xs sm:text-sm leading-relaxed text-neutral-800 whitespace-pre-line">
              {activeTab === "lyrics" ? currentSong.lyrics : currentSong.story}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}