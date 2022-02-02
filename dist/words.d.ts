/**
 * Método que retorna uma lista de palavras com uma parâmetro desejado.
 * @param limit Limite de Caracteres da Palavra, caso seja menor ou igual a 0 serão considerada todas.
 * @param removeAccents Informa se deve remover acentos nas palabras
 * @param includeCompounds Informa se deve incluir palavras compostas
 * @param includeSpecialCharacters Informa se deve incluir palavras com caracateres especiais
 * @param includeProperNouns Informa se deve incluir nomes próprios
 * @returns Retorna uma lista de palavras
 */
export declare function getWords(limit?: number, removeAccents?: boolean, includeCompounds?: boolean, includeSpecialCharacters?: boolean, includeProperNouns?: boolean): string[];
/**
 * Método que retorna uma uníca palavra aleatória com uma parâmetro desejado.
 * @param limit Limite de Caracteres da Palavra, caso seja menor ou igual a 0 serão considerada todas.
 * @param removeAccents Informa se deve remover acentos nas palabras
 * @param includeCompounds Informa se deve incluir palavras compostas
 * @param includeSpecialCharacters Informa se deve incluir palavras com caracateres especiais
 * @param includeProperNouns Informa se deve incluir nomes próprios
 * @returns Retorna uma palavra
 */
export declare function getRandomWord(limit?: number, removeAccents?: boolean, includeCompounds?: boolean, includeSpecialCharacters?: boolean, includeProperNouns?: boolean): string;
