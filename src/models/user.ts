import { Schema, model } from "mongoose";
import * as bcrypt from 'bcrypt';

const userSchema = new Schema({
    email: {
        type: String,
        required:true,
        unique:true
    },
    password: {
        type: String,
        required:true
    },
});

userSchema.pre('save', async(next) => {
    if (!this.isModified('password')) next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

export const UserModel = model('User', userSchema);