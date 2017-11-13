"use strict";
import express from 'express';
import userRoutes from './user.routes';
/* import routes */

const router = express.Router();

router.use('/auth', userRoutes);
/*
router.use('/url1', url1Routes);
router.use('/url2', url2Routes);
*/

export default router;
