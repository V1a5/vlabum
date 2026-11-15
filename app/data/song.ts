// src/data/song.ts
export interface SongItem {
  id: string;
  number: string;
  title: string;
  duration: string;
  audioSrc?: string;
  cassetteSvg: string;
  cassetteFilter?: string;
  stripColor: string;
  youtubeUrl?: string;
  spotifyUrl?: string;
  comingSoon?: boolean;
  lyrics: string;
  story: string;
}

export const songsData: SongItem[] = [
  {
    id: "indahnya-ibukota",
    number: "01",
    title: "INDAHNYA IBUKOTA",
    duration: "02:40",
    audioSrc: "/audio/indahnya ibu kota.mpeg",
    cassetteSvg: "/assets/asset-cassete_Indahnya-ibukota.svg",
    cassetteFilter: "none",
    stripColor: "#009919",
    youtubeUrl: "https://youtube.com",
    spotifyUrl: "", // Kosong -> otomatis tampil abu-abu + badge SEGERA
    comingSoon: false,
    lyrics: `Bangunlah pagi lalu pergi
Hati-hati di jalannya
Agar kita sampai dan dapat nikmati
Keindahan pemandangannya

Coba lihat kanan, coba lihat kiri
Hirup udara segarnya
Semua yang ada membuat hati kita
Jadi lebih bergembira

Ayo kawan, ayo teman, kita kumpul
Nikmati semuanya yang ada di sini
Ibu kota tercinta

Aturlah nafas kalau sesak
Hati-hati dalam berpikir
Kita sudah ada di dalam kota ini
Metropolitan

Ayo kawan, ayo teman, kita kumpul
Nikmati semuanya yang ada di sini
Ibu kota tercinta

Oh, indahnya kota
Alamnya ceria
Semuanya pada suka`,
    story: "-",
  },
  {
    id: "coming-soon-02",
    number: "02",
    title: "TRACK #02 — SEGERA",
    duration: "--:--",
    cassetteSvg: "/assets/asset-cassete_Indahnya-ibukota.svg",
    cassetteFilter: "grayscale(1) brightness(0.75)",
    stripColor: "#737373",
    comingSoon: true,
    lyrics: "-",
    story: "-",
  },
  {
    id: "coming-soon-03",
    number: "03",
    title: "TRACK #03 — SEGERA",
    duration: "--:--",
    cassetteSvg: "/assets/asset-cassete_Indahnya-ibukota.svg",
    cassetteFilter: "grayscale(1) brightness(0.75)",
    stripColor: "#737373",
    comingSoon: true,
    lyrics: "-",
    story: "-",
  },
  {
    id: "coming-soon-04",
    number: "04",
    title: "TRACK #04 — SEGERA",
    duration: "--:--",
    cassetteSvg: "/assets/asset-cassete_Indahnya-ibukota.svg",
    cassetteFilter: "grayscale(1) brightness(0.75)",
    stripColor: "#737373",
    comingSoon: true,
    lyrics: "-",
    story: "-",
  },
];