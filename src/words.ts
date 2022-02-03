import { BRISPELL } from "./bases"
import alea from "seedrandom"
import { IWordleValidation } from "."

/**
 * Módulo responsável pela listagem de palavras
 */
export abstract class Word {

    /**
     * Biblioteca de palavras usada pela classe
     */
    static library: string[] = BRISPELL

    /**
     * Método que retorna um array de palavras da base com a filtragem escolhida pelo usuário.
     * @param limit Limite de caracteres da palavra, caso seja menor ou igual a 0 serão considerada todas.
     * @param removeAccents Informa se deve remover os acentos nas palavras.
     * @param includeCompounds Informa se deve incluir palavras compostas.
     * @param includeSpecialCharacters Informa se deve incluir palavras com caracateres especiais.
     * @param includeProperNouns Informa se deve incluir nomes próprios.
     * @returns Retorna um array de palavras
     */
    static getAllWords(limit: number = 0, removeAccents: boolean = false, includeCompounds: boolean = true, includeSpecialCharacters: boolean = false, includeProperNouns: boolean = false) {

        let aux: string[] = this.library

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
     * Método que retorna uma palavra aleatória da base com a filtragem escolhida pelo usuário.
     * @param limit Limite de caracteres da palavra, caso seja menor ou igual a 0 serão considerada todas.
     * @param removeAccents Informa se deve remover os acentos nas palavras.
     * @param includeCompounds Informa se deve incluir palavras compostas.
     * @param includeSpecialCharacters Informa se deve incluir palavras com caracateres especiais.
     * @param includeProperNouns Informa se deve incluir nomes próprios.
     * @returns Retorna uma palavra
     */
    static getRandomWord(limit: number = 0, removeAccents: boolean = true, includeCompounds: boolean = true, includeSpecialCharacters: boolean = false, includeProperNouns: boolean = false) {
        let aux = this.getAllWords(limit, removeAccents, includeCompounds, includeSpecialCharacters, includeProperNouns)
        return aux[Math.floor(Math.random() * aux.length)];
    }

    /**
     * Método que retorna uma palavra aleatória por dia da base com a filtragem escolhida pelo usuário.
     * @param limit Limite de caracteres da palavra, caso seja menor ou igual a 0 serão considerada todas.
     * @param removeAccents Informa se deve remover os acentos nas palavras.
     * @param includeCompounds Informa se deve incluir palavras compostas.
     * @param includeSpecialCharacters Informa se deve incluir palavras com caracateres especiais.
     * @param includeProperNouns Informa se deve incluir nomes próprios.
     * @returns Retorna uma palavra
     */
    static getDailyWord(limit: number = 0, removeAccents: boolean = true, includeCompounds: boolean = true, includeSpecialCharacters: boolean = false, includeProperNouns: boolean = false) {
        const d = new Date();
        let random = alea(d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDay()).quick()
        let aux = this.getAllWords(limit, removeAccents, includeCompounds, includeSpecialCharacters, includeProperNouns)
        return aux[Math.floor(random * aux.length)];
    }

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
    static checkValid(word: string, limit: number = 0, removeAccents: boolean = true, includeCompounds: boolean = true, includeSpecialCharacters: boolean = false, includeProperNouns: boolean = false) {
        let aux = this.getAllWords(limit, removeAccents, includeCompounds, includeSpecialCharacters, includeProperNouns)
        return aux.indexOf(word) > -1
    }

    /**
     * Método que verifica a proximidade entre duas palavras, no estilo Wordle
     * @param trueWord Palavra verdadeira
     * @param triedWord Palavra a ser verificada.
     * @returns Retorna informações sobre a validação da palavra
     */
    static wordleValidator(trueWord: string, triedWord: string): IWordleValidation[] {
        let len = trueWord.length

        if (len != triedWord.length)
            throw new Error("Different word sizes");

        let real = {}

        for (let i = 0; i < len; i++) {
            real[trueWord[i]] = i
        }
        return triedWord.split("").map((c, index) => { return { word: c, contains: Boolean(real[c] != undefined), exact: trueWord[index] == triedWord[index] } })
    }

}

