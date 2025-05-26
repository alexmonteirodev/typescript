// - querySelector
// Quando selecionamos um elemento do DOM com o querySelector, o objeto retornado dependerá da string que passarmos no método.

// https://developer.mozilla.org/en-US/docs/Web/API

//ex:
const img = document.querySelector("img"); //  HTMLImageElement | null - puxou pela tag, por isso sabe que é um elemento de imagem
const img2 = document.querySelector("#img2"); //   Element | null - puxou pelo ID, sabe apenas que é um Element

// quando passamos img, o queryselector indentifica que é um HTMLImageElement, pelo nome, diferente se fosse pelo ID que não saberia qual elemento é como no caso do exercicio anterior.
//obs: se eu coloco ID imagem em uma img ou em um a, o JS não indentifica que elemento é, ele pega o que pode ser de forma genérica, ou seja, com certeza será um Element e cabe a você definir depois no instanceof

if (img2 instanceof HTMLImageElement) {
  console.log(img2.blur);
}

// por isso é sempre importante fazer verificação por que se por algum motivo alguém mexe no código depois e muda o id img2 pra outra tag, daria erro e dessa forma não gera erro porque ele primeiro verifica se aquilo é um elemento de imagem.

// - querySelectorAll
// O querySelectorAll retorna uma NodeList de elementos. Não confundir o nome da interface NodeListOf com o nome da classe NodeList.

const links = document.querySelectorAll(".link"); // NodeListOf<Element>
const ancoras = document.querySelectorAll("a"); // NodeListOf<HTMLAnchorElement>

links.forEach((link) => {
  console.dir(link.href); // Erro: A propriedade 'href' não existe no tipo 'Element'.

  if (link instanceof HTMLAnchorElement) {
    console.dir(link.href); // verificado, sem erro
  }
});

ancoras.forEach((ancora) => {
  console.dir(ancora.href);
});

//obs: se verificar o que é  NodeListOf<Element>
console.log(NodeListOf); //NodeListOf is not defined.

// retorna erro dizendo que não existe/não foi definido porque no console tem que passar algo que foi criado em JS (não foi instanciada nenhuma variável com o nome de NodeListOf) e não uma interface.

// NodeListOf é uma interface:
const links2: NodeListOf<Element> = document.querySelectorAll(".link"); //interface NodeListOf<TNode extends Node>

// Ou seja, em algum lugar do JS tem uma interface criada e um dos elementos é o NodeListOf. Portanto NodeListOf é uma interface e a classe que é retornada por ela é NodeList:
console.log(NodeList); //ƒ NodeList() { [native code] }

//retorna uma function, porque uma classe é uma função construtora.
