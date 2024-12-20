import jwt from 'jsonwebtoken';

export const generateAccessToken = (user: { id: string; email: string }): string => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET as string, { expiresIn: '10d' });
};
