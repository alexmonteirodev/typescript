"use strict";
// 1 - Faça um fetch das vendas: https://api.origamid.dev/json/vendas.json
// 2 - Defina o tipo/interface de cada venda (tuple)
// 3 - Some o total das vendas e mostre na tela
async function fetchProdutos(api) {
    const r = await fetch(api);
    const json = await r.json();
    totalVendas(json);
}
fetchProdutos("https://api.origamid.dev/json/vendas.json");
function totalVendas(json) {
    console.log(json[0][1]);
    let total = 0;
    for (let i = 0; i < json.length; i++) {
        total += json[i][1];
    }
    document.body.innerHTML = `<h2>Total: R$ ${total}</h2>`;
}
// - usando reduce:
// function totalVendas(json: produtosArr[]) {
//   const total = json.reduce((acumulator, atual) => {
//     return acumulator + atual[1];
//   }, 0);
//   document.body.innerHTML = `<h2>Total: R$ ${total}</h2>`;
// }
