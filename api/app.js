import express from "express"

const app = express()

app.use(express.json())

app.get("/test", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Test endpoint is working"
    })
})

export default app