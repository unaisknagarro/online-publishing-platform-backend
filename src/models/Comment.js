const mongoose = require('mongoose');


const CommentSchema = new mongoose.Schema({
article: { type: mongoose.Schema.Types.ObjectId, ref: 'Article' },
user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
userName: String,
parent: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment', default: null },
text: String,
likes: { type: Number, default: 0 }
},{ timestamps: true });


module.exports = mongoose.model('Comment', CommentSchema);