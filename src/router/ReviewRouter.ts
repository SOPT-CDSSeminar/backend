import { Router } from "express";
import { ReviewController } from "../controller";

const router: Router = Router();

router.post("/", ReviewController.createReview);
router.get("/", ReviewController.getReviews);

export default router;
