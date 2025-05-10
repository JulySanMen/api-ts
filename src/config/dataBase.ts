import mongoose from 'mongoose';
import * as dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI || "");
    }catch(err){
        console.error(err);
        process.exit(1);
    }
};