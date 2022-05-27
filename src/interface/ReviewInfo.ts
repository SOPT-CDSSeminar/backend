import mongoose from "mongoose";

export interface ReviewInfo {
    reviewImage?: string;
    comment: string;
    totalAverage: number;
}