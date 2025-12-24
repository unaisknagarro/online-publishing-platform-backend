const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
uid: { type: String, required: true, unique: true },
name: String,
email: String,
photo: String,
bio: String,
role: String
},{ timestamps: true });


module.exports = mongoose.model('User', UserSchema);