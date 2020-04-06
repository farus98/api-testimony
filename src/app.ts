import express from 'express';
import testimony from './testimony';

const app = express();

app.use('/testimony',testimony);

app.listen(5200,()=> console.log('Server is listening on port 5200'));
