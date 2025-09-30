import adminRoutes from "routes/admin"
import api from "routes/api"
import authRouter from "routes/auth"
import express from 'express'
import initDatabase from "config/seed"

const app = express()


require('dotenv').config()
const port = process.env.PORT || 3002

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')


//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//config static file
app.use(express.static('public'))





//config routes
//cho phép login không cần token
authRouter(app);
adminRoutes(app)
api(app)

//mock data
initDatabase()


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})