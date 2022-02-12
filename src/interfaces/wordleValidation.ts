/**
 * Representação da Validação do Wordle 
 */
export interface IWordleValidation {

    /**
     * Letra
     */
    word: string,

    /**
     * Se contém na palavra
     */
    contains: boolean,

    /**
     * Se está na posição correta
     */
    exact: boolean
}

