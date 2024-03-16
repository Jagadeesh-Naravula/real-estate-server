import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to database!');
}).catch((error)=>{
    console.log('Error connecting to database ', error);
});

const app = express();

app.use(express.json());

app.listen(3000, ()=>{
    console.log(`Server listening on port: `, 3000)
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);