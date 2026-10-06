import express from 'express'
import dotenv from 'dotenv'

import { authenticateToken } from './middleware/auth.js';
import { hzOnly } from './middleware/hzOnly.js';

dotenv.config()

const secret = process.env.JWT_SECRET;

const app = express()
app.use(express.json())

app.get('/public', (req, res) => {
    res.json({ message: `Hello, welcome to the public space.` });
})

app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: `Hello, this is protected space.` });
});

app.get('/hzOnly', authenticateToken, hzOnly, (req, res) => {
  res.json({ message: `Hello, this is for hz-members only.` });
});

app.listen(3000)