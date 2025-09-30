import { Request, Response } from "express";
import { prisma } from 'config/client'
import bcrypt from 'bcrypt';

const saltRounds = 10;

//hash pwd
const hashPassword = async (password: string) => {
    return await bcrypt.hash(password, saltRounds)
}
const comparePassword = async (password: string, hashPassword: string) => {
    return await bcrypt.compare(password, hashPassword)
}


export { hashPassword, comparePassword }    