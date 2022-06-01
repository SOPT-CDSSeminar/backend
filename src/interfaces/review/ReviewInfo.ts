import mongoose from "mongoose";

export interface ReviewInfo{
    totalAverage: number;
    reviewImage: string;
    comment: string;
    createdAt: string;
}
