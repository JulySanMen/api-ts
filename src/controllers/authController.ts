import { Request, Response } from "express";
import { UserRepository } from "../repositories/userRepository";
import { AuthService } from "../services/authService";

const authService = new AuthService(new UserRepository());

export class AuthController {
    static async register (req:Request, res:Response){
        try{
            const token = await authService.register(req.body);
            res.status(201).json({
                status: "success",
                token,
            });
        }catch(error){
            console.error('Error in register:', error);
            res.status(500).json({
                status: 'error',
                message: 'Internal Server Error',
                });
        }
    }
}
