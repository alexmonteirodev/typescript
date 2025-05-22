// O que é TypeScript? - TypeScript é uma linguagem baseada em JavaScript.

// Básicamente você escreve em TypeScript e depois compila/transforma (usando a ferramenta 'tsc' do TS) o que escreveu em JavaScript. Porque? porque os navegadores não entendem TS e sim JS.

// TS é um superset de JS, ou seja, tudo que é JS também funciona em TS, mas o TypeScript adiciona coisas novas (como tipos, interfaces, enums, etc.).

// Então porque usar TS?
// Pq ele adiciona coisas novas como por exemplo o tipo, que facilita na hora da escrita do JS.
// Basicamente vamos escrever js em um arquivo .ts, mas o diferencial é que podemos indicar que tipo de variável é aquela. exemplo:

const frase1 = "frase 1"; // String

//quando acessamos as propriedades e métodos de frase1, estamos acessando do prototipo String, como por exemplo: .toUpperCase()

//logo, se tento acessar em frase1, um método de number, daria um erro no console:

frase1.toFixed(); //Uncaught TypeError: frase1.toFixed is not a function

//tendo a visualização mais clara do erro eu tenho duas opções, ou escrevi o método errado, ex: toFixeds, ou frase1 não é o que eu to pensando que é (number).
//isso fica melhor quando estamos lidando com arrays de objetos que vamos acessando um dentro do outro e fica mais fácil de entender o que está acessando o que.

// o problema é que o JS me da liberdade para tentar acessar toFixed que é um método de Number em uma string e no TS já ficaria em vermelho.

// Outro exemplo seria: Ao criar uma function, podemos passar um argumento, mas quando vou trabalhar dentro da function eu não tenho o autocomplete do vsCode, porque ele nao sabe qual elemento esperar. exemplo:

function soma(valor1, valor2) {
  return valor1; //repare que ao tentar acessar algum método de valor1. ele não da nada no autocomplete, pq o js não sabe qual o tipo de dado que vai vir.
}

// em TS poderiamos informar o tipo de dado e então ele me daria os métodos daquele dado, usando 'exemplo:number'. Ex:
// (olhar em aula.ts)
// function soma2(valor3:number, valor4) {
//      valor3.(lista com metodos de Number)
// }

// tudo isso melhora a DX (developer experience). entre outras funcionalidades.
