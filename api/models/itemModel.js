import mongoose from "mongoose"

const itemSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is a required field."]
        },
        description: {
            type: String,
            required: [true, "Description is a required field."]
        },
        photo: {
            public_id: {
                type: String,
            },
            secure_url: {
                type: String
            }
        },
        quantity: {
            type: Number,
            required: [true, "Quantity is a required field"]
        }
    },
    {
        timestamps: true
    }
)
const Item = mongoose.model("Item", itemSchema)
export default Item