"use client";

import { Phone, Mail, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { contactData } from "../../data/contact";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const iconMap = {
  phone: Phone,
  email: Mail,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
};

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: contactData.subjects[0],
    message: "",
    company: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (formData.company) {
      setIsLoading(false);
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Invalid email address");
      setIsLoading(false);
      return;
    }

    if (formData.message.length < 10) {
      toast.error("Message must be at least 10 characters");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Email sent successfully! 🚀");

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: contactData.subjects[0],
          message: "",
          company: "",
        });
      } else {
        toast.error(result.error || "Failed to send email ❌");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error sending email ⚠️");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="Contact"
      className="relative w-full bg-pale-cream text-black py-16 sm:py-24 px-4 overflow-hidden border-t-4 border-black"
    >
      <div className="max-w-6xl mx-auto">
        {/* Ubah items-start -> items-center agar form kanan tepat di tengah atas-bawah */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* KOLOM KIRI: INFO & KARTU KONTAK ZINE */}
          <div className="lg:col-span-5">
            <div className="inline-block bg-black text-pale-cream border-2 border-black px-3 py-1 shadow-[-3px_3px_0px_#D90D0D] -rotate-2 mb-4">
              <span className="font-space-mono text-xs font-bold tracking-widest uppercase">
                {contactData.badge}
              </span>
            </div>

            <h2 className="font-bangers text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-wide uppercase mb-4">
              {contactData.headlinePrefix}{" "}
              <span className="inline-block bg-red text-pale-cream px-2.5 py-0.5 border-[3px] border-black shadow-[-4px_4px_0px_#000000] rotate-1">
                {contactData.headlineHighlight}
              </span>
            </h2>

            <p className="font-space-mono text-xs sm:text-sm leading-relaxed text-neutral-800 mb-7">
              {contactData.description}
            </p>

            {/* Contact Cards */}
            <div className="space-y-3">
              {contactData.channels.map((item, index) => {
                const IconComponent = iconMap[item.type];
                return (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-3 bg-[#FAFAFA] border-[3px] border-black shadow-[-4px_4px_0px_#000000] hover:-translate-y-1 hover:bg-yellow transition-all duration-200 group"
                  >
                    <div
                      className={`w-10 h-10 ${item.badgeBg} border-2 border-black flex items-center justify-center shrink-0`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-space-mono text-[10px] font-bold tracking-widest text-neutral-600 uppercase">
                        {item.label}
                      </p>
                      <p className="font-space-mono text-xs sm:text-sm font-bold text-black truncate">
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* KOLOM KANAN: FORMULIR PESAN GAYA KOMIK */}
          <div className="lg:col-span-7 relative">
            <div className="hidden sm:block absolute inset-0 bg-red border-4 border-black translate-x-3 translate-y-3 pointer-events-none" />

            <div className="relative bg-[#FAFAFA] border-4 border-black p-5 sm:p-8 shadow-[-5px_5px_0px_#D90D0D] sm:shadow-none">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="hidden"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-space-mono text-xs font-bold uppercase tracking-wider mb-1.5">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Vlas"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 bg-white border-[3px] border-black font-space-mono text-xs sm:text-sm focus:bg-yellow/20 focus:shadow-[-3px_3px_0px_#000000] outline-none transition-all placeholder:text-neutral-400"
                    />
                  </div>
                  <div>
                    <label className="block font-space-mono text-xs font-bold uppercase tracking-wider mb-1.5">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Bumi"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 bg-white border-[3px] border-black font-space-mono text-xs sm:text-sm focus:bg-yellow/20 focus:shadow-[-3px_3px_0px_#000000] outline-none transition-all placeholder:text-neutral-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-space-mono text-xs font-bold uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="kamu@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 bg-white border-[3px] border-black font-space-mono text-xs sm:text-sm focus:bg-yellow/20 focus:shadow-[-3px_3px_0px_#000000] outline-none transition-all placeholder:text-neutral-400"
                  />
                </div>

                <div>
                  <label className="block font-space-mono text-xs font-bold uppercase tracking-wider mb-1.5">
                    Subject
                  </label>
                  <div className="relative">
                    <select
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 bg-white border-[3px] border-black font-space-mono text-xs sm:text-sm focus:bg-yellow/20 focus:shadow-[-3px_3px_0px_#000000] outline-none transition-all appearance-none cursor-pointer"
                    >
                      {contactData.subjects.map((subjectItem, idx) => (
                        <option key={idx} value={subjectItem}>
                          {subjectItem}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block font-space-mono text-xs font-bold uppercase tracking-wider mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tulis detail acara, kolaborasi, atau pesanmu di sini..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 bg-white border-[3px] border-black font-space-mono text-xs sm:text-sm focus:bg-yellow/20 focus:shadow-[-3px_3px_0px_#000000] outline-none transition-all resize-none placeholder:text-neutral-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-red hover:bg-yellow text-pale-cream hover:text-black font-bangers text-xl sm:text-2xl tracking-wider px-6 py-3 border-4 border-black shadow-comic hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isLoading ? "SENDING..." : "SEND MESSAGE"}
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}