// - Annotation (anotação)
// Com o TypeScript podemos indicar qual será o tipo de dado de uma variável através de anotações (: string).

let produto: string = "livro";

const preco: number = 200;

produto = 300;

const carro: {
  marca: string;
  portas: number;
} = {
  marca: "Audi",
  portas: 4,
};

const moto = {
  marca: "Hona",
  rodas: 2,
};

// - Inference (inferência)
// basicamente o JS já consegue entender/inferir que produto é uma string porque ele consegue ler o valor. Então é até uma boa prática não colocar que o tipo é uma string, porque isso já está claro. Portanto a inferencia faz uma leitura do JS sem executar ele.

const barato: boolean | string = preco < 400 ? true : "produto caro";
//aqui o JS lê mas não executa, porque 200 sempre vai ser menor que 400, ou seja, sempre vai ser true, mas pra inferência ainda tem uma segunda opção que é a string, porque o codigo ainda não foi executado (ainda não ocorreu o run time)

// - Funções
// As anotações serão necessárias quando lidamos com funções.

const nintendo = {
  nome: "Nintendo",
  preco: "2000",
};

function transformarPreco(params: { nome: string; preco: string }) {
  params.preco = "R$ " + params.preco;
  return params;
}

const produtoNovo = transformarPreco(nintendo);

console.log(produtoNovo);

// - Exercício 1
// Conserte a função com TypeScript

// function normalizarTexto(texto) {
//   return texto.trims().toLowercase();
// }

function normalizarTexto(texto: string) {
  return texto.trim().toLowerCase();
}

// - Exercício 2
// Conserte as funções com TypeScript
const input = document.querySelector("input");

const total = localStorage.getItem("total");

if (input && total) {
  input.value = total;
  calcularGanho(+input.value);
}

function calcularGanho(value: number) {
  const p = document.querySelector("p");
  if (p) {
    p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
  }
}

function totalMudou() {
  if (input) {
    const value = Number(input.value);
    localStorage.setItem("total", value.toString());
    calcularGanho(value);
  }
}

if (input) {
  input.addEventListener("keyup", totalMudou);
}
