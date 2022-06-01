import { Router } from "express";
import ReviewRouter from './ReviewRouter'; //자동완성 안되더라 ReviewRouter 여기서 붙이는 이름.

const router: Router = Router();

/**
 * Router url Mapping Logic
 *
 * router.use('/example', ExampleRouter)
 */
router.use('/review', ReviewRouter);

export default router;
