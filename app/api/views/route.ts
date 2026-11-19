import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

// GET: Ambil jumlah views terbaru tanpa menambah hitungan
export async function GET() {
  const { data, error } = await supabase
    .from('site_stats')
    .select('views')
    .eq('id', 'vlabum_main')
    .single()

  if (error) {
    return NextResponse.json({ views: 0 }, { status: 500 })
  }

  return NextResponse.json({ views: Number(data?.views ?? 0) })
}

// POST: Tambah +1 view dan kembalikan angka terbaru
export async function POST() {
  const { data, error } = await supabase.rpc('increment_site_views', {
    page_id: 'vlabum_main',
  })

  if (error) {
    return NextResponse.json({ views: 0 }, { status: 500 })
  }

  return NextResponse.json({ views: Number(data ?? 0) })
}