import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to database!');
}).catch((error)=>{
    console.log('Error connecting to database ', error);
});

const app = express();

app.listen(3000, ()=>{
    console.log(`Server listening on port: `, 3000)
});