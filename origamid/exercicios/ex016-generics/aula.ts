// - Generics
// Um tipo genérico é uma forma de declararmos um parâmetro para a nossa função, classe ou interface. Esse tipo poderá ser indicado no momento do uso da função através de <Tipo>.

// Ao definirmos que uma function pode retornar uma string | number | boolean, temos que fazer uma verificação dentro da função para podermos usar o autocomplete:
//   if (typeof params === "string") {
//     return params.toLowerCase;
//   }
//exemplo do problema:

function retornaParams(params: string | number | boolean) {
  return params; //não da pra usar autocomplete porque params pode ser string | number | boolean. Precisaria de um if para verificar o typeof
}
console.log(retornaParams("Harry Potter").toLoweCase); //A propriedade 'toLoweCase' não existe no tipo 'string | number | boolean'
console.log(retornaParams(200));
console.log(retornaParams(true));

// Solução:

function retornaParamsSolucao<variavel>(params: variavel): variavel {
  return params;
}
console.log(retornaParamsSolucao("Hogwarts").toLowerCase); //variavel indentifica o typeof diretamente
console.log(retornaParamsSolucao(300));
console.log(retornaParamsSolucao(false));

// o TS entende o type da variável que vc está passando e recria a function e assim vc tem acesso ao autocomplete. É como se da função acima, ele recriasse:

function retornaParamsSolucaoRecriada<string>(params: string): string {
  return params;
}
console.log(retornaParamsSolucaoRecriada<string>("Hogwarts").toLowerCase);
// e acontece para os demais types.

//exemplos mais práticos:

// EXEMPLO 1 - reotornar 5 primeiros itens de uma lista seja ela qual for:

const numerosArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const frutas = ["Banana", "Uva", "Abacaxi", "Laranja", "Limão", "Maçã"];

// function firstFive(lista: number[]) {
//   return lista.slice(0, 5);
// }
// console.log(firstFive(numerosArr));

// logo, temos que:

function firstFive<TipoLista>(lista: TipoLista[]): TipoLista[] {
  return lista.slice(0, 5);
}
console.log(firstFive(numerosArr)); //firstFive<number>(lista: number[]): number[]
console.log(firstFive(frutas)); // firstFive<string>(lista: string[]): string[]

//explicação:
//O primeiro <TipoLista> representa o tipo que está dentro da lista, no caso number. Como se fosse firstFive<number>(numerosArr)
//O segundo TipoLista[] é o type que a function recebe nos params, ou seja, uma array que contem um tipolista dentro. Para informar o type dos parametros, passamos a [] e antes dela informamos o valor que contem dentro dessa mesma Array, por isso, temos então TipoLista[]. Porque TipoLista antes do [], indica que tipo de elemento tem dentro da [] que o type  recebe, fazendo referência ao elemento <TipoLista>, é dizer, dentro da Array, vai ter um TipoLista que é a referência ao <TipoLista>.
// O terceiro que vem depois da função informa o que deve ser retornado, no caso uma Array de TipoLista
//dica: para entender melhor, substitua TipoLista por number.

// function firstFive<TipoLista>(lista: TipoLista[]): TipoLista[] {
//   return lista.slice(0, 5);
// }
// firstFive<TipoLista>(numerosArr)

// É comum as pessoas abreviarem isso, o máximo possivel, porque já sabemos que alí no TipoLista está sendo passado o type, logo em geral é comum ver essa variável sendo chamada de 'T', teriamos então:

function firstFive2<T>(lista: T[]): T[] {
  return lista.slice(0, 5);
}

Array; //interface Array<T> - comand + clique na Array para ver

//por isso temos que isso:
const numerosAleatorios: number[] = [23, 24, 21, 22];
// É a mesma coisa que isso:
const numerosAleatorios2: Array<number> = [23, 24, 21, 22]; //interface Array<T>
//porque a interface de Array quando foi definida, foi definida de forma genérica, e como é Array<T>, que seria Array<type>, podemos passar o type que quisermos, como por exemplo: Array<number>, logo

// EXEMPLO 2 - function que retorna valor caso não seja null:

function notNull<T>(arg: T) {
  if (arg !== null) {
    return arg;
  } else {
    return null;
  }
}

notNull("Andre")?.toLowerCase();
notNull(200.4)?.toFixed();

// EXEMPLO 3 - function que retorna o dado mais o tipo de dado:

function tipoDado<T>(params: T) {
  const resultado = {
    dado: params,
    tipo: typeof params,
  };
  return resultado;
}
console.log(tipoDado("teste").tipo);

// - extends
// Com o T podemos passar qualquer tipo de dado, já que foi definido como genérico e isso pode gerar um problema porque vai que você não quer receber qualquer tipo de dado. Exemplo: quero que seja genérico mas apenas para HTMLElements,então aí vai poder ser só alguma coisa que herde de HTMLElements.

// É possível indicar que o tipo genérico deve herdar de uma interface específica com o extends. É dizer, só pode passar no tipo o elemento que possui como herança o HTMLElement. Ex:

function extract<T extends HTMLElement>(el: T): string {
  return el.innerText;
}

// Exemplo 2 - ao invés de usar um instanceof pra fazer a verificação é como se colocasse o filtro só para HTMLElements:
// É como se evitasse fazer o instanceof para verificar o tipo do elemento e filtrasse tudo já diretamente, sem precisar passar instanceof para cada elemento. filtra pelo tipo primário que todos elements possuem no caso, HTMLElement, assim filtra tudo, buttons, anchoras etc.

//sem extends
const linkA = document.querySelector("a");

function extractText(el: HTMLElement) {
  return {
    texto: el.innerText,
    el: el,
  };
}

if (linkA) {
  console.log(extractText(linkA).el.href); //el: HTMLElement - ou seja, el perdeu a referencia que era um HTMLAnchorElement
}

//no exemplo acima poderia passar o T, mas aí perderia o autocomplete do innerText porque ele não saberia que que é o el:
function extractText2<T>(el: T) {
  return {
    texto: el.innerText, //any
    el: el,
  };
}
//vs

// com extends
const linkAnchor = document.querySelector("a");

function extractText3<T extends HTMLElement>(el: T) {
  return {
    texto: el.innerText,
    el: el,
  };
}

if (linkAnchor) {
  console.log(extractText3(linkAnchor).el.href); //el: HTMLAnchorElement
}

// EXEMPLO 3 - function que replica a função do queryselector:
// no jquery, ao usar $(x) é a mesma coisa que document.querySelector(x), vamos recriar isso:

function $<T extends HTMLElement>(selector: string): T | null {
  return document.querySelector(selector);
}
const linkJquery = $<HTMLAnchorElement>("a")?.href;

//EXEMPLO 4 - definindo um fetch:

//sem usar interface com extends
async function getData(url: string) {
  const response = await fetch(url);
  const json = await response.json(); //Promise<any> - poruqe não tem como saber o que vem da api
  return json;
}

async function handleData() {
  const notebook = await getData("https://api.origamid.dev/json/notebook.json");
  console.log(notebook); //notebook: any
}
handleData();

//repare que notebook é any, então podemos recriar isso usando uma interface, temos então:
async function getData2(url: string) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

interface Notebook {
  nome: string;
  preco: number;
}

async function handleData2() {
  const notebook: Notebook = await getData2(
    // getData2 - Promise<any>
    "https://api.origamid.dev/json/notebook.json"
  );
  console.log(notebook.nome); // notebook: Notebook
}
handleData2();

//agora sim, já está funcional, mas vamos além, porque o getData ainda consta que retorna uma promise com any, vamos definir o que vem da promise. Usando o T e o return da function de uma Promise<x>, já que é o que T representa. T - Promise<any>
async function getData3<T>(url: string): Promise<T> {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

interface Notebook {
  nome: string;
  preco: number;
}

async function handleData3() {
  const notebook = await getData3<Notebook>(
    //getData3 - Promise<Notebook>
    "https://api.origamid.dev/json/notebook.json"
  );
  console.log(notebook.nome); // notebook: Notebook
}
handleData3();

//lembrando que:
// isso:
const notebook = await getData3<Notebook>;
// é a mesma coisa que isso:
const notebook: Notebook = await getData3;
//porque ao informar que a const notebook deve usar a interface de notebook, e o TS vai inferir que o GetData vai ter o type: Notebook
