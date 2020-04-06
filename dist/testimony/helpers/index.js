"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const slack_1 = __importDefault(require("./slack"));
const error_1 = require("./error");
exports.ErrorHandler = error_1.ErrorHandler;
exports.handleError = error_1.handleError;
const sendToSlack = slack_1.default;
exports.sendToSlack = sendToSlack;
const helperServices = Object.freeze({
    sendToSlack,
    ErrorHandler: error_1.ErrorHandler, handleError: error_1.handleError
});
exports.default = helperServices;
