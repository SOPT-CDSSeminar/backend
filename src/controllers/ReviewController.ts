import express, {Request, Response} from "express";
import util from "../modules/util";
import statusCode from "../modules/statusCode";
import message from "../modules/responseMessage"
import { ReviewCreateDto } from "../interfaces/review/ReviewCreateDto";
import { ReviewService } from "../services";
import { validationResult } from "express-validator";
import Review from "../models/Review";

/**
 *  @route POST /review
 *  @desc Create Review
 *  @access Public
 */
const createReview = async (req: Request, res: Response) => {
    //validation
    const error = validationResult(req);
    if (!error.isEmpty()){
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.NULL_VALUE));
    }

    //req.body 받아서
    const reviewCreateDto: ReviewCreateDto = req.body;
    try{
        const data = await ReviewService.createReview(reviewCreateDto);
        res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, message.CREATE_REVIEW_SUCCESS, data));
    } catch(err){
        console.log(err);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}

/**
 *  @route GET /review
 *  @desc Get Reviews
 *  @access Public
 */

const getReviews = async(req:Request, res:Response) => {
    const sort:any = req.query.sort //?sort=new|popular
    try{
        if (sort){
            const data = await ReviewService.getReviews(sort);
            res.status(statusCode.OK).send(util.success(statusCode.OK, message.READ_REVIEW_SUCCESS, data));
        }else{
            return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));
        }

    }catch(error){
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}

export default{
    createReview,
    getReviews
}