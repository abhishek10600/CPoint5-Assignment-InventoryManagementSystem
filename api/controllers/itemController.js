import { v2 as cloudinary } from "cloudinary"
import Item from "../models/itemModel.js"

export const addItem = async (req, res, next) => {
    const { name, description, quantity } = req.body
    if (!req.files) {
        return next(new Error("Item image file missing."))
    }
    if (!name || !description || !quantity) {
        return next(new Error("Required fields missing."))
    }
    try {
        const file = req.files.photo
        const result = await cloudinary.uploader.upload(file.tempFilePath, {
            folder: "inventorymanagementsystem/grocery"
        })
        let item = await Item.create({
            name,
            description,
            photo: {
                public_id: result.public_id,
                secure_url: result.secure_url
            },
            quantity
        })
        res.status(201).json({
            success: true,
            message: "Grocery item added successfully",
            item
        })
    } catch (error) {
        next(new Error(error.message))
    }
}

export const getAllItems = async (req, res, next) => {
    try {
        const items = await Item.find()
        res.status(200).json({
            items
        })
    } catch (error) {
        next(new Error(error.message))
    }
}