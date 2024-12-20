import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import pool from '../config/db';

dotenv.config();

const router = express.Router();
router.post('/auth/register', async (req: Request, res: Response): Promise<void> => {
  const { username, email, password,  } = req.body;

  if (!username || !email || !password ) {
    res.status(400).json({ error: 'All fields are required' });
    return;
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10); // Хешування пароля

    const query = `
      INSERT INTO users (username, email, password)
      VALUES ($1, $2, $3)
      RETURNING id, username, email
    `;

    const result = await pool.query(query, [username, email, hashedPassword,]);
    const user = result.rows[0];

    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'User registration failed' });
  }
});


export default router;
