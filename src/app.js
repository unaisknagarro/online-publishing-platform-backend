const express = require('express');
const app = express();


app.use(express.json());


app.use('/api/articles', require('./routes/article'));
app.use('/api/comments', require('./routes/comment'));
app.use('/api/authors', require('./routes/author'));


module.exports = app;