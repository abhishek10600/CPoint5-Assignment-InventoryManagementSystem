import express from "express"
import { addItem, getAllItems } from "../controllers/itemController.js"

const router = express.Router()

router.route("/addItem").post(addItem)
router.route("/all").get(getAllItems)

export default router