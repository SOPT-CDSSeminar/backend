import mongoose from "mongoose";

export interface ReviewCreateDto {
    totalAverage: number;
    reviewImage: string;
    comment: string;
}