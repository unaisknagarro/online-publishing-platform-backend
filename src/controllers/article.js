import Article from '../models/Article.js';


const listArticles = async (req, res) => {
    const { page = 1, limit = 10, search, sort } = req.query;


    const filter = { status: 'published' };
    if (search) filter.title = { $regex: search, $options: 'i' };


    let sortQuery = { createdAt: -1 };
    if (sort === 'popular') sortQuery = { views: -1 };


    const articles = await Article.find()
        .populate('author', 'name photo')
        .sort(sortQuery)
        .skip((page - 1) * limit)
        .limit(Number(limit));


    res.json(articles);
};


const createArticle = async (req, res) => {
    const article = await Article.create({ ...req.body, author: req.user.uid });
    res.status(201).json(article);
};


const getArticle = async (req, res) => {
    const article = await Article.findById(req.params.id)
        .populate('author', 'name bio')
        .populate('tags');


    article.views++;
    await article.save();


    res.json(article);
};

export default {
    listArticles,
    createArticle,
    getArticle
};