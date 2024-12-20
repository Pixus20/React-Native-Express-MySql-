import cors from 'cors';
import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import pool from './config/db';
import authRouter from './routes/auth';

dotenv.config();

import events from 'events';
events.EventEmitter.defaultMaxListeners = 15;

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: 'http://localhost:8081',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);

pool
  .connect()
  .then(() => {
    console.log('Database connected...');
  })
  .catch((err) => console.error('Database connection error:', err));

interface CustomRequest extends Request {
  user?: { id: string; email: string };
}

app.get('/protected',  (req: CustomRequest, res: Response) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

app.use(authRouter);

const PORT = process.env.PORT || 5100;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
