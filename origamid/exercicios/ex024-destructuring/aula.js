"use strict";
// - Destructuring
// Durante a desestruturação de objetos, podemos indicar o tipo de dado com a sintaxe: { key1, key2 }: { key1: type1; key2: type2; }
//const { body } = document; //body: HTMLElement - inferencia pelo TS
//sintaxe para desestruturar:
const { body } = document;
//exemplo usando f:
function handleDesestruturar({ nome, preco, }) {
    nome.toLowerCase;
    preco?.toFixed;
}
handleDesestruturar({
    nome: "Notebook",
    preco: 200,
});
function handleDesestruturarEmInterface({ nome, preco }) {
    nome.toLowerCase;
    preco?.toFixed;
}
handleDesestruturarEmInterface({
    nome: "Notebook",
    preco: 200,
});
// - Conhecer os Dados
// Durante a desestruturação é necessário indicar o tipo exato do dado esperado pelo TypeScript. Ex: um currentTarget pode ser EventTarget | null.
//exemplo 1:
document.documentElement.addEventListener("click", handleClickDoc); //quando aparece erro no callback handleClickDoc quer dizer que o type do evento que vc desestruturou provavelmente está errado
function handleClickDoc({ currentTarget, }) {
    console.log(currentTarget);
}
//exemplo 2 - da pra usar a interface do evento diretamente:
const btnDesestruturar = document.querySelector("button");
btnDesestruturar?.addEventListener("click", handleClickBtnDeses);
function handleClickBtnDeses({ currentTarget }) {
    console.log("clicou");
}
//obs: pode ser que vc queira adicionar a mesma f a eventos diferentes, por ex se fosse add ao touch:
btnDesestruturar?.addEventListener("touchstart", handleClickBtnDeses); //não funciona porque não é um mouseEvent, mais indicado nesses casos seria usar o exemplo 1
// - ...rest
// O operador ...rest retorna uma Array.
function comparar(tipo, ...numeros) {
    console.log(tipo);
    console.log(numeros);
}
console.log(comparar("maior", 3, 2, 4, 30, 5, 6, 20));
