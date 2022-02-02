import words from './words.json';
import alea from "seedrandom"

/**
 * Módulo responsável pela listagem de palavras
 */
export abstract class Word {

    /**
     * Método que retorna uma lista de palavras com um parâmetro desejado.
     * @param limit Limite de Caracteres da Palavra, caso seja menor ou igual a 0 serão considerada todas.
     * @param removeAccents Informa se deve remover acentos nas palabras
     * @param includeCompounds Informa se deve incluir palavras compostas
     * @param includeSpecialCharacters Informa se deve incluir palavras com caracateres especiais
     * @param includeProperNouns Informa se deve incluir nomes próprios
     * @returns Retorna uma lista de palavras
     */
    static getAllWords(limit: number = 0, removeAccents = true, includeCompounds = true, includeSpecialCharacters = false, includeProperNouns = false) {

        let aux: string[] = words as string[]

        if (limit > 0) {
            aux = aux.filter(a => a.length == limit)
        }

        if (!includeProperNouns) {
            aux = aux.filter(a => a[0] == a[0].toLowerCase())
        }

        if (!includeSpecialCharacters) {
            aux = aux.map(a => a.replace(/[.,\s]/g, ''))
        }

        if (!includeCompounds) {
            aux = aux.filter(a => a.indexOf('-') == -1)
        }

        if (!removeAccents) {
            aux = aux.map(a => a.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
        }

        return Array.from<string>(new Set(aux));
    }

    /**
     * Método que retorna uma uníca palavra aleatória com um parâmetro desejado.
     * @param limit Limite de Caracteres da Palavra, caso seja menor ou igual a 0 serão considerada todas.
     * @param removeAccents Informa se deve remover acentos nas palabras
     * @param includeCompounds Informa se deve incluir palavras compostas
     * @param includeSpecialCharacters Informa se deve incluir palavras com caracateres especiais
     * @param includeProperNouns Informa se deve incluir nomes próprios
     * @returns Retorna uma palavra
     */
    static getRandomWord(limit: number = 0, removeAccents = true, includeCompounds = true, includeSpecialCharacters = false, includeProperNouns = false) {
        let aux = this.getAllWords(limit, removeAccents, includeCompounds, includeSpecialCharacters, includeProperNouns)
        return aux[Math.floor(Math.random() * aux.length)];
    }

    /**
     * Método que retorna uma uníca palavra aleatória por dia com um parâmetro desejado.
     * @param limit Limite de Caracteres da Palavra, caso seja menor ou igual a 0 serão considerada todas.
     * @param removeAccents Informa se deve remover acentos nas palabras
     * @param includeCompounds Informa se deve incluir palavras compostas
     * @param includeSpecialCharacters Informa se deve incluir palavras com caracateres especiais
     * @param includeProperNouns Informa se deve incluir nomes próprios
     * @returns Retorna uma palavra
     */
    static getDailyWord(limit: number = 0, removeAccents = true, includeCompounds = true, includeSpecialCharacters = false, includeProperNouns = false){
        const d = new Date();
        let random = alea(d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDay()).quick()
        let aux = this.getAllWords(limit, removeAccents, includeCompounds, includeSpecialCharacters, includeProperNouns)
        return aux[Math.floor(random * aux.length)];
    }

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
    static checkValid(word: string, limit: number = 0, removeAccents = true, includeCompounds = true, includeSpecialCharacters = false, includeProperNouns = false){
        let aux = this.getAllWords(limit, removeAccents, includeCompounds, includeSpecialCharacters, includeProperNouns)
        return aux.indexOf(word) > -1
    }

    /**
     * Método que verifica a proximidade entre duas palavras, no estilo Wordle
     * @param trueWord Palavra verdadeira
     * @param triedWord Palavra tentada
     * @returns Retorna informações sobre a validação da palavra
     */
    static wordleValidator(trueWord: string, triedWord: string){
        let len = trueWord.length

        if (len != triedWord.length)
            throw new Error("Different word sizes");
        
        let real = {}

        for(let i = 0; i < len; i++){
            real[trueWord[i]] = i
        }

        return triedWord.split("").map(( c, index) => { return { word: c, contains: Boolean(real[c] != undefined), correct: trueWord[index] == triedWord[index]}})
    }

}

