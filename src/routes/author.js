import express from 'express';
const router = express.Router();
import ctrl from '../controllers/author.js';

router.get('/', ctrl.listAuthors);

export default router;