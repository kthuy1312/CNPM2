import { getAllUser, getViewUser, postBlockUser, postCreateUser, postUpdateUser } from 'controllers/client.controller'
import { deleteDrone, postCreateDrone, updateDrone } from 'controllers/drone.controller'
import { postCreaterestaurant } from 'controllers/restaurant.controller'
import express, { Express } from 'express'

const router = express.Router()

const adminRoutes = (app: Express) => {



    // user    
    router.put("/block-user/:id", postBlockUser)
    router.post("/create-user", postCreateUser)
    router.get("/view-user/:id", getViewUser)
    router.get("/users/", getAllUser)
    router.post("/update-user", postUpdateUser)

    //restaurant
    router.post("/create-restaurant", postCreaterestaurant)

    // Drone
    router.post("/create-drone", postCreateDrone)
    router.post("/update-drone/:id", updateDrone)
    router.delete("/delete-drone/:id", deleteDrone)

    app.use("/admin", router)
}

export default adminRoutes
