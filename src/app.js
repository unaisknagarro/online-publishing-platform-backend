import express from 'express';
import cors from 'cors';
import articleRoutes from './routes/article.js';
import commentRoutes from './routes/comment.js';
import authorsRoutes from './routes/author.js';
import tagsRoutes from './routes/tag.js';

const app = express();

app.use(cors());
app.use(express.json());


app.use('/api/articles', articleRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/authors', authorsRoutes);
app.use('/api/tags', tagsRoutes);


export default app;