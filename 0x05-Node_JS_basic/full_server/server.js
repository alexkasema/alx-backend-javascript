import express from 'express';
import routing from './routes/index';

const app = express();
const PORT = 1245;

routing(app);

app.listen(PORT);

export default app;
