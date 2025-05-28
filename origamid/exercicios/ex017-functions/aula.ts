// - Functions
// A interface de uma função é definida durante a sua declaração.

function x(params: number): number {
  return params * 2;
}

// - Void
// No JavaScript, uma função sem return irá retornar sempre undefined. No TypeScript o retorno é definido como void. Isso evita usos errados como checagens booleanas de métodos que não possuem retorno.

function pintarTela(cor: string) {
  document.body.style.background = cor;
}
pintarTela("black"); //pintarTela(cor: string): void
console.log(pintarTela("black"));

console.log("teste"); //undefined

// - Never
// O never é utilizado em casos onde a função gera um erro ou termina a aplicação.

// function abortar(mensagem: string): never {
//   throw new Error(mensagem);
// }

// abortar("Um erro ocorreu");
// console.log("Tente novamente"); //Código inacessível detectado.

// - Métodos
// Na definição de interfaces podemos definir os métodos indicando o tipo de dado recebido e o seu possível retorno.

interface Quadrado {
  lado: number;
  perimetro(lado: number): number;
}
function calcular(forma: Quadrado) {
  forma.perimetro(3);
}

// - Overload
// Existem funções que retornam diferentes dados dependendo do argumento.

// Podemos declarar a interface dessas funções utilizando function overload. Basta declarar a interface antes da definição da mesma, utilizando o mesmo nome.

// O Overload deve ser compatível com a função original.

//basicamente: Quando colocamos que uma function pode retornar um type ou outro, como o TS não executa o código ele ainda não sabe o Type que vai ser retornado, e isso pode impactar quando formos utilizar os dados que essa função retorna, ex:

//temos uma função para normalizar strings ( ' eXEmplo' -> 'exemplo'):

function normalizar(valor: string): string {
  return valor.trim().toLowerCase();
}
//Ela pode usar como parametro tanto string como array de string e por isso precisamos verificar o type, logo,temos:

function normalizar(valor: string | string[]): string | string[] {
  if (typeof valor === "string") {
    return valor.trim().toLowerCase();
  } else {
    return valor.map((s) => s.trim().toLowerCase());
  }
}
console.log(normalizar(" pRoDUto ")); // normalizar(valor: string): string (+1 overload)
console.log(normalizar(["baNana", "UVa "]).filter); // Erro: normalizar(texto: any): any (+1 overload) - A propriedade 'filter' não existe no tipo 'string | string[]' (para ver o erro, comente a funcao de baixo)

// o problema é que o TS nao indentifica bem se é string ou array de string, como por exemplo na array, ele diz que pode ser any, pq o TS não executa função e pra ele, dissemos que a function pode retornar string | string[], logo, ele sabe que é um ou outro mas nao sabe qual é qual, pra isso tem o overload. teriamos entao:
//obs: tem que usar logo acima da function se não da erro.

function normalizar1(valor: string): string; //é dizer: se o valor for string, vai retornar string
function normalizar1(valor: string[]): string[]; //é dizer: se o valor for array de string, vai retornar array de string
function normalizar1(valor: string | string[]): string | string[] {
  if (typeof valor === "string") {
    return valor.trim().toLowerCase();
  } else {
    return valor.map((s) => s.trim().toLowerCase());
  }
}
console.log(normalizar1(" pRoDUto ")); // normalizar(valor: string): string (+1 overload)
console.log(normalizar1(["baNana", "UVa "]).filter); // normalizar(valor: string[]): string[] - agora filter não gera mais erro

//(+1 overload) significa que no overloead tem mais uma possibilidade que seria a string

// Exemplo 2
function $(seletor: "video"): HTMLVideoElement | null;
function $(seletor: "a"): HTMLAnchorElement | null;
function $(seletor: string): Element | null;
function $(seletor: string): Element | null {
  return document.querySelector(seletor);
}

$("a")?.href;
$("video")?.volume;
$("item");
