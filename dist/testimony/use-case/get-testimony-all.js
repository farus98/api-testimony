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
Object.defineProperty(exports, "__esModule", { value: true });
function makeGetDataTestimonyAll({ testimonyDb }) {
    return function getDataTestimonyAll(body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (body.orderId) {
                    console.log('usecase', body);
                    const result = yield testimonyDb.getTestimonyFindOne(body);
                    console.log('res', result);
                    return result;
                }
                else {
                    console.log('usecase', body);
                    const result = yield testimonyDb.getTestimonyAll(body);
                    console.log('res', result);
                    return result;
                }
            }
            catch (error) {
                throw new Error(error);
            }
        });
    };
}
exports.default = makeGetDataTestimonyAll;
