"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomWord = exports.getWords = void 0;
const words_json_1 = __importDefault(require("./words.json"));
/**
 * Método que retorna uma lista de palavras com uma parâmetro desejado.
 * @param limit Limite de Caracteres da Palavra, caso seja menor ou igual a 0 serão considerada todas.
 * @param removeAccents Informa se deve remover acentos nas palabras
 * @param includeCompounds Informa se deve incluir palavras compostas
 * @param includeSpecialCharacters Informa se deve incluir palavras com caracateres especiais
 * @param includeProperNouns Informa se deve incluir nomes próprios
 * @returns Retorna uma lista de palavras
 */
function getWords(limit = 0, removeAccents = true, includeCompounds = true, includeSpecialCharacters = false, includeProperNouns = false) {
    let aux = words_json_1.default;
    if (limit > 0) {
        aux = aux.filter(a => a.length == limit);
    }
    if (!includeProperNouns) {
        aux = aux.filter(a => a[0] == a[0].toLowerCase());
    }
    if (!includeSpecialCharacters) {
        aux = aux.map(a => a.replace(/[.,\s]/g, ''));
    }
    if (!includeCompounds) {
        aux = aux.filter(a => a.indexOf('-') == -1);
    }
    if (!removeAccents) {
        aux = aux.map(a => a.normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
    }
    return Array.from(new Set(aux));
}
exports.getWords = getWords;
/**
 * Método que retorna uma uníca palavra aleatória com uma parâmetro desejado.
 * @param limit Limite de Caracteres da Palavra, caso seja menor ou igual a 0 serão considerada todas.
 * @param removeAccents Informa se deve remover acentos nas palabras
 * @param includeCompounds Informa se deve incluir palavras compostas
 * @param includeSpecialCharacters Informa se deve incluir palavras com caracateres especiais
 * @param includeProperNouns Informa se deve incluir nomes próprios
 * @returns Retorna uma palavra
 */
function getRandomWord(limit = 0, removeAccents = true, includeCompounds = true, includeSpecialCharacters = false, includeProperNouns = false) {
    let aux = getWords(limit, removeAccents, includeCompounds, includeSpecialCharacters, includeProperNouns);
    return aux[Math.floor(Math.random() * aux.length)];
}
exports.getRandomWord = getRandomWord;
