// src/server.ts
import dotenv from 'dotenv';
import events from 'events';
import express, { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

// Ініціалізація dotenv для доступу до змінних оточення
dotenv.config();

// Збільшення ліміту слухачів, щоб уникнути попереджень
events.EventEmitter.defaultMaxListeners = 15;

const app = express();
app.use(express.json());

// Розширення стандартного типу Request для додавання властивості `user`
interface CustomRequest extends Request {
  user?: { id: string; email: string };
}

// Middleware для перевірки токену
const authenticateToken = (req: CustomRequest, res: Response, next: NextFunction): void => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    res.status(401).json({ error: 'Token is required' });
    return;
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string, (err, user) => {
    if (err) {
      res.status(403).json({ error: 'Invalid token' });
      return;
    }
    req.user = user as { id: string; email: string }; // Додайте типізацію для `user`
    next();
  });
};

// Захищений маршрут
app.get('/protected', authenticateToken, (req: CustomRequest, res: Response) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
