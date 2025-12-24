import Comment from '../models/Comment.js';

const addComment = async (req, res) => {
    const comment = await Comment.create({
        article: req.params.articleId,
        user: req.user.uid,
        parent: req.body.parent || null,
        text: req.body.text
    });


    res.status(201).json(comment);
};


const getComments = async (req, res) => {
    const comments = await Comment.find({ article: req.params.articleId })
        .populate('user', 'name photo')
        .sort({ createdAt: -1 });


    res.json(comments);
};

export default {   
    addComment,
    getComments 
};