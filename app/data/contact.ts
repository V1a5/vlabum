export const contactData = {
  badge: "GET IN TOUCH",
  headlinePrefix: "LET'S MAKE SOME",
  headlineHighlight: "NOISE TOGETHER",
  description:
    "Mau ngundang manggung, kolaborasi rilisan, liputan media, atau sekadar menyapa? Kirim pesan langsung lewat jalur di bawah ini.",
  subjects: [
    "Booking / Gig Inquiry",
    "Music Collaboration",
    "Media & Press Kit",
    "General Inquiry",
    "Other",
  ],
  channels: [
    {
      type: "phone" as const,
      label: "WHATSAPP",
      value: "+62 859-5987-2110",
      href: "https://wa.me/6285959872110",
      badgeBg: "bg-red text-pale-cream",
    },
    {
      type: "email" as const,
      label: "EMAIL",
      value: "vlabum.ofc@gmail.com",
      href: "mailto:vlabum.ofc@gmail.com",
      badgeBg: "bg-black text-pale-cream",
    },
    {
      type: "instagram" as const,
      label: "INSTAGRAM",
      value: "@vlabum.ofc",
      href: "https://instagram.com/vlabum.ofc",
      badgeBg: "bg-yellow text-black",
    },
    {
      type: "youtube" as const,
      label: "YOUTUBE",
      value: "@vlabumplus",
      href: "https://www.youtube.com/@vlabumplus",
      badgeBg: "bg-red text-pale-cream",
    },
  ],
};