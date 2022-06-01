import { Router } from "express";
import ReviewRouter from "./ReviewRouter";

const router: Router = Router();

/**
 * Router url Mapping Logic
 *
 * router.use('/example', ExampleRouter)
 */
router.use("/review", ReviewRouter);

export default router;
