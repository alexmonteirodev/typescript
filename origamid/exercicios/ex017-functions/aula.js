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
console.log("teste");
