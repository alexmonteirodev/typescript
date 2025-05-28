// - Guard, Safety e Narrowing
// O Type Guard (defesa) garante a Type Safety (segurança) do dado dentro do bloco condicional. Esse processo é chamado de Type Narrowing (estreitamento).

// O TypeScript faz Control Flow (controle de fluxo) para entender qual o dado dentro da condicional.

// ex:

function typeGuard(value: any) {
  if (typeof value === "string") {
    return value.toLowerCase();
  }
}
// if (typeof value === "string") - seria a Guard
// return value.toLowerCase() - seria o Type Narrowing (estreitamento)
// o conjunto disso garante a segurança - type safety (porque temos ctz que o que ocorrer dentro do if, estará ocorrendo com uma string)
// o processo interno que o TS faz para entender que aquilo é uma string e gerar o autocomplete dela, seria o control flow

// - in
// O operador in verifica se o objeto possui uma propriedade com o mesmo nome da string comparada "propriedade" in obj.

const obj = {
  nome: "André",
};
if ("nome" in obj) {
  console.log("tem a prop - nome");
}

//exemplo de type safety:
// vamos supor que você puxa os dados bancarios do cliente do backend e que não foi implementada nenhum tipo de typesafety:
interface Produto0 {
  nome: string;
  preco: number;
}

async function fetchProduto() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const json = await response.json();
  handleProduto(json);
}

function handleProduto(data: Produto0) {
  document.body.innerHTML += `
      <p>Nome: ${data.nome}</p>
      <p>Preço: R$ ${data.preco + 100}</p>
    `;
}

fetchProduto();

// Caso no futuro na api a propriedade deixe de se chamar preco e se chame total , o valor ia quebrar e aparecer NaN pro cliente. Algo que não aconteceria se usasse typeSafety, no caso daria um erro no if e não ia retornar nada.
interface Produto1 {
  nome: string;
  preco: number;
}

async function fetchProduto1() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const json = await response.json();
  handleProduto1(json);
}

function handleProduto1(data: Produto1) {
  if ("preco" in data) {
    document.body.innerHTML += `
      <p>Nome: ${data.nome}</p>
      <p>Preço: R$ ${data.preco + 100}</p>
    `;
  }
}

fetchProduto1();
