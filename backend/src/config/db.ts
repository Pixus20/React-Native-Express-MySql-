import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config(); 

const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT||5000),
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

pool.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch((err) => console.error('Connection error', err.stack));

export default pool;
