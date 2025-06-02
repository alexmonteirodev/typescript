// - Classes
// As classes/funções construtoras são responsáveis pela construção de objetos que já vimos, como MouseEvent, HTMLElement e os demais.
//relembrando:
class ProdutoClass {
  readonly tipo = "produto";
  nome;
  constructor(nome: string) {
    //constructor da acesso ao argumento dentro da class
    this.nome = nome;
  }
}

const cd = new ProdutoClass("Charlie Brown");
console.log(cd.nome);

// - Modificadores
// O TypeScript fornece diversas palavras-chave (Modifiers) que podem ser utilizadas em propriedades de classes modificar o comportamento/uso das mesmas.
// Essas palavras são:

// 1 - public: é o padrão de qualquer uma
// 2 - private: só pode ser acessada dentro da classe (não da acesso a subclasses, única diferença para o protected)
// 3 - protected: só pode ser acessada dentro da classe e subclasses
// 4 - readonly: só permite leitura

//porque isso é útil? porque no exemplo de cima da class ProdutoClass, caso eu queira mudar o cd.tipo = 'peixe', eu posso porque é um objeto, poorém não faz sentido mudar o tipo poruqe a idéia dele estar fora do constructor é justamente ser algo imutável, já que essa class se trata de protudos, então eu não quero que o produto cd possa ser classificado como 'peixe', nem outra classificação, então posso usar o readonly, po exemplo, que não vai me deixar modificar o cd.tipo:

cd.tipo = "peixe"; // Não é possível atribuir a 'tipo' porque é uma propriedade de somente leitura. - readonly

// mas atenção, os modificadores são parte do TS, logo, ele me gera um erro aqui quando estou codando mas no JS/run time, ele deixa essa mudança acontecer.
console.log(cd.tipo); //peixe

// - Class e Interface
// Ao definirmos uma classe, a sua interface é gerada automaticamente pelo TypeScript. A definição da classe é o que utilizamos para verificar se um objeto é uma instância da mesma instanceof class.

class Quadrado {
  readonly lados = 4;
  medida: number;
  constructor(medida: number) {
    this.medida = medida;
  }
  getPerimetro() {
    return this.medida * this.lados;
  }
  getArea() {
    return this.medida * this.medida;
  }
}

const q1 = new Quadrado(10);

//caso tivesse uma class tbm de Circulo, a forma para usar o getArea() seria usar um instanceof, para ter acesso aos metodos de quadrado porque q1 poderia ser quadrado ou circulo
if (q1 instanceof Quadrado) {
  console.log(q1.getArea());
}
