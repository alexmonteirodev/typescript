"use strict";
// - null
// null é um tipo primitivo que representa a ausência de valor. É comum em funções do DOM que fazem uma busca, retornarem null quando não são bem sucedidas.
const button = document.querySelector("button"); //button: HTMLButtonElement | null
// repare que ao buscar o elemento button, ele pode valer HTMLButtonElement ou null
//então sempre que for falar com um elemento que pode retornar null, tem que verificar se esse elemento existe ou não, porque caso ele não exista vai quebrar o app., logo, temos:
//obs: essa verificação é chamada de 'controle de flow'
if (button !== null) {
    button.click(); //button: HTMLButtonElement
}
//com o controle de flow agora button só tem chance de ser o elemento e não tem risco de quebrar a aplicação.
//outras formas de fazer essa verificação:
if (button !== null) {
}
//mesma coisa que:
if (button) {
    //null = false, logo a opção seria - HTMLButtonElement | null, que seria HTMLButtonElement | false, e o primeiro elemento true é retornado pelo OU
}
//mesma coisa que:
button?.click(); // ? é dizer: se button for null ou undefined, não siga com os métodos depois do ponto.
// - undefined
// undefined representa variáveis/propriedades que foram instanciadas, porém, os seus valores ainda não foram definidos.
let total; //instanciada porém sem valor
function name(item) { } //instanciada porém não retorna nada
console.log(total); //undefined
console.log(name()); //undefined
const filme = {
    nome: "Ragnarok",
};
console.log(filme.nome); //Product.nome?: string | undefined - poruqe Product tem nome como opcional
// - strictNullChecks
// Sem o strictNullChecks como true, o TypeScript assume que qualquer valor pode incluir null | undefined e consequentemente para de checar casos onde realmente o null | undefined podem ser retornados.
//basicamente é o strictNullChecks que confere e da o erro caso a variavel retorne ou possa retornar null e nos diga pra fazer uma verificação antes de usá-la. O problema é que por padrão, no tsconfig, ele vem como false, então jamais usar false nessa config. Lado bom é que ao usar a config strict, já adiciona o strictNullChecks como true
// tsconfig.json
// {
//   "compilerOptions": {
//     "target": "ESNext",
//     "strict": true, // já incluso no strict
//     "strictNullChecks": true
//   }
// }
