// - Intersection
// Funciona em parte como o extends para Interfaces, mas pode ser utilizado em Types.

type ProdutoIntersection = {
  preco: number;
};

type CarroIntersection = {
  rodas: number;
  portas: number;
};

function handlwProdutoCarro(dados: ProdutoIntersection & CarroIntersection) {
  dados; //da pra acessar todas as propriedades dos dois types
}

handlwProdutoCarro({ preco: 200, portas: 2, rodas: 4 });

// - Adicionar Propriedades
// É possível adicionar uma propriedade a uma interface/tipo que já definido.

type TipoCarro = {
  rodas: number;
  portas: number;
};
type TipoCarroComPreco = TipoCarro & {
  //basta colocar que vai ter a tipagem do TipoCarro e já adicionar em um obbjeto o que quiser
  preco: number;
};

// a diferença entre adicionar propriedades por Type e por Interface é que Type não permite nomes duplicados, ou seja, tem que criar um novo type se quiser adicionar novas propriedades e interface não

interface InterfaceCarro {
  rodas: number;
  portas: number;
}

interface InterfaceCarro {
  preco: number;
}
//agora InterfaceCarro possui rodas; portas; preco

// - Window
// Se definimos uma propriedade global, podemos "extender" a interface de Window, apenas redeclarando a interface.
interface Window {
  userId: number;
}

window.userId = 200;
console.log(window.userId);
