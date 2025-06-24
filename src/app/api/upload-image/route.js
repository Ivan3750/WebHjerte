import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SECRET_KEY
);

export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get('file');

  const { data, error } = await supabase.storage
    .from('blog-images')
    .upload(`images/${Date.now()}_${file.name}`, file, {
      cacheControl: '3600',
      upsert: false,
    });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const { publicUrl } = supabase.storage.from('blog-images').getPublicUrl(data.path);
  return NextResponse.json({ url: publicUrl });
}
