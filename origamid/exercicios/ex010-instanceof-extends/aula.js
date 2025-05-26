"use strict";
// - extends
// O instanceof verifica se a função construtora herda de outra (extends).
class ProdutoExtend {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
}
const livro = new ProdutoExtend("A guerra dos Tronos");
class Livros extends ProdutoExtend {
    autor;
    constructor(nome, autor) {
        super(nome);
        this.autor = autor;
    }
}
class Jogos extends ProdutoExtend {
    jogadores;
    constructor(nome, jogadores) {
        super(nome);
        this.jogadores = jogadores;
    }
}
function buscarProduto(busca) {
    if (busca === "O Hobbit") {
        return new Livros("O Hobbit", "J. R. R. Tolkien");
    }
    if (busca === "Dark Souls") {
        return new Jogos("Dark Souls", 1);
    }
    return null;
}
const produtoEscolhido = buscarProduto("O Hobbit");
if (produtoEscolhido instanceof Livros) {
    console.log(produtoEscolhido.nome);
}
//agora da pra ver se o produtoEscolhido é uma instancia de ProdutoExtend
if (produtoEscolhido instanceof ProdutoExtend) {
    console.log(produtoEscolhido.nome); //produtoEscolhido: Livros | Jogos
}
