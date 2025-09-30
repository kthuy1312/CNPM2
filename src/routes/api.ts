import express, { Express } from 'express'


const router = express.Router()

const api = (app: Express) => {



    app.use("/api", router)
}


export default api
