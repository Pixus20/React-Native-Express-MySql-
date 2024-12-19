import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

interface AuthRequest extends Request {
    user?: string | object;
}

const auth = (req: AuthRequest, res: Response, next: NextFunction): void => {
    const token = req.header('Authorization');
    if (!token) {
        res.status(401).json({ message: 'Access denied' });
        return;
    }

    try {
        const verified = jwt.verify(token, JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token' });
    }
};

export default auth;
