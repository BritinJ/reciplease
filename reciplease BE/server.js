import express from "express";
import * as dotenv from 'dotenv';
import mongoose, { mongo } from "mongoose";
import ListRoutes from './routes/lists.js'

dotenv.config();
const port = process.env.PORT;

const app = express();

app.use(express.json());

app.use('/api/list', ListRoutes);

const connectDB = async () => {
    try{
        mongoose.set('strictQuery',true);

        mongoose.connect(process.env.MONGO_URI);

        console.log('MongoDB is now connected')
    } catch (err){
        console.error(err.message);
        process.exit(1);

    }
}

connectDB().then(() =>{
    app.listen(port, () => console.log(`listeninng on port ${port}`));
}).catch(err => console.log(err));