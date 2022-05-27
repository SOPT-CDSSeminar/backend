import { Router } from "express";
import ReviewRouter from './ReviewRouter';

const router = Router();

router.use('/review', ReviewRouter);
/**
 * Router url Mapping Logic
 *
 * router.use('/example', ExampleRouter)
 */

export default router;
