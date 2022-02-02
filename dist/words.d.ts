/**
 * Módulo responsável pela listagem de palavras
 */
export declare abstract class Word {
    /**
     * Método que retorna uma lista de palavras com um parâmetro desejado.
     * @param limit Limite de Caracteres da Palavra, caso seja menor ou igual a 0 serão considerada todas.
     * @param removeAccents Informa se deve remover acentos nas palabras
     * @param includeCompounds Informa se deve incluir palavras compostas
     * @param includeSpecialCharacters Informa se deve incluir palavras com caracateres especiais
     * @param includeProperNouns Informa se deve incluir nomes próprios
     * @returns Retorna uma lista de palavras
     */
    static getAllWords(limit?: number, removeAccents?: boolean, includeCompounds?: boolean, includeSpecialCharacters?: boolean, includeProperNouns?: boolean): string[];
    /**
     * Método que retorna uma uníca palavra aleatória com um parâmetro desejado.
     * @param limit Limite de Caracteres da Palavra, caso seja menor ou igual a 0 serão considerada todas.
     * @param removeAccents Informa se deve remover acentos nas palabras
     * @param includeCompounds Informa se deve incluir palavras compostas
     * @param includeSpecialCharacters Informa se deve incluir palavras com caracateres especiais
     * @param includeProperNouns Informa se deve incluir nomes próprios
     * @returns Retorna uma palavra
     */
    static getRandomWord(limit?: number, removeAccents?: boolean, includeCompounds?: boolean, includeSpecialCharacters?: boolean, includeProperNouns?: boolean): string;
    /**
     * Método que retorna uma uníca palavra aleatória por dia com um parâmetro desejado.
     * @param limit Limite de Caracteres da Palavra, caso seja menor ou igual a 0 serão considerada todas.
     * @param removeAccents Informa se deve remover acentos nas palabras
     * @param includeCompounds Informa se deve incluir palavras compostas
     * @param includeSpecialCharacters Informa se deve incluir palavras com caracateres especiais
     * @param includeProperNouns Informa se deve incluir nomes próprios
     * @returns Retorna uma palavra
     */
    static getDailyWord(limit?: number, removeAccents?: boolean, includeCompounds?: boolean, includeSpecialCharacters?: boolean, includeProperNouns?: boolean): string;
    /**
     * Método que verifica se a palavra está na base
     * @param word Palavra a ser checada
     * @param limit Limite de Caracteres da Palavra, caso seja menor ou igual a 0 serão considerada todas.
     * @param removeAccents Informa se deve remover acentos nas palabras
     * @param includeCompounds Informa se deve incluir palavras compostas
     * @param includeSpecialCharacters Informa se deve incluir palavras com caracateres especiais
     * @param includeProperNouns Informa se deve incluir nomes próprios
     * @returns Retorna verdadeiro caso exista, senão falso
     */
    static checkValid(word: string, limit?: number, removeAccents?: boolean, includeCompounds?: boolean, includeSpecialCharacters?: boolean, includeProperNouns?: boolean): boolean;
    /**
     * Método que verifica a proximidade entre duas palavras, no estilo Wordle
     * @param trueWord Palavra verdadeira
     * @param triedWord Palavra tentada
     * @returns Retorna informações sobre a validação da palavra
     */
    static wordleValidator(trueWord: string, triedWord: string): {
        word: string;
        contains: boolean;
        correct: boolean;
    }[];
}
