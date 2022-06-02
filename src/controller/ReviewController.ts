import { Request, Response } from "express";
import { validationResult } from "express-validator";
import ReviewCreateDto from "../interface/ReviewCreateDto";
import { ReviewService } from "../service";
import BaseResponse from "../util/BaseResponse";
import message from "../util/message";
import statusCode from "../util/statsuCode";

const createReview = async (req: Request, res: Response) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(BaseResponse.fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));
  }

  const createReviewDto: ReviewCreateDto = req.body;

  try {
    const data = await ReviewService.createReview(createReviewDto);

    res
      .status(statusCode.CREATED)
      .send(
        BaseResponse.success(
          statusCode.CREATED,
          message.CREATE_REVIEW_SUCCESS,
          data
        )
      );
  } catch (error) {
    console.log(error);
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        BaseResponse.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          message.INTERNAL_SERVER_ERROR
        )
      );
  }
};

declare function isValidatedParam(param: any): param is "new" | "popular";

const getReviews = async (req: Request, res: Response) => {
  const params = req.query.sort;

  try {
    if (isValidatedParam(params)) {
      const data = await ReviewService.getReviews(params);
      res
        .status(statusCode.OK)
        .send(
          BaseResponse.success(statusCode.OK, message.READ_REVIEW_SUCCESS, data)
        );
    } else {
      return res
        .status(statusCode.BAD_REQUEST)
        .send(BaseResponse.fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));
    }
  } catch (error) {
    console.log(error);
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        BaseResponse.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          message.INTERNAL_SERVER_ERROR
        )
      );
  }
};

export default {
  createReview,
  getReviews,
};
