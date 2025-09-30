
import express, { Express } from 'express'

const router = express.Router()

const authRouter = (app: Express) => {


    app.use("/auth", router)
}

export default authRouter
