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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entity_1 = __importDefault(require("../entity"));
function makeCreateTestimony({ testimonyDb }) {
    return function createTestimony(body) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('usecase', body);
            try {
                const testimony = entity_1.default(body);
                console.log('res testimony', testimony);
                const checkExist = yield testimonyDb.getTestimonyAll({ orderId: body.orderId, otherId: body.otherId });
                if (checkExist.length == 0) {
                    const result = yield testimonyDb.createTestimonyDb(body);
                    console.log('result', result);
                    return result;
                }
                else {
                    throw new Error('Data Already Exist');
                }
            }
            catch (error) {
                console.log('catch');
                throw new Error(error);
            }
        });
    };
}
exports.default = makeCreateTestimony;
