import { prisma } from "config/client";

const handleCreateDrone = async (
    name: string,
    batteryPct: string
    ) => {

    return await prisma.drone.create({
        data: {
            name,
            batteryPct:+batteryPct
        }
    });
}


const handleUpdateDrone = async (
    id: string,
   name: string,
    batteryPct: string 
    ) => {
    return await prisma.drone.update({
        where: {
            id: +id
        },
        data: {
            name,
          batteryPct:+batteryPct
        }
    })
}
const handleDeleteDrone = async (
    id: string,
    ) => {
    return await prisma.drone.delete({
        where: {
            id: +id
        },
    })
}


export {
    handleCreateDrone, handleUpdateDrone, handleDeleteDrone
}