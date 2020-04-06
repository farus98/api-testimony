"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const testimony_1 = __importDefault(require("./testimony"));
const app = express_1.default();
app.use('/testimony', testimony_1.default);
app.listen(5200, () => console.log('Server is listening on port 5200'));
