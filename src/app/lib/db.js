// lib/db.ts
import dotenv from 'dotenv';
dotenv.config({ path: './.env.local' });
import mysql from 'mysql2/promise';

console.log('🔍 DB config:', {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  db: process.env.DB_NAME,
});

const db = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: false, // обов'язково для Aiven/PlanetScale
  },
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default db;




