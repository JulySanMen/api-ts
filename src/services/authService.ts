import { LoginDTO, RegisterDTO } from "../dtos/userrDTO";
import { UserRepository } from "../repositories/userRepository";
import { generateToken } from "../utils/jwt";
import * as bcrypt from "bcrypt";

export class AuthService {
  constructor(private userRepository: UserRepository) {}

  async register(data: RegisterDTO) {
    const exist = await this.userRepository.findByEmail(data.email);
    if (exist) throw new Error("User already exists");
    const user = await this.userRepository.create(data);
    return generateToken(user._id.toString());
  }

  async login(data:LoginDTO){
    const user = await this.userRepository.findByEmail(data.email);
    if (!user) throw new Error("User not found");
    const isMarch = bcrypt.compare(user.password, data.password);
    if (!isMarch) throw new Error("Invalid credentials");

    return generateToken(user._id.toString());
  }
}
