import { UserRole } from "@prisma/client";
import { prisma } from "config/client";

const handleCreateUser = async (
    name: string,
    email: string,
    hashedPwd: string,
    role: UserRole,
    phone: string) => {

    return await prisma.user.create({
        data: {
            name,
            email,
            passwordHash: hashedPwd,
            role,
            phone
        }
    });
}

const handleBlockUser = async (id: string) => {
    return await prisma.user.update({
        where: {
            id: +id
        },
        data: {
            status: "DISABLED"
        }
    }
    )
}
const handleViewUser = async (id: string) => {
    return await prisma.user.findUnique({
        where: {
            id: +id
        }
    })
}
const handleGetAllUser = async () => {
    return await prisma.user.findMany();
}

const handleUpdateUser = async (
    id: string,
    name: string,
    email: string,
    phone: string) => {
    return await prisma.user.update({
        where: {
            id: +id
        },
        data: {
            name,
            email,
            phone
        }
    })
}


export {
    handleCreateUser, handleBlockUser, handleViewUser, handleUpdateUser, handleGetAllUser
}