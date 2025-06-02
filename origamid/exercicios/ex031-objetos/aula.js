"use strict";
// - Duck Typing
// Um objeto quando passado em uma função, pode conter propriedades e métodos além dos declarados na interface.
const pato = {
    nome: "pato",
    patas: 2,
};
const garca = {
    nome: "garça",
    patas: 2,
    pataLonga: true, //propriedade a mais
};
const peixe = {
    nome: "nemo",
    //propriedade a menos
};
function sePareceComUmPato(animal) {
    console.log(animal.nome);
}
sePareceComUmPato(pato);
sePareceComUmPato(garca); //TS não acusa erro por ter a propriedade 'pataLonga' a mais
sePareceComUmPato(peixe); // Erro - não possui interface Duck porque tem a propriedade 'patas' faltando
// Partial gera isso:
// interface Produto2 {
//   nome?: string;
//   quantidade?: number;
// }
const objpProduto2 = {
    nome: "geladeira",
    quantidade: 20,
};
function mostrarQuantidade(produto) {
    console.log(produto.quantidade); //quantidade?: number | undefined - teria que fazer uma verificação com if para ver se produto.quantidade existe
}
// - [key: string]: unknown;
// Podemos definir que um objeto poderá conter propriedades/métodos além dos que foram definidos inicialmente.
