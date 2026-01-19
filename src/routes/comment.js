import express from 'express';
const router = express.Router();
import ctrl from '../controllers/comment.js';
import { checkJwt } from '../middleware/jwt.js';
import { requireRole } from '../middleware/role.js';


router.get('/:articleId', ctrl.getCommentsByArticle);
router.post('/:articleId', checkJwt,
  requireRole('user'),ctrl.createComment);
  router.post('/like/:commentId', checkJwt, ctrl.likeComment);


export default router;