// - Exercício
// 1 - Selecione os elementos com a classe link.

// 2 - Crie uma função que deve ser executada para cada elemento.

// 3 - Modificar através da função o estilo da color e border.

const linkS = document.querySelectorAll(".link");
console.log(linkS);

function modificaEstilos(listElements: NodeListOf<Element>) {
  listElements.forEach((element) => {
    // console.log(element.__proto__.__proto__);
    if (element instanceof HTMLAnchorElement) {
      element.style.border = "2px solid red";
      element.style.color = "red";
    }
    if (element instanceof HTMLButtonElement) {
      element.style.border = "2px solid blue";
      element.style.color = "blue";
    }
  });
}
modificaEstilos(linkS);

//outra solução seria usar a verificação de HTMLElement para os dois (anchor e button) poruqe os dois tem o mesmo protótipo que possui a propriedade style.

// const linkS = document.querySelectorAll(".link");
// console.log(linkS);

// function modificaEstilos(listElements: NodeListOf<Element>) {
//   listElements.forEach((element) => {
//     if (element instanceof HTMLElement) {
//       element.style.border = "2px solid red";
//       element.style.color = "red";
//     }
//   });
// }
// modificaEstilos(linkS);
