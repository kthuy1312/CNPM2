import { Request, Response } from "express";
import { hashPassword } from "services/auth.service";
import { handleBlockUser, handleCreateUser, handleGetAllUser, handleUpdateUser, handleViewUser } from "services/client.service";

//   router.post("/block-user/:id", postBlockUser)
//     router.post("/create-user", postCreateUser)
//     router.get("/view-user/:id", getViewUser)
//     router.post("/update-user", postUpdateUser)


const postCreateUser = async (req: Request, res: Response) => {
    try {
        const { name, email, password, role, phone } = req.body;
        const hashedPwd = await hashPassword(password);

        const newUser = await handleCreateUser(name, email, hashedPwd, role, phone);
        res.status(200).json({
            message: "Thêm người dùng thành công",
            data: newUser,
        });
    } catch (err: any) {
        res.status(500).json({
            message: "Đã xảy ra lỗi khi thêm người dùng",
            error: err.message,
        });
    }
}

const postBlockUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const data = await handleBlockUser(id);
        res.status(200).json({
            message: "Khóa người dùng thành công",
            data,
        });
    } catch (err: any) {
        res.status(500).json({
            message: "Đã xảy ra lỗi khi khóa người dùng",
            error: err.message,
        });
    }
}
const getViewUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const data = await handleViewUser(id);
        res.status(200).json({
            message: "Lấy thông tin người dùng thành công",
            data,
        });
    } catch (err: any) {
        res.status(500).json({
            message: "Đã xảy ra lỗi khi lấy thông tin người dùng",
            error: err.message,
        });
    }
}
const getAllUser = async (req: Request, res: Response) => {
    try {
        
        const data = await handleGetAllUser();
        res.status(200).json({
            message: "Lấy tất cả người dùng thành công",
            data,
        });
    } catch (err: any) {
        res.status(500).json({
            message: "Đã xảy ra lỗi khi lấy tất cả người dùng",
            error: err.message,
        });
    }
}
const postUpdateUser = async (req: Request, res: Response) => {
    try {
        const { id, name, email, phone } = req.body;

        const newUser = await handleUpdateUser(id, name, email, phone);
        res.status(200).json({
            message: "Cập nhật người dùng thành công",
            data: newUser,
        });
    } catch (err: any) {
        res.status(500).json({
            message: "Đã xảy ra lỗi khi cập nhật người dùng",
            error: err.message,
        });
    }
}

export {
    postCreateUser, postBlockUser, getViewUser, postUpdateUser,getAllUser
}