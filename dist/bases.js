"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UNVERSEDV2 = exports.BRISPELL = exports.PYTHONPROBR = void 0;
const pythonprobr_palavras_json_1 = __importDefault(require("./bases/pythonprobr.palavras.json"));
const br_ispell_json_1 = __importDefault(require("./bases/br.ispell.json"));
const unversed_termooo_wordsv2_json_1 = __importDefault(require("./bases/unversed.termooo.wordsv2.json"));
exports.PYTHONPROBR = pythonprobr_palavras_json_1.default;
exports.BRISPELL = br_ispell_json_1.default;
exports.UNVERSEDV2 = unversed_termooo_wordsv2_json_1.default;
