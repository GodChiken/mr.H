import express from 'express';
import authMiddleWare from '../common/token';

import bucketList from './bucketList';
import property from './property';
import deposit from './deposit';
import auth from './auth';

const router = express.Router();

router.use('/bucketList',authMiddleWare.isAuthenticated, bucketList);
router.use('/property',authMiddleWare.isAuthenticated, property);
router.use('/deposit',authMiddleWare.isAuthenticated, deposit);
router.use('/auth',auth);

export default router;
