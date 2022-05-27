import ReviewCreateDto from "../interface/ReviewCreateDto";
import Review from "../models/Review";
import { PostBaseResponseDto } from "../util/PostBaseResponseDto";

const createReview = async (
  reviewCreateDto: ReviewCreateDto
): Promise<PostBaseResponseDto> => {
  try {
    const review = new Review(reviewCreateDto);
    await review.save();

    const data = {
      _id: review._id;
    }

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
