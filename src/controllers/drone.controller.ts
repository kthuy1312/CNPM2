import { Request, Response } from "express";
import { handleCreateDrone, handleDeleteDrone, handleUpdateDrone } from "services/drone.service";

const postCreateDrone = async (req: Request, res: Response) => {
    try {
        const { name,batteryPct } = req.body;

        const data = await handleCreateDrone(name,batteryPct);
        res.status(200).json({
            message: "Thêm drone thành công",
            data: data,
        });
    } catch (err: any) {
        res.status(500).json({
            message: "Đã xảy ra lỗi khi thêm drone",
            error: err.message,
        });
    }
}

const updateDrone = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const { name,batteryPct } = req.body;

        const data = await handleUpdateDrone(id,name,batteryPct);
        res.status(200).json({
            message: "Cập nhật drone thành công",
            data: data,
        });
    } catch (err: any) {
        res.status(500).json({
            message: "Đã xảy ra lỗi khi cập nhật drone",
            error: err.message,
        });
    }
}

const deleteDrone = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const data = await handleDeleteDrone(id );
        res.status(200).json({
            message: "Xóa drone thành công",
            data: data,
        });
    } catch (err: any) {
        res.status(500).json({
            message: "Đã xảy ra lỗi khi xóa drone",
            error: err.message,
        });
    }
}


export{
    postCreateDrone, updateDrone, deleteDrone
}