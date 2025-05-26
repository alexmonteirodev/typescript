// - Exercício
// 1 - Selecione o link utilizando o método getElementById.

// 2 - Substitua o href do link (HTMLAnchorElement) de http:// para https://.

const link = document.getElementById("origamid");

console.dir(link); //retorna o objeto do elemento

if (link instanceof HTMLAnchorElement) {
  console.log(link.href);
  const httpsLink = link.href.toString().replace("http", "https");
  link.href = httpsLink;
  console.log(link.href);
}
//ao olhar o que que link é temos que ele tem um prototipo de HTMLAnchorElement que vem de um constructor de HTMLAnchorElement(). Ou seja, podemos acessá-lo pegando a referencia dele via instanceof, porque o link é um HTMLAnchorElement mas ele também é um HTMLElement.

// porque o protótipo utilizado para criar o <a></a> foi o HTMLAnchorElement e o protótipo utilizado para criar o HTMLAnchorElement foi o HTMLElement

// por isso quando coloca link. ele não encontra o href, porque href é um método de HTMLAnchorElement e ao selecionar com id, o getElementById retorna um HTMLElement

// outra forma seria usando o as:
const a = document.getElementById("origamid") as HTMLAnchorElement;
