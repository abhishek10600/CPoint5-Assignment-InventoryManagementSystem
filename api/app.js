import express from "express"
import CORS from "cors"
import groceryRouter from "./routes/itemRouter.js"
import fileUpload from "express-fileupload"
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(fileUpload({
    useTempFiles: "true",
    tempFileDir: "/tmp/"
}))

app.use("/inventory/grocery", groceryRouter)

export default app