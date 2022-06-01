import mongoose from "mongoose";
import { ReviewInfo } from "../interfaces/review/ReviewInfo";


const ReviewSchema = new mongoose.Schema(
    {
        totalAverage: {
            type: Number,
            required: true
        },
        reviewImage: {
            type: String,
            required: true
        },
        comment: {
            type: String,
            required: true

        },

    },{
        timestamps: {
            createdAt: true,
            updatedAt: false,
          },
    }
);

export default mongoose.model<ReviewInfo & mongoose.Document>(
    "Review", ReviewSchema
); //이름, 뭘