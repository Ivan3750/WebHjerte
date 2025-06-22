// pages/api/project/[id].js
import db from '@/lib/db'; // 🧠 твій модуль з підключенням до бази (аналоги ../../db)
 
export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  if (method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const [rows] = await db.query(
      'SELECT id, name, details, technology, steps, deadline, progress FROM projects WHERE id = ?',
      [id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: 'Project not found' });
    }

    const proj = rows[0];

    const project = {
      id: proj.id,
      name: proj.name,
      details: proj.details,
      technology: proj.technology,
      steps: proj.steps?.split(',') || [],
      deadline: proj.deadline,
      progress: proj.progress,
    };

    return res.status(200).json(project);
  } catch (error) {
    console.error('Error fetching project:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
