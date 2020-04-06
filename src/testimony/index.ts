import express from 'express';
import bodyParser from 'body-parser';
import camelcaseKeys from 'camelcase-keys';
import {sendToSlack,ErrorHandler,handleError} from './helpers'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

//console.log('halloooo');

const app = express();
const makeCallback = require ('./call-back')
import {postTestimony, getTestimonyById, getTestimonyAll, patchTestimony} from './controller'

app.use(cors());
app.use(bodyParser.json());

// console.log('testt');

app.post('/', makeCallback(postTestimony,camelcaseKeys,sendToSlack,ErrorHandler));
app.put('/', makeCallback(patchTestimony,camelcaseKeys,sendToSlack,ErrorHandler));
app.get('/id/', makeCallback(getTestimonyById,camelcaseKeys,sendToSlack,ErrorHandler));
app.get('/all/', makeCallback(getTestimonyAll,camelcaseKeys,sendToSlack,ErrorHandler));

app.use((err, req, res, next) => {
    handleError(err, res);
});

export default app;
