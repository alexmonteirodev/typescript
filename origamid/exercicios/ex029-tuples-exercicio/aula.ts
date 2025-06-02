// 1 - Faça um fetch das vendas: https://api.origamid.dev/json/vendas.json
// 2 - Defina o tipo/interface de cada venda (tuple)
// 3 - Some o total das vendas e mostre na tela

async function fetchProdutos(api: string) {
  const r = await fetch(api);
  const json = await r.json();
  totalVendas(json);
}
fetchProdutos("https://api.origamid.dev/json/vendas.json");

interface opcoesProduto {
  marca: string;
  cor: string;
}

type produtosArr = [string, number, string, opcoesProduto];

function totalVendas(json: produtosArr[]) {
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
