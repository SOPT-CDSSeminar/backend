import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";
import { ReviewCreateDto } from "../interfaces/review/ReviewCreateDto";
import Review from "../models/Review";

const createReview = async(reviewCreateDto: ReviewCreateDto): Promise<PostBaseResponseDto> => {
    try{
        const review = new Review({
            totalAverage: reviewCreateDto.totalAverage,
            reviewImage: reviewCreateDto.reviewImage,
            comment: reviewCreateDto.comment
        });
        await review.save();
        
        const data = {
            _id: review._id
        };

        return data;
    } catch(err){
        console.log(err);
        throw err;
    }
}

export default {
    createReview
}