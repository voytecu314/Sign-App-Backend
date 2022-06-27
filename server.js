import express from  'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from  'mongoose';

const app = express();
dotenv.config();

const port = process.env.PORT || 5000;

app.use(cors());

app.listen(port,(err)=>{
    if(err) console.log(err.message)
    else console.log('Listening on port ', port);
});