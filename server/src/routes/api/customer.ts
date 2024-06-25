import express from 'express';

import { getCustomerOrders, createCustomerOrder } from '../../controllers/form';

const router = express.Router();

router.post('/create', createCustomerOrder)
router.get('/', getCustomerOrders)

export default router;