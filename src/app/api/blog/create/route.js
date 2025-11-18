import { v4 as uuidv4 } from 'uuid';
import { NextRequest, NextResponse } from 'next/server';
import db from '@/app/lib/db';

export async function POST(req) {
  try {
    const { title, markdown, image } = await req.json();

    if (!title || !markdown) {
      return NextResponse.json({ error: 'Заповни всі поля' }, { status: 400 });
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
