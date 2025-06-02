// - Duck Typing
// Um objeto quando passado em uma função, pode conter propriedades e métodos além dos declarados na interface.

// "Se parece com um pato, nada como um pato e grasna como um pato, então provavelmente é um pato." - Wikipédia

// basicamente ao definir uma interface X, e depois criar o objeto dessa interface, caso esse objeto tenha mais propriedades que ele, o TS não indentica um erro mas se tiver menot, sim. Ex:
//no caso abaixo para que um objeto se pareça com a interface Duck, deve ter no minimo as mesmas propriedades (nome e patas)

interface Duck {
  nome: string;
  patas: number;
}

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

function sePareceComUmPato(animal: Duck) {
  console.log(animal.nome);
}
sePareceComUmPato(pato);
sePareceComUmPato(garca); //TS não acusa erro por ter a propriedade 'pataLonga' a mais
sePareceComUmPato(peixe); // Erro - não possui interface Duck porque tem a propriedade 'patas' faltando

// - Utility Types
// O TypeScript conta com utility types, tipos que podem ser utilizados como funções para a definição de novos tipos.

// - Partial (utility type)
// Com o Partial<Tipo>, podemos indicar que todas as propriedades da interface passada em Tipo, são opcionais.
//basicamente ao usar o partial, o TS automaticamente transforma sua interface em opcional, ex:

interface Produto2 {
  nome: string;
  quantidade: number;
}
// Partial gera isso:
// interface Produto2 {
//   nome?: string;
//   quantidade?: number;
// }

const objpProduto2 = {
  nome: "geladeira",
  quantidade: 20,
};

function mostrarQuantidade(produto: Partial<Produto2>) {
  console.log(produto.quantidade); //quantidade?: number | undefined - teria que fazer uma verificação com if para ver se produto.quantidade existe
}

// - [key: string]: unknown;
// Podemos definir que um objeto poderá conter propriedades/métodos além dos que foram definidos inicialmente.
