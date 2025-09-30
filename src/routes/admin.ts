import express, { Express } from 'express'

const router = express.Router()

const adminRoutes = (app: Express) => {



    app.use("/admin", router)
}

export default adminRoutes
