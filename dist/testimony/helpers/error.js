"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const slack_1 = __importDefault(require("./slack"));
class ErrorHandler extends Error {
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}
exports.ErrorHandler = ErrorHandler;
const handleError = (err, res) => {
    const { statusCode, message } = err;
    slack_1.default.alert({
        text: message
    });
    res.status(statusCode).json({
        status: "error",
        statusCode,
        message
    });
};
exports.handleError = handleError;
