"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const use_case_1 = require("../use-case");
const post_testimony_1 = __importDefault(require("./post-testimony"));
const get_testimony_by_id_1 = __importDefault(require("./get-testimony-by-id"));
const patch_testimony_1 = __importDefault(require("./patch-testimony"));
const get_testimony_all_1 = __importDefault(require("./get-testimony-all"));
const postTestimony = post_testimony_1.default({ createTestimony: use_case_1.createTestimony });
exports.postTestimony = postTestimony;
const getTestimonyById = get_testimony_by_id_1.default({ getDataTestimonyById: use_case_1.getDataTestimonyById });
exports.getTestimonyById = getTestimonyById;
const getTestimonyAll = get_testimony_all_1.default({ getDataTestimonyAll: use_case_1.getDataTestimonyAll });
exports.getTestimonyAll = getTestimonyAll;
const patchTestimony = patch_testimony_1.default({ updateDataTestimony: use_case_1.updateDataTestimony });
exports.patchTestimony = patchTestimony;
const testimonyController = Object.freeze({
    postTestimony,
    getTestimonyById,
    getTestimonyAll,
    patchTestimony
});
exports.default = testimonyController;
