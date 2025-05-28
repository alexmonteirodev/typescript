"use strict";
// Crie uma função que arredonda um valor passado para cima.
// A função pode receber string ou number.
// A função deve retornar o mesmo tipo que ela receber.
function arredondaParaCima(valor) {
    if (typeof valor === "string") {
        return Math.ceil(Number(valor)).toString();
    }
    else {
        return Math.ceil(valor);
    }
}
console.log(arredondaParaCima("4.5"));
console.log(arredondaParaCima(5.5));
