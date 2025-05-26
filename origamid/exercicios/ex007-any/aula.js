"use strict";
// - Any
// O any indica que o dado pode conter qualquer tipo de dado do TypeScript. Devemos evitar ao máximo o uso do any, pois o mesmo remove todas as seguranças e conveniências que o TS fornece.
// ex:
function normalizar(texto) {
    //texto: any
    //se não disser qual o type que texto vai receber, por padrão já está any (implicito)
    return texto;
}
//então colocar any aqui é a mesma coisa que escrever JS puro, não faria sentido usar TS
function normalizar2(texto) {
    return texto.trim().toLowerCase(); //não tem o autocomplete porque o type é any
}
//como o texto tem type any, não gera erro caso eu queira colocar um numero na variável texto, logo, me gera um erro no runtime ou seja, no console.log. Coisa que seria evitada pelo TS caso texto tivesse um type, já daria erro na hora de digitar o código e evitaria gerar erro no runtime.
console.log(normalizar2(" teStE "));
console.log(normalizar2(200)); //Uncaught TypeError: texto.trim is not a function
// - Uso do Any - Quando usar o any então?
// Em alguns casos o any faz sentido, como no caso de um fetch onde qualquer tipo de dado pode ser retornado, dependendo da API que acessarmos.
//obs: evite o uso do any ao maximo pois pode quebrar o app muito fácilmente.
