"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
function makeTestimonyDb({ schemaDb }) {
    return Object.freeze({
        getTestimonyByOrderId,
        getTestimonyByOtherId,
        getTestimonyAll,
        getTestimonyFindOne,
        findById,
        createTestimonyDb,
        updateTestimonyDb
        //deleteTestimony
    });
    function createTestimonyDb(body) {
        return __awaiter(this, void 0, void 0, function* () {
            schemaDb.create(Object.assign({}, body))
                .then(result => {
                console.log('post', result);
            })
                .catch(error => {
                console.log(error);
            });
        });
    }
    function getTestimonyByOrderId(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(function (resolve, reject) {
                schemaDb.find(orderId)
                    .then(result => {
                    console.log(result);
                    resolve(result);
                })
                    .catch(err => {
                    console.log(err);
                    reject(err);
                });
            });
        });
    }
    function findById({ id: _id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield schemaDb.find({ _id });
            const found = yield result.toArray();
            if (found.length === 0) {
                return null;
            }
            const _a = found[0], { _id: id } = _a, info = __rest(_a, ["_id"]);
            return Object.assign({ id }, info);
        });
    }
    function getTestimonyByOtherId({ otherId, type }) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(function (resolve, reject) {
                schemaDb.findOne({ otherId, type })
                    .then(result => {
                    console.log(result);
                    resolve(result);
                })
                    .catch(err => {
                    console.log(err);
                    reject(err);
                });
            });
        });
    }
    function getTestimonyFindOne(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(function (resolve, reject) {
                schemaDb.findOne(Object.assign({}, params))
                    .then(result => {
                    console.log(result);
                    resolve(result);
                })
                    .catch(err => {
                    console.log(err);
                    reject(err);
                });
            });
        });
    }
    function getTestimonyAll(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(function (resolve, reject) {
                schemaDb.find(Object.assign({}, params))
                    .then(result => {
                    console.log(result);
                    resolve(result);
                })
                    .catch(err => {
                    console.log(err);
                    reject(err);
                });
            });
        });
    }
    function updateTestimonyDb({ id: _id, status }) {
        return __awaiter(this, void 0, void 0, function* () {
            schemaDb.updateOne({ _id }, { $set: { status } })
                .then(result => {
                console.log('update', result);
            })
                .catch(err => {
                console.log(err);
            });
        });
    }
    // async function deleteTestimony ({ id: _id }) {
    //   schemaDb.deleteOne({ _id })
    //   .then(result => {
    //     console.log('update',result)
    //   })
    //   .catch(err =>{
    //       console.log(err)
    //   })
    // }
}
exports.default = makeTestimonyDb;
