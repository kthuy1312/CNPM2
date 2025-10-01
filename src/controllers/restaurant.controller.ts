import { Request, Response } from "express";


const  postCreaterestaurant = async (req: Request, res: Response) => {
//  try {
//     const {ownerUserId, name, address, atitude, longitude, isOpen, vnpayId}= req.body;
//     const newRestaurant = await handleCreateRestaurant(name, address, atitude, longitude, isOpen, vnpayId);
//      res.status(200).json({
//             message: "Thêm người dùng thành công",
//             data: newRestaurant,
//         });
//     } catch (err: any) {
//         res.status(500).json({
//             message: "Đã xảy ra lỗi khi thêm người dùng",
//             error: err.message,
//         });
//     }
}

export{
    postCreaterestaurant
}