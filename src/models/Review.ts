import mongoose from "mongoose";
import { ReviewInfo } from "../interface/ReviewInfo";

const ReviewSchema = new mongoose.Schema({
    reviewImage: {
        type: String,
    },
    comment: {
        type: String,
        required: true
    },
    totalAverage: {
        type: Number,
        required: true
    }
},    {
    timestamps: true
})

export default mongoose.model<ReviewInfo & mongoose.Document>("Review", ReviewSchema);