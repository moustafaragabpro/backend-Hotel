import express from 'express';
import dotenv from 'dotenv';

import appRouter from './src/app.js';
import errorHandler from './src/middlewares/errorHandler.js';

dotenv.config();

const app = express();

// * Middlewares
app.use(express.json());
app.use('/api/v1', appRouter);

app.use(errorHandler);

app.listen(4000, () => console.log('listening on port 4000 ...'));
