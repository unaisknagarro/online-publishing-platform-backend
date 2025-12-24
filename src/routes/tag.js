import express from 'express';
const router = express.Router();
import ctrl from '../controllers/tag.js';
import { checkJwt } from '../middleware/jwt.js';
import { requireRole } from '../middleware/role.js';


router.get('/', ctrl.listTags);
router.post('/', checkJwt,
  requireRole('user'),ctrl.createTag)
router.get('/:id', ctrl.getTag);


export default router;