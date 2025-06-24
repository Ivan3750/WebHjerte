// scripts/test-db.ts
import dotenv from 'dotenv';
dotenv.config();

import db from './lib/db.js'; // або .ts — залежить від того, як у тебе

(async () => {
  try {
    const conn = await db.getConnection();
    console.log('✅ Connected to DB');
    conn.release();
    process.exit(0);
  } catch (err) {
    console.error('❌ Failed to connect:', err);
    process.exit(1);
  }
})();
