import Tag from '../models/Tag.js';


const listTags = async (req, res) => {
    const { page = 1, limit = 10, search, sort } = req.query;

    let sortQuery = { name: 1 };

    const tags = await Tag.find()
        .sort(sortQuery)
        .skip((page - 1) * limit)
        .limit(Number(limit));
    res.json(tags);
};


const createTag = async (req, res) => {
    const tag = await Tag.create({ ...req.body});
    res.status(201).json(tag);
};


const getTag = async (req, res) => {
    const tag = await Tag.findById(req.params.id)

    await tag.save();
    res.json(tag);
};

export default {
    listTags,
    createTag,
    getTag
};