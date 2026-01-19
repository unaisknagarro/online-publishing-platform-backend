import Comment from '../models/Comment.js';

const createComment = async (req, res) => {
    const comment = await Comment.create({
        article: req.params.articleId,
        user: req.user.uid,
        userName: req.user.name,
        parent: req.body.parent || null,
        text: req.body.text
    });
    res.status(201).json(comment);
};

const buildCommentTree = (comments) => {
    const map = {};
    const roots = [];

    comments.forEach(c => {
        map[c._id] = { ...c._doc, replies: [] };
    });

    comments.forEach(c => {
        if (c.parentComment) {
            map[c.parent]?.replies.push(map[c._id]);
        } else {
            roots.push(map[c._id]);
        }
    });

    return roots;
};

const getCommentsByArticle = async (req, res) => {
    const comments = await Comment.find({ article: req.params.articleId })
        .sort({ createdAt: -1 });
    const tree = buildCommentTree(comments);
    res.json(tree);
};

const likeComment = async (req, res) => {
    const comment = await Comment.findByIdAndUpdate(
        req.params.commentId,
        { $inc: { likes: 1 } },
        { new: true }
    );

    res.json(comment);
};

export default {
    createComment,
    getCommentsByArticle,
    likeComment
};