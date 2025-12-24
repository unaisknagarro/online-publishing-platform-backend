import User from '../models/User.js';

const listAuthors = async (req, res) => {
    const authors = await User.find().select('name photo bio');
    res.json(authors);
};

export default {
    listAuthors
};