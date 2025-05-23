// - Union Types
// É comum termos funções que podem retornar ou receber tipos diferentes. Para isso usamos a barra vertical string | number | boolean.

let total2 = 300;
total2 = "200"; //O tipo 'string' não pode ser atribuído ao tipo 'number'.ts(2322)

let total3: number | string = 300;
total3 = "200"; // não gera erro pois foi definido que poderia ser number ou string

// - Funções
// Funções podem receber parâmetros com diferentes tipos e também podem retornar diferentes tipos de dados.

function isNumber(value: number | string) {
  if (typeof value === "number") {
    return true;
  } else {
    return false;
  }
}
console.log(isNumber(total2));
//obs: se nao tivesse o else, ao colocar o mouse em cima da function ela diria que retornaria true ou undefined

// - DOM
// Funções que selecionam elementos do DOM geralmente retornam null como uma possibilidade de tipo, pois o TypeScript não tem acesso prévio ao DOM para saber se o elemento existe ou não.

const btn = document.querySelector("button"); //const btn: HTMLButtonElement | null

btn.click(); //'btn' é possivelmente 'null'.ts(18047)

if (btn) {
  //verifica se btn existe, se sim, passa como true e não tem mais como ser null
  btn.click(); //const btn: HTMLButtonElement
}

//outra forma de fazer essa verificação seria com o Optional chaining:
// ? - é dizer: continue acessando as propriedades (o que vem depois do ponto) caso o valor seja diferente de null ou undefined
btn?.click(); //const btn: HTMLButtonElement | null

//----------------Exercício

// 1 - Crie uma função chamada toNumber
// 2 - A função pode receber number | string
// 3 - Se a função receber um número, retorne um número
// 4 - Se a função receber uma string, retorne um número
// 5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string")

function toNumber(value: number | string): number {
  if (typeof value === "number") {
    return value;
  } else if (typeof value === "string") {
    return Number(value); //(value?: any) => number
  } else {
    throw new Error("value deve ser um número ou uma string");
  }
}
console.log(toNumber("20"));
