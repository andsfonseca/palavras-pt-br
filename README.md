# Palavras PT-br

Código criado com o intuito de ajudar a ter uma lista de todas as palavras em português brasileiro

## O que é?

Um pacote com uma listagem de palavras em português brasileiro

## Instalação

Instale o pacote globalmente através do repositório npmjs.com.

```shell
npm i @andsfonseca/palavras-pt-br
```

## Uso

### Importação

Para realizar a importação via Javascript 

```js
var Word = require('@andsfonseca/palavras-pt-br').Word;
```

Para realizar a importação via Typescript 

```ts
import { Word } from '@andsfonseca/palavras-pt-br'
```

### Funções

* #### getAllWords (limit: number = 0, removeAccents: boolean = true, includeCompounds: boolean = true, includeSpecialCharacters: boolean = false, includeProperNouns: boolean = false)

 Método que retorna um array de palavras da base com a filtragem escolhida pelo usuário.

|        Argumento         |                                    Descrição                                           |     Obrigatório     |
|:------------------------:|:--------------------------------------------------------------------------------------:|:-------------------:|
| limit                    | Limite de caracteres da palavra, caso seja menor ou igual a 0 serão considerada todas. | Não, padrão `0`     |
| removeAccents            | Informa se deve remover os acentos nas palavras.                                       | Não, padrão `false` |
| includeCompounds         | Informa se deve incluir palavras compostas.                                            | Não, padrão `true`  |
| includeSpecialCharacters | Informa se deve incluir palavras com caracateres especiais.                            | Não, padrão `false` |
| includeProperNouns       | Informa se deve incluir nomes próprios.                                                | Não, padrão `false` |

```ts
let words: string[] = Word.getAllWords()
```

* #### getRandomWord (limit: number = 0, removeAccents: boolean = true, includeCompounds: boolean = true, includeSpecialCharacters: boolean = false, includeProperNouns: boolean = false)

Método que retorna uma palavra aleatória da base com a filtragem escolhida pelo usuário.

> Os argumentos são descritos no método [getAllWords](#getallwords-limit-number--0-removeaccents-boolean--true-includecompounds-boolean--true-includespecialcharacters-boolean--false-includepropernouns-boolean--false)

```ts
let randomWord: string = Word.getRandomWord()
```

* #### getDailyWord (limit: number = 0, removeAccents: boolean = true, includeCompounds: boolean = true, includeSpecialCharacters: boolean = false, includeProperNouns: boolean = false)

Método que retorna uma palavra aleatória por dia da base com a filtragem escolhida pelo usuário.

> Os argumentos são descritos no método [getAllWords](#getallwords-limit-number--0-removeaccents-boolean--true-includecompounds-boolean--true-includespecialcharacters-boolean--false-includepropernouns-boolean--false)

```ts
let randomWord: string = Word.getDailyWord()
```

* #### checkValid (word: string, limit: number = 0, removeAccents: boolean = true, includeCompounds: boolean = true, includeSpecialCharacters: boolean = false, includeProperNouns: boolean = false)

Método que verifica se uma palavra está na base, com a filtragem escolhida pelo usuário.

|        Argumento         |    Descrição              |     Obrigatório     |
|:------------------------:|:-------------------------:|:-------------------:|
| word                     | Palavra a ser verificada. | ✅ Sim             |

> O restante dos argumentos são descritos no método [getAllWords](#getallwords-limit-number--0-removeaccents-boolean--true-includecompounds-boolean--true-includespecialcharacters-boolean--false-includepropernouns-boolean--false)

```ts
let valid: boolean = Word.checkValid("teste")
```

* #### wordleValidator(trueWord: string, triedWord: string)

Método que verifica a proximidade entre duas palavras, no estilo Wordle. Retorna informações sobre a validação da palavra

|        Argumento         |    Descrição              |     Obrigatório     |
|:------------------------:|:-------------------------:|:-------------------:|
| trueWord                 | Palavra verdadeira.       | ✅ Sim             |
| triedWord                | Palavra a ser verificada. | ✅ Sim             |


```ts
let validation: any = Word.wordleValidator("tesla", "testu")
```