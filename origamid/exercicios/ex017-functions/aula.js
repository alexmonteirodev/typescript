"use strict";
// - Functions
// A interface de uma função é definida durante a sua declaração.
function x(params) {
    return params * 2;
}
// - Void
// No JavaScript, uma função sem return irá retornar sempre undefined. No TypeScript o retorno é definido como void. Isso evita usos errados como checagens booleanas de métodos que não possuem retorno.
function pintarTela(cor) {
    document.body.style.background = cor;
}
pintarTela("black"); //pintarTela(cor: string): void
console.log(pintarTela("black"));
console.log("teste"); //undefined
function calcular(forma) {
    forma.perimetro(3);
}
// - Overload
// Existem funções que retornam diferentes dados dependendo do argumento.
// Podemos declarar a interface dessas funções utilizando function overload. Basta declarar a interface antes da definição da mesma, utilizando o mesmo nome.
// O Overload deve ser compatível com a função original.
//basicamente: Quando colocamos que uma function pode retornar um type ou outro, como o TS não executa o código ele ainda não sabe o Type que vai ser retornado, e isso pode impactar quando formos utilizar os dados que essa função retorna, ex:
//temos uma função para normalizar strings ( ' eXEmplo' -> 'exemplo'):
function normalizar(valor) {
    return valor.trim().toLowerCase();
}
//Ela pode usar como parametro tanto string como array de string e por isso precisamos verificar o type, logo,temos:
function normalizar(valor) {
    if (typeof valor === "string") {
        return valor.trim().toLowerCase();
    }
    else {
        return valor.map((s) => s.trim().toLowerCase());
    }
}
console.log(normalizar(" pRoDUto ")); // normalizar(valor: string): string (+1 overload)
console.log(normalizar(["baNana", "UVa "]).filter); // Erro: normalizar(texto: any): any (+1 overload) - A propriedade 'filter' não existe no tipo 'string | string[]' (para ver o erro, comente a funcao de baixo)
function normalizar1(valor) {
    if (typeof valor === "string") {
        return valor.trim().toLowerCase();
    }
    else {
        return valor.map((s) => s.trim().toLowerCase());
    }
}
console.log(normalizar1(" pRoDUto ")); // normalizar(valor: string): string (+1 overload)
console.log(normalizar1(["baNana", "UVa "]).filter); // normalizar(valor: string[]): string[] - agora filter não gera mais erro
function $(seletor) {
    return document.querySelector(seletor);
}
$("a")?.href;
$("video")?.volume;
$("item");
