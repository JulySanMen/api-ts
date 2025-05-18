import { UserModel } from "../models/user";
import { UserInterface } from "../interfaces/userInterface";

export class UserRepository {
    async create(user: UserInterface) {
        return await new UserModel(user).save()
    }

    
    async findByEmail(email: string) {
        return await UserModel.findOne({ email })
    }

    async findall() {
        return await UserModel.find()
    }
}