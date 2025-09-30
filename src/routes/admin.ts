import { getAllUser, getViewUser, postBlockUser, postCreateUser, postUpdateUser } from 'controllers/client.controller'
import express, { Express } from 'express'

const router = express.Router()

const adminRoutes = (app: Express) => {



    // user    
    router.put("/block-user/:id", postBlockUser)
    router.post("/create-user", postCreateUser)
    router.get("/view-user/:id", getViewUser)
    router.get("/users/", getAllUser)
    router.post("/update-user", postUpdateUser)



    app.use("/admin", router)
}

export default adminRoutes
