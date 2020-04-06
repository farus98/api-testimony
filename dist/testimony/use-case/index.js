"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const create_testimony_1 = __importDefault(require("./create-testimony"));
const get_testimony_by_id_1 = __importDefault(require("./get-testimony-by-id"));
const get_testimony_all_1 = __importDefault(require("./get-testimony-all"));
const update_testimony_1 = __importDefault(require("./update-testimony"));
const data_access_1 = __importDefault(require("../data-access"));
const createTestimony = create_testimony_1.default({ testimonyDb: data_access_1.default });
exports.createTestimony = createTestimony;
const getDataTestimonyById = get_testimony_by_id_1.default({ testimonyDb: data_access_1.default });
exports.getDataTestimonyById = getDataTestimonyById;
const getDataTestimonyAll = get_testimony_all_1.default({ testimonyDb: data_access_1.default });
exports.getDataTestimonyAll = getDataTestimonyAll;
const updateDataTestimony = update_testimony_1.default({ testimonyDb: data_access_1.default });
exports.updateDataTestimony = updateDataTestimony;
const testimonyService = Object.freeze({
    createTestimony,
    getDataTestimonyById,
    getDataTestimonyAll,
    updateDataTestimony
});
exports.default = testimonyService;
