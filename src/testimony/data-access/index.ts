import makeTestimonyDb from './testimony-db'
import mongoose from 'mongoose'

var environment = process.env.ENVIRONMENT

let host : any;
let user : any;
let password : any;
let database : any;

if( environment === 'production' || environment === 'Production' || environment === 'PRODUCTION'){
    host = process.env.MONGO_PATH_SERVER_PROD
    user = process.env.MONGO_USER_SERVER_PROD
    password = process.env.MONGO_PWD_SERVER_PROD
    database = process.env.MONGO_DBNAME_SERVER_PROD
}

else {
    host = process.env.MONGO_PATH_SERVER_DEV
    user = process.env.MONGO_USER_SERVER_DEV
    password = process.env.MONGO_PWD_SERVER_DEV
    database = process.env.MONGO_DBNAME_SERVER_DEV
}

console.log('testlog',database);

let mongoAccess = `mongodb://${user}:${password}@${host}/${database}`
 mongoose.connect(mongoAccess, { useNewUrlParser: true, useUnifiedTopology: true})
   .then(() => {
     console.log(environment);
     console.log('mongoDB connected to', database);
   })
   .catch(err => console.log(err.message));

mongoose.set('debug', true);

  let Schema = mongoose.Schema;
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
  })

const schemaDb = mongoose.model(`process.env.COLLECTION_SERVER`,testimonySchema);
const testimonyDb = makeTestimonyDb({ schemaDb})

export default testimonyDb
