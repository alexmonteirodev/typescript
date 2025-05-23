"use strict";
// - Object
// É possível definir a forma (shape) de um objeto usando uma sintaxe parecida com a de criação de objetos : {}
const pessoa = {
    nome: "André",
    idade: 30,
};
//exemplo prático:
function preencherDados(dados) {
    document.body.innerHTML += `
  <div>
    <h2>${dados.nome}</h2>
    <p>R$ ${dados.preco}</p>
    <p> Inclui teclado: ${dados.teclado ? "Sim" : "Não"}</p>
  </div>`;
}
preencherDados({
    nome: "Computador",
    preco: 2000,
    teclado: true,
});
preencherDados({
    nome: "Notebook",
    preco: 2500,
    teclado: false,
});
let desconto = 10;
desconto = "200";
console.log(desconto);
function preencherDados2(dados) {
    document.body.innerHTML += `
  <div>
    <h2>${dados.nome}</h2>
    <p>R$ ${dados.preco}</p>
    <p> Inclui teclado: ${dados.teclado ? "Sim" : "Não"}</p>
  </div>`;
}
preencherDados2({
    nome: "Computador",
    preco: 2000,
    teclado: true,
});
preencherDados2({
    nome: "Notebook",
    preco: 2500,
    teclado: false,
});
//-------------Exercicio
//Defina a interface da API: https://api.origamid.dev/json/notebook.json e mostre os dados na tela.
fetch("https://api.origamid.dev/json/notebook.json")
    .then((r) => r.json())
    .then((json) => {
    monstraDadosNaTela(json);
});
function monstraDadosNaTela(json) {
    document.body.innerHTML = `
  <div>${json.nome}</div>
  `;
}
// aí caso a Empresa viesse a ter uma nova propriedade como numeroDeFuncionarios, basta adicionar no interface empresa e nao precisa sair adicionando em todas.
