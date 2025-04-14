import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Create connection pool with environment variables
const db = mysql.createPool({
  host: process.env.HOST,  // Use environment variable for host
  user: process.env.USER,  // Use environment variable for user
  password: process.env.PASSWORD,  // Use environment variable for password
  database: process.env.DATABASE,  // Use environment variable for database
});

// Optional: test connection
async function checkConnection() {
  try {
    const [rows] = await db.query('SELECT 1');
    console.log('✅ Database connected:', rows);
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
  }
}

checkConnection();

export default db;
