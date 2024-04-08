import express from "express";
import * as dotenv from 'dotenv';
import mongoose, { mongo } from "mongoose";

dotenv.config();

const app = express();

const connectDB = async () => {
    try{
        mongoose.set('strictQuery', true)
    }
}


app.listen(4000, () => console.log('listening on port 4000'));

app.get('/', (req,res) =>{
res.json({msg: 'backend server started'})
})