// import cors from 'cors';
// import dotenv from 'dotenv';
// import events from 'events';
// import express, { NextFunction, Request, Response } from 'express';
// import jwt from 'jsonwebtoken';
// import pool from './config/db';

// dotenv.config();

// events.EventEmitter.defaultMaxListeners = 15;

// const app = express();
// app.use(express.json());

// app.use(
//   cors({
//     origin: 'http://localhost:8081',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
//   })
// );

// // Перевірка підключення до бази даних
// pool
//   .connect()
//   .then(() => {
//     console.log('Database connected...');
//   })
//   .catch((err) => console.error('Database connection error:', err));

// // Інтерфейс для розширення об'єкта Request
// interface CustomRequest extends Request {
//   user?: { id: string; email: string };
// }

// // Middleware для перевірки токена
// const authenticateToken = (
//   req: CustomRequest,
//   res: Response,
//   next: NextFunction
// ): void => {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1];

//   if (!token) {
//     res.status(401).json({ error: 'Token is required' });
//     return;
//   }

//   jwt.verify(
//     token,
//     process.env.ACCESS_TOKEN_SECRET as string,
//     (err, user) => {
//       if (err) {
//         res.status(403).json({ error: 'Invalid token' });
//         return;
//       }
//       req.user = user as { id: string; email: string };
//       next();
//     }
//   );
// };

// // Захищений маршрут
// app.get('/protected', authenticateToken, (req: CustomRequest, res: Response) => {
//   res.json({ message: 'This is a protected route', user: req.user });
// });

// app.post('/auth/register',  (req: CustomRequest, res: Response) => {
//   res.json({ message: 'Register user', user: req.user });
// });

// app.get('/auth/login', authenticateToken, (req: CustomRequest, res: Response) => {
//   res.json({ message: 'Login user', user: req.user });
// });



// // Запуск сервера
// const PORT = process.env.PORT || 5100;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });



import cors from 'cors';
import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import pool from './config/db';
import authRouter from './routes/auth'; // Імпортуємо маршрути з auth.ts

dotenv.config();

// Налаштування максимального числа слухачів для подій
import events from 'events';
events.EventEmitter.defaultMaxListeners = 15;

const app = express();
app.use(express.json());

// Налаштування CORS для дозволу запитів з вашого фронтенд-домену
app.use(
  cors({
    origin: 'http://localhost:8081',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// Перевірка підключення до бази даних
pool
  .connect()
  .then(() => {
    console.log('Database connected...');
  })
  .catch((err) => console.error('Database connection error:', err));

// Інтерфейс для розширення об'єкта Request
interface CustomRequest extends Request {
  user?: { id: string; email: string };
}

// Захищений маршрут
app.get('/protected',  (req: CustomRequest, res: Response) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

// Використовуємо маршрути з файлу auth.ts
app.use(authRouter);  // Цей рядок додає всі маршрути з вашого файлу auth.ts

// Запуск сервера
const PORT = process.env.PORT || 5100;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
