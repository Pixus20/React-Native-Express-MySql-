import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
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
    const hashedPassword = await bcrypt.hash(password, 10); 

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


router.post('/auth/login', async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ error: 'Email and password are required' });
    return;
  }

  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

    if (result.rows.length === 0) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    const user = result.rows[0];

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      res.status(401).json({ error: 'Incorrect password' });
      return;
    }

    console.log('User Data:', { id: user.id, email: user.email });
    console.log('Token Secret:', process.env.ACCESS_TOKEN_SECRET);

    const token = jwt.sign({ userId: user.id, email: user.email }, process.env.ACCESS_TOKEN_SECRET!, { expiresIn: '10d' });

    res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'strict' });

    res.status(200).json({ message: 'Login successful', user: { id: user.id, email: user.email }, token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Login failed' });
  }
});


export default router;
