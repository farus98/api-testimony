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
function makePostTestimony({ createTestimony }) {
    return function postTestimony(httpRequest, sendToSlack) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const bodyparam = httpRequest.body;
                console.log('controller', bodyparam);
                const posted = yield createTestimony(bodyparam);
                console.log('post', posted);
                return {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    statusCode: 201,
                    body: {
                        status: true,
                        response_code: 200,
                        message: "OK",
                        data: posted
                    }
                };
            }
            catch (e) {
                console.log(e);
                // sendToSlack.alert({
                //  text: `:X: ${e.stack}`
                //  });
                return {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    statusCode: 400,
                    body: {
                        status: false,
                        response_code: 400,
                        message: e.message,
                    }
                };
            }
        });
    };
}
exports.default = makePostTestimony;
