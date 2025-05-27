// - class
// Em JavaScript, Classes (class) são funções construtoras que geram objetos. Quando definimos uma classe, o TypeScript gera a interface do objeto produzido pela mesma.
// ex:
class ProdutoLivraria {
  nome: string; //o type da propriedade deve ser definido fora do constructor

  constructor(nome: string) {
    this.nome = nome;
  }
}
const livroHarry = new ProdutoLivraria("Harry Potter");

console.log(livroHarry.nome);

// - instanceof
// Existem funções que retornam diferentes tipos de objetos. Com a palavra-chave instanceof podemos verificar se um objeto é uma instância (foi construído) ou herda de uma função construtora (class).

console.log(livroHarry instanceof ProdutoLivraria); //true

//Ex:
//vamos supor que tenha uma função que faça uma busca no seu banco de dados e detorne 3 types (dois tipos de classes ou null)

class Livro {
  autor: string;
  constructor(autor: string) {
    this.autor = autor;
  }
}

class Jogo {
  jogadores: number;
  constructor(jogadores: number) {
    this.jogadores = jogadores;
  }
}

function buscarProduto(busca: string) {
  if (busca === "O Hobbit") {
    return new Livro("J. R. R. Tolkien");
  }
  if (busca === "Dark Souls") {
    return new Jogo(1);
  }
  return null;
}
//repare que resultadoBuscaProduto não tem como saber o type do dado 'busca' porque o JS ainda não foi executado
const resultadoBuscaProduto = buscarProduto("O Hobbit"); //resultadoBuscaProduto: Livro | Jogo | null

//logo, se tentar acessar resultadoBuscaProduto, pra usar algum método, o TS acusa um erro:
//resultadoBuscaProduto. //'resultadoBuscaProduto' é possivelmente 'null'

//tirando a possibilidade de ser null
resultadoBuscaProduto?.autor; //A propriedade 'autor' não existe no tipo 'Livro | Jogo'

//mesmo tirando a possibilidade de ser null com uma verificação, ainda não tem como saber se o dado é de livro ou jogo porque o código ainda não rodou. E pra isso serve o instance of
if (resultadoBuscaProduto instanceof Livro) {
  resultadoBuscaProduto.autor; //não gera erro e da o autocomplete
  console.log(resultadoBuscaProduto.autor); //rodamos o código sem chance de erro
}

//basicamente o instance of serve para fazer uma verificação além da verificação de null ou undefined.
