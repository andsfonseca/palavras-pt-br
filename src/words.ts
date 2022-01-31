import words from './words.json';

/**
 * Método que retorna uma lista de palavras com uma parâmetro desejado.
 * @param limit Limite de Caracteres da Palavra, caso seja menor ou igual a 0 serão considerada todas.
 * @param removeAccents Informa se deve remover acentos nas palabras
 * @param includeCompounds Informa se deve incluir palavras compostas
 * @param includeSpecialCharacters Informa se deve incluir palavras com caracateres especiais
 * @param includeProperNouns Informa se deve incluir nomes próprios
 * @returns Retorna uma lista de palavras
 */
export function getWords(limit: number = 0, removeAccents = true, includeCompounds = true, includeSpecialCharacters = false, includeProperNouns = false) {

    let aux: string[] = words as string[]

    if(limit > 0 ){
        aux = aux.filter( a => a.length == limit)
    }

    if(!includeProperNouns){
        aux = aux.filter( a => a[0] == a[0].toLowerCase())
    }
    
    if(!includeSpecialCharacters){
        aux = aux.map( a => a.replace(/[.,\s]/g, ''))
    }

    if(!includeCompounds){
        console.log(aux[0])
        console.log(aux[0].indexOf('-') == -1)
        aux = aux.filter( a => a.indexOf('-') == -1)
    }

    if(!removeAccents){
        aux = aux.map( a => a.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
    }

    return Array.from<string>(new Set(aux));
}