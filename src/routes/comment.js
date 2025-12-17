const router = require('express').Router();
const auth = require('../middleware/auth');
const ctrl = require('../controllers/comment');


router.get('/:articleId', ctrl.getComments);
router.post('/:articleId', auth, ctrl.addComment);


module.exports = router;