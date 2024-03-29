import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to database!');
}).catch((error)=>{
    console.log('Error connecting to database ', error);
});

const app = express();
app.use(cookieParser());

app.use(express.json());

app.listen(3000, ()=>{
    console.log(`Server listening on port: `, 3000)
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);

app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500 ;
    const message = err.message || 'Internal server error';
    return res.status(statusCode).json({ success: false, statusCode,message});
});