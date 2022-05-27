import { Router } from "express";
import { ReviewController } from "../controller";


const router = Router();

router.get('',ReviewController.getSortedReviews);
router.post('/', ReviewController.createReview);

export default router;
