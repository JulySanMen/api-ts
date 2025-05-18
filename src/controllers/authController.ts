import { Request, Response } from "express";
import { UserRepository } from "../repositories/userRepository";
import { AuthService } from "../services/authService";
import { AnyArray } from "mongoose";

const authService = new AuthService(new UserRepository());

export class AuthController {
    static async register (req:Request, res:Response){
        try{
            const token = await authService.register(req.body);
            res.json({token});
        }catch(error:any){
            res.status(400).json({message: error.message || "Datos no validos"});
        }
    }
    static async login (req:Request, res:Response){
        try{
            const token = await authService.login(req.body);//{email, password}
            res.json({token});
        }catch(error:any){
            res.status(400).json({message: error.message || "Credenciales no validas"});
        }
    }

    static async findAll (req:Request, res:Response){
        try{
            const users = await authService.findAll();
            res.json(users);
        }catch(error:any){
            res.status(400).json({message: error.message || "No se encontraron usuarios"});
        }
    }

}

