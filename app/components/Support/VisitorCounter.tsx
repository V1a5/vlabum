'use client'

import { useEffect, useState } from 'react'

export function VisitorCounter() {
  const [views, setViews] = useState<number | null>(null)

  useEffect(() => {
    const trackVisit = async () => {
      try {
        const hasVisited = sessionStorage.getItem('vlabum_visited')
        const method = hasVisited ? 'GET' : 'POST'

        const res = await fetch('/api/views', { method })
        if (!res.ok) return

        const data = await res.json()
        setViews(data.views)

        if (!hasVisited) {
          sessionStorage.setItem('vlabum_visited', 'true')
        }
      } catch {
        // Abaikan jika gagal memuat counter agar tidak mengganggu UI
      }
    }

    trackVisit()
  }, [])

  // Format menjadi 5 digit ala penghitung pita kaset (contoh: 00042)
  const formattedViews =
    views !== null ? String(views).padStart(5, '0') : '-----'

  return (
    <div className="inline-flex items-center gap-2 border-2 border-black bg-pale-cream px-3 py-1.5 shadow-[-3px_3px_0px_#000000] -rotate-1 select-none">
      {/* Titik indikator merah menyala */}
      <span className="w-2 h-2 rounded-full bg-red animate-pulse shrink-0" />

      <span className="font-space-mono text-[10px] sm:text-xs font-bold tracking-widest text-black uppercase">
        VISITORS
      </span>

      <span className="bg-black text-pale-cream font-space-mono text-xs sm:text-sm font-bold tracking-[0.2em] px-2 py-0.5">
        {formattedViews}
      </span>
    </div>
  )
}