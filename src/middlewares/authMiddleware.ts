import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt";

export const authMiddleware = (req:Request, res:Response, next:NextFunction)=>{
    const token = req.headers.authorization?.split(' ')[1];
    if(!token) return res.status(401).json({message: "Token no proporcionado"});
    try{
        const id = verifyToken(token);//{id:1}regresa un objeto 
        if (!req.body) req.body = {}
        req.body.user = id;//user:{id:1}
        next();
    }catch(error:any){
        res.status(401).json({message: error.message || "Token invalido"});
    }
   
}