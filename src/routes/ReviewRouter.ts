import { Router } from "express";
import { ReviewController } from "../controllers";
import { body } from "express-validator";

const router: Router = Router();

router.post('/', [
    body('totalAverage').notEmpty(),
    body('reviewImage').notEmpty(),
    body('comment').notEmpty()
], ReviewController.createReview);

export default router;