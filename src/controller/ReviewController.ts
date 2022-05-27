import { validationResult } from "express-validator"
import express, { Request, Response } from 'express';
import statusCode from "../modules/statusCode";
import util from "../modules/util";
import responseMessage from "../modules/responseMessage";
import { ReviewService } from "../service";
import { ReviewCreateDto } from "../interface/ReviewCreateDto";

const getSortedReviews = async (req: Request, res: Response) => {

    const sort: any = req.query.sort;

    try {
        const data = await ReviewService.getSortedReviews(sort as string);
        if(!data) return res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND, responseMessage.NOT_FOUND));
        return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.READ_REVIEW_SUCCESS, data));
    
    } catch (error) {
        console.log(error)
        return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
    }
}

export default {
    getSortedReviews
}