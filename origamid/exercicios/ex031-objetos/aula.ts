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
// basicamente, podemos adicionar metodos/propiedades a mais em uma interface:

interface Post {
  titulo: string;
  visualizacoes: number;
  tags: string[];
}

const artigo: Post = {
  titulo: "como aprender HTML",
  visualizacoes: 3000,
  tags: ["HTML", "Front End"],
  autor: "André", //O literal de objeto pode especificar apenas propriedades conhecidas e 'autor' não existe no tipo 'Post'.
};

// Ao add uma propriedade nova, o TS me gera um erro porque autor não existe em Post, porém podemos adicionar na interface Post um jeito que o TS para de gerar esse erro. Obs: TS não vai gerar o autocomplete mas para de dar erro:

interface Post2 {
  titulo: string;
  visualizacoes: number;
  tags: string[];
  [key: string]: unknown;
}

const artigo2: Post2 = {
  titulo: "como aprender HTML",
  visualizacoes: 3000,
  tags: ["HTML", "Front End"],
  autor: "André", //O literal de objeto pode especificar apenas propriedades conhecidas e 'autor' não existe no tipo 'Post'.
};

// Problema, que agora tenho acesso ao artigo2.autor, porém se eu colocar autor.tamanduá, tambem me deixaria porque o TS não lê a key. Como o TS não sabe o que é e se trada de unknown, temos que fazer a verificação com o if e o typeof para o TS liberar o autocomplete.

// - Record (utility type)
// O Record define a interface de um Objeto que possui <chave, tipo>. Pode ser usado para definir a interface de um Objeto Literal genérico.
//o ideal é evitar o record e definir a interface. o Record é só pra ter uma melhor maleabilidade quando não sabemos o tipo de interface esperar.
type ObjetoLiteral1 = {
  [key: string]: unknown;
};

type ObjetoLiteral2 = Record<string, unknown>;

function mostrarTitulo(obj: ObjetoLiteral2) {
  if ("titulo" in obj) {
    console.log(obj.titulo);
  }
}

// Erros:
// mostrarTitulo("string");
// mostrarTitulo(200);
// mostrarTitulo([1, 2]);
// mostrarTitulo(null);
// mostrarTitulo(undefined);
mostrarTitulo({
  titulo: "André",
});

// - Utility Types
// Lista completa dos utility types.

// https://www.typescriptlang.org/docs/handbook/utility-types.html
