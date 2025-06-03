// - .d.ts
// Podemos criar arquivos focados apenas na declaração de tipos e interfaces, estes devem ser terminados em .d.ts.
// O TypeScript não irá compilar eles, mas os tipos declarados poderão ser utilizados globalmente na sua aplicação.
// Esse tipo de declaração é comum em bibliotecas criadas em JavaScript que desejam dar suporte ao uso da mesma em TypeScript.

// ex:
//ao clicar (com command) em querySelector, abre a pasta lib.dom.d.ts, que é exatamente isso, uma pasta 'global' onde possuem diversas interfaces e quando escrevemos no vscode ele autocompleta pq puxa dessa 'biblioteca' de interfaces.
document.querySelector;

//um exemplo prático seria:
// global.d.ts
interface Produto {
  nome: string;
}

// script.ts
const livro: Produto = {
  nome: "O Senhor dos Anéis",
};

//o ideal é definir esse arquivo global em uma pasta especifica como por ex: types -> global.d.ts. Porque o TS ignora arquivos que possuem o mesmo nome e diretório, em favor do arquivo que terminar em .ts.
// Use
// /types/script.d.ts
// /script.ts

// Não use
// /script.d.ts
// /script.ts

// - Declaração Global
// Não é necessário criar um arquivo global ou .d.ts para ter um tipo global. É possível também declarar dentro de um arquivo do tipo module, usando o declare global {}.

declare global {
  interface Produto {
    nome: string;
    preco: number;
  }
}

export const livro: Produto = {
  nome: "O Senhor dos Anéis",
  preco: 200,
};

//tem o problema de alguem escrever por cima da interface, por ser global, que é o mesmo problema de variaveis globais. Caso sem querer escreva o mesmo nome por exemplo. Ou seja, escrever uma interface com o mesmo nome, vai sobrescrever a global.
