import express from 'express';
const router = express.Router();
import ctrl from '../controllers/article.js';
import { checkJwt } from '../middleware/jwt.js';
import { requireRole } from '../middleware/role.js';


router.get('/', ctrl.listArticles);
//router.post('/', auth, ctrl.createArticle);
router.post('/', checkJwt,
  requireRole('editor'),ctrl.createArticle)
router.get('/:id', ctrl.getArticle);


export default router;