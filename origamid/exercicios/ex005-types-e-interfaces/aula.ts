// - Object
// É possível definir a forma (shape) de um objeto usando uma sintaxe parecida com a de criação de objetos : {}

const pessoa: { nome: string; idade: number } = {
  nome: "André",
  idade: 30,
};

//exemplo prático:

function preencherDados(dados: {
  nome: string;
  preco: number;
  teclado: boolean;
}) {
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

//repare que ao definir os tipos de dados que serão recebidos no objeto dados, torna o código mais dificil de ler e mais complexo, por isso tem como condensar essas preferencias de tipo em uma "variável". Pra isso serve o Type.

// - Type
// A palavra-chave type cria um atalho (alias) para um tipo customizado. Sempre escreva um type com a primeira letra maiúscula.

type NumberOrString = number | string;

let desconto: NumberOrString = 10;

desconto = "200";
console.log(desconto);

//logo, teríamos:

type Produto = {
  nome: string;
  preco: number;
  teclado: boolean;
};

function preencherDados2(dados: Produto) {
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

// - Interface
// interface geralmente da mesma forma que type, porém possui uma sintaxe diferente. As intefaces são geralmente utilizadas para definirmos objetos.

// A diferença será explorada em aulas mais avançadas. Por agora, vamos utilizar Type para tipos primitivos e Interface para objetos.
// interface não usa o =

interface Aluno {
  name: string;
  idade: number;
}

// Resumindo: use type para definir tipos primitivos e interface para objetos:

type resumo1 = "aulaTS" | "aulaJS";

interface resumo2 {
  aulats: string;
  aulajs: string;
}

//-------------Exercicio
//Defina a interface da API: https://api.origamid.dev/json/notebook.json e mostre os dados na tela.

fetch("https://api.origamid.dev/json/notebook.json")
  .then((r: any) => r.json())
  .then((json: any) => {
    monstraDadosNaTela(json);
  });

interface jsonObject {
  garantia: string;
  nome: string;
  preco: number;
  seguroAcidentes: boolean;
  descricao: string;
  empresaFabricante: {
    fundacao: number;
    nome: string;
    pais: string;
  };
  empresaMontadora: {
    fundacao: number;
    nome: string;
    pais: string;
  };
}

function monstraDadosNaTela(json: jsonObject) {
  document.body.innerHTML = `
  <div>${json.nome}</div>
  `;
}
//repare que ao usar o interface quando vai acessar json. alguma coisa, já aparece o autocomplete com as propriedades do json

//obs: poderia criar até uma interface para a interface no caso das empresas que seguem um mesmo padrão e ficaria:

interface Empresa {
  fundacao: number;
  nome: string;
  pais: string;
}

interface jsonObject {
  garantia: string;
  nome: string;
  preco: number;
  seguroAcidentes: boolean;
  descricao: string;
  empresaFabricante: Empresa;
  empresaMontadora: Empresa;
}

// aí caso a Empresa viesse a ter uma nova propriedade como numeroDeFuncionarios, basta adicionar no interface empresa e nao precisa sair adicionando em todas.
