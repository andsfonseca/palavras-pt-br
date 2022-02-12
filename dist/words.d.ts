import { IWordleValidation } from "./interfaces/wordleValidation";
/**
 * Módulo responsável pela listagem de palavras
 */
export declare abstract class Word {
    /**
     * Biblioteca de palavras usada pela classe
     */
    static library: string[];
    /**
     * Método que retorna um array de palavras da base com a filtragem escolhida pelo usuário.
     * @param limit Limite de caracteres da palavra, caso seja menor ou igual a 0 serão considerada todas.
     * @param removeAccents Informa se deve remover os acentos nas palavras.
     * @param includeCompounds Informa se deve incluir palavras compostas.
     * @param includeSpecialCharacters Informa se deve incluir palavras com caracateres especiais.
     * @param includeProperNouns Informa se deve incluir nomes próprios.
     * @returns Retorna um array de palavras
     */
    static getAllWords(limit?: number, removeAccents?: boolean, includeCompounds?: boolean, includeSpecialCharacters?: boolean, includeProperNouns?: boolean): string[];
    /**
     * Método que retorna uma palavra aleatória da base com a filtragem escolhida pelo usuário.
     * @param limit Limite de caracteres da palavra, caso seja menor ou igual a 0 serão considerada todas.
     * @param removeAccents Informa se deve remover os acentos nas palavras.
     * @param includeCompounds Informa se deve incluir palavras compostas.
     * @param includeSpecialCharacters Informa se deve incluir palavras com caracateres especiais.
     * @param includeProperNouns Informa se deve incluir nomes próprios.
     * @returns Retorna uma palavra
     */
    static getRandomWord(limit?: number, removeAccents?: boolean, includeCompounds?: boolean, includeSpecialCharacters?: boolean, includeProperNouns?: boolean): string;
    /**
     * Método que retorna uma palavra aleatória por dia da base com a filtragem escolhida pelo usuário.
     * @param limit Limite de caracteres da palavra, caso seja menor ou igual a 0 serão considerada todas.
     * @param removeAccents Informa se deve remover os acentos nas palavras.
     * @param includeCompounds Informa se deve incluir palavras compostas.
     * @param includeSpecialCharacters Informa se deve incluir palavras com caracateres especiais.
     * @param includeProperNouns Informa se deve incluir nomes próprios.
     * @returns Retorna uma palavra
     */
    static getDailyWord(limit?: number, removeAccents?: boolean, includeCompounds?: boolean, includeSpecialCharacters?: boolean, includeProperNouns?: boolean): string;
    /**
     * Método que verifica se uma palavra está na base, com a filtragem escolhida pelo usuário.
     * @param word Palavra a ser verificada.
     * @param limit Limite de caracteres da palavra, caso seja menor ou igual a 0 serão considerada todas.
     * @param removeAccents Informa se deve remover os acentos nas palavras.
     * @param includeCompounds Informa se deve incluir palavras compostas.
     * @param includeSpecialCharacters Informa se deve incluir palavras com caracateres especiais.
     * @param includeProperNouns Informa se deve incluir nomes próprios.
     * @returns Retorna verdadeiro caso exista, senão falso
     */
    static checkValid(word: string, limit?: number, removeAccents?: boolean, includeCompounds?: boolean, includeSpecialCharacters?: boolean, includeProperNouns?: boolean): boolean;
    /**
     * Método que verifica a proximidade entre duas palavras, no estilo Wordle
     * @param trueWord Palavra verdadeira
     * @param triedWord Palavra a ser verificada.
     * @returns Retorna informações sobre a validação da palavra
     */
    static wordleValidator(trueWord: string, triedWord: string): IWordleValidation[];
}
