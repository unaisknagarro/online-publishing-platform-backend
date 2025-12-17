const mongoose = require('mongoose');


const ArticleSchema = new mongoose.Schema({
title: String,
description: String,
content: String,
thumbnail: String,
author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }],
status: { type: String, enum: ['draft', 'published', 'scheduled'], default: 'draft' },
publishDate: Date,
views: { type: Number, default: 0 },
isFeatured: { type: Boolean, default: false }
},{ timestamps: true });


module.exports = mongoose.model('Article', ArticleSchema);