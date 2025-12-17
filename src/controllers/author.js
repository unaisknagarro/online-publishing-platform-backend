const User = require('../models/User');

exports.listAuthors = async (req, res) => {
const authors = await User.find().select('name photo bio');
res.json(authors);
};