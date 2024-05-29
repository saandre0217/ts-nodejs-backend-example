import express from 'express';

import { createCustomer } from '../../controllers/form';

const router = express.Router();

router.post('/create', createCustomer)

export default router;