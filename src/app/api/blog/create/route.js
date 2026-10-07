import { v4 as uuidv4 } from 'uuid';
import { NextResponse } from 'next/server';
import db from '../../../../app/lib/db';

export async function POST(req) {
  // Endpointet skriver til databasen — kræver et hemmeligt token (BLOG_ADMIN_TOKEN)
  const token = process.env.BLOG_ADMIN_TOKEN;
  const auth = req.headers.get('authorization');
  if (!token || auth !== `Bearer ${token}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { title, markdown, image } = await req.json();

    if (!title || !markdown) {
      return NextResponse.json({ error: 'Title og markdown er påkrævet' }, { status: 400 });
    }

    const id = uuidv4();
    const query = 'INSERT INTO posts (id, title, content, image_url) VALUES (?, ?, ?, ?)';
    const values = [id, title, markdown, image || null];

    const [result] = await db.execute(query, values);

    return NextResponse.json({ success: true, id });
  } catch (error) {
    console.error('❌ MySQL insert error:', error);
    return NextResponse.json({ error: error.message || 'Server error' }, { status: 500 });
  }
}
