import express from "express"
import CORS from "cors"
import groceryRouter from "./routes/itemRouter.js"
import fileUpload from "express-fileupload"
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(CORS({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use(fileUpload({
    useTempFiles: "true",
    tempFileDir: "/tmp/"
}))

app.use("/api/v1/inventory/grocery", groceryRouter)

export default app