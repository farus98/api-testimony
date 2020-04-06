"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const testimony_db_1 = __importDefault(require("./testimony-db"));
const mongoose_1 = __importDefault(require("mongoose"));
//let mongoAccess = `mongodb://${process.env.MONGO_PATH}/${process.env.MONGO_DBNAME}`
let mongoAccess = `mongodb://${process.env.MONGO_USER_SERVER}:${process.env.MONGO_PWD_SERVER}@${process.env.MONGO_PATH_SERVER}/${process.env.MONGO_DBNAME_SERVER}`;
mongoose_1.default.connect(mongoAccess, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
    console.log('mongoDB connected...');
})
    .catch(err => console.log(err.message));
mongoose_1.default.set('debug', true);
let Schema = mongoose_1.default.Schema;
let testimonySchema = new Schema({
    userId: Number,
    orderId: Number,
    otherId: Number,
    userName: String,
    type: String,
    platform: String,
    comments: String,
    rate: Number,
    like: Number,
    dislike: Number,
    status: { type: String, default: 'draft' },
    createDate: { type: Date, default: Date.now },
    updateDate: { type: Date, default: Date.now }
}, {
    collection: process.env.COLLECTION_SERVER
});
const schemaDb = mongoose_1.default.model(`process.env.COLLECTION_SERVER`, testimonySchema);
const testimonyDb = testimony_db_1.default({ schemaDb });
exports.default = testimonyDb;
