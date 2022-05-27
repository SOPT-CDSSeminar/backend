import express, { Request, Response} from 'express';
import { ReviewCreateDto } from '../interface/ReviewCreateDto';
import Review from '../models/Review';
import { ReviewResponseDto } from "../interface/ReviewResponseDto";
import { PostBaseResponseDto } from '../interface/common/PostBaseResponseDto';
import { ReviewInfo } from '../interface/ReviewInfo';

const getSortedReviews = async (sort: string): Promise<ReviewResponseDto[] | null> => {
    try {
        if (sort == "new"){
            const reviews: ReviewInfo[] = await Review.find().sort({"createAt": 1});
            const data = await Promise.all(reviews.map((review: any) => {
                const result = {
                    reviewImage: review.reviewImage,
                    comment: review.comment,
                    totalAverage: review.totalAverage,
                    createdAt: review.createdAt
                };
                return result;
                }));
            return data;
        }
        if (sort === "best") {
            const reviews: ReviewInfo[] = await Review.find().sort({"totalAverage": 1, "createAt": 1});
            const data = await Promise.all(reviews.map((review: any) => {
                const result = {
                    reviewImage: review.reviewImage,
                    comment: review.comment,
                    totalAverage: review.totalAverage,
                    createdAt: review.timestamps.createdAt
                };
                return result;
                }));
                return data;
        }
        return null;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const createReview = async (reviewCreateDto: ReviewCreateDto): Promise<PostBaseResponseDto> => {
    try {
        const review = new Review(reviewCreateDto);
        await review.save();
        const data = {
            _id: review.id
        };
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export default {
    getSortedReviews,
    createReview
}