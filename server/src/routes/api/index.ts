import { Router } from "express";
import customerRoute from './customer'
const router = Router();

router.use('/customer', customerRoute)

export default router;