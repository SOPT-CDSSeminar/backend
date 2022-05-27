import { Router } from "express";
import { ReviewController } from "../controller";


const router = Router();

router.get('',ReviewController.getSortedReviews);

export default router;
