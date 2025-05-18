import * as jwt from "jsonwebtoken";
import * as dotenv from 'dotenv';
dotenv.config();

const SecretKey = process.env.JWT_SECRET;

export const generateToken = (id:string) => {
    return jwt.sign({id}, SecretKey || " ");
}


export const verifyToken = (token:string) => {
    return jwt.verify(token, SecretKey || "");
}