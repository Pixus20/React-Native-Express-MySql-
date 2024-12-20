// import { Request, Response } from 'express';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import User, {IUser } from '../models/User';

// const JWT_SECRET = process.env.JWT_SECRET || 'secret';

// export const register = async (req: Request, res: Response): Promise<void> => {
//     try {
//         const { username, email, password } = req.body;

//         const hashedPassword = await bcrypt.hash(password, 10);
//         const newUser: IUser = new User({ username, email, password: hashedPassword });

//         await newUser.save();
//         res.status(201).json({ message: 'User registered successfully' });
//     } catch (error) {
//         res.status(500).json({ error.message});
//     }
// };

// export const login = async (req: Request, res: Response): Promise<void> => {
//     try {
//         const { email, password } = req.body;

//         const user: IUser | null = await User.findOne({ email });
//         if (!user) {
//             res.status(404).json({ message: 'User not found' });
//             return;
//         }

//         const isPasswordValid = await bcrypt.compare(password, user.password);
//         if (!isPasswordValid) {
//             res.status(400).json({ message: 'Invalid credentials' });
//             return;
//         }

//         const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1d' });
//         res.status(200).json({ token, user: { id: user._id, username: user.username, email: user.email } });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };


import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import { createUser, findUserByEmail } from '../models/User';

export const register = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  try {
    if (!username || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await createUser(username, email, hashedPassword);

    res.status(201).json({ message: 'User registered successfully', user: { id: newUser.id, username: newUser.username } });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
