import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";
import { ReviewCreateDto } from "../interfaces/review/ReviewCreateDto";
import { ReviewInfo } from "../interfaces/review/ReviewInfo";
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

const getReviews = async(query:string) : Promise<ReviewInfo[]|null> => {
    try {
        if (query === "new"){
            const reviews = await Review.find();
            return reviews;
        } if (query === "best") {
            const reviews = await Review.find().sort({ totalAverage: -1 });
            return reviews;
        } else{
            return null;
        }
    } catch(error){
        console.log(error);
        throw error;
    }
} 
export default {
    createReview,
    getReviews
}