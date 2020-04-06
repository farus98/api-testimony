"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const camelcase_keys_1 = __importDefault(require("camelcase-keys"));
const helpers_1 = require("./helpers");
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
//console.log('halloooo');
const app = express_1.default();
const makeCallback = require('./call-back');
const controller_1 = require("./controller");
app.use(cors_1.default());
app.use(body_parser_1.default.json());
console.log('testt');
app.post('/', makeCallback(controller_1.postTestimony, camelcase_keys_1.default, helpers_1.sendToSlack, helpers_1.ErrorHandler));
app.put('/', makeCallback(controller_1.patchTestimony, camelcase_keys_1.default, helpers_1.sendToSlack, helpers_1.ErrorHandler));
app.get('/id/', makeCallback(controller_1.getTestimonyById, camelcase_keys_1.default, helpers_1.sendToSlack, helpers_1.ErrorHandler));
app.get('/all/', makeCallback(controller_1.getTestimonyAll, camelcase_keys_1.default, helpers_1.sendToSlack, helpers_1.ErrorHandler));
app.use((err, req, res, next) => {
    helpers_1.handleError(err, res);
});
exports.default = app;
