"use strict";
// - Exercício
// 1 - Selecione os elementos com a classe link.
// 2 - Crie uma função que deve ser executada para cada elemento.
// 3 - Modificar através da função o estilo da color e border.
const linkS = document.querySelectorAll(".link");
console.log(linkS);
function modificaEstilos(listElements) {
    listElements.forEach((element) => {
        console.dir(element.style);
    });
}
modificaEstilos(linkS);
