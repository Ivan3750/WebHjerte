import db from '../../../app/lib/db';

export async function GET() {
  try {
  const [rows] = await db.execute(
    `SELECT 
      id, 
      title, 
      content, 
      description, 
      cover_image, 
      category,  
      publishedAt,  
      date,  
      seo_title,  
      seo_description,  
      seo_keywords,  
      created_at,  
      updated_at 
    FROM posts 
    ORDER BY id DESC`
  );

  return new Response(JSON.stringify(rows), {
    headers: { 'Content-Type': 'application/json' },
    status: 200,
  });
  } catch (error) {
    console.error('Blog fetch error:', error);
    return new Response(JSON.stringify({ error: 'Server error' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    });
  }
}
