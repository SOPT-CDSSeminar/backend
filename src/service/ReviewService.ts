import ReviewCreateDto from "../interface/ReviewCreateDto";
import Review from "../models/Review";
import ReviewEntity from "../models/ReviewEntity";
import { PostBaseResponseDto } from "../util/PostBaseResponseDto";

const createReview = async (
  reviewCreateDto: ReviewCreateDto
): Promise<PostBaseResponseDto> => {
  try {
    const review = new Review(reviewCreateDto);
    await review.save();

    const data = {
      _id: review._id,
    };

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getReviews = async (
  query: "new" | "popular"
): Promise<ReviewEntity[]> => {
  try {
    if (query === "new") {
      const reviews = await Review.find();
      return reviews;
    } else {
      const reviews = await Review.find().sort({ totalAverage: -1 });
      return reviews;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
