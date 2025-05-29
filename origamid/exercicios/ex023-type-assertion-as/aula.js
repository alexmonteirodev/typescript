"use strict";
// - as (é ter um carro blinadado e andar de janela aberta)
// Com o Type Assertion é possível "indicar" ao TypeScript qual o tipo de dado esperado com a palavra-chave as. Só é possível indicar tipos que possuam relação com o tipo original.
// Evitar ao máximo o uso de Type Assertion, pois a segurança (Type Safety) é perdida quando indicamos algo que nem sempre será verdade.
//obs: no exemplo abaixo, video é Element, então o as deve apontar para alguma interface que herde de element. Ou seja, se colocar as string o TS não ia deixar porque não é possui o mesmo instanceof
//cuidado:
const video = document.querySelector(".player");
video.volume; //não gera erro e vc acha que realmente está falando com um elemento do tipo HTMLVideoElement
// erro TS, possíveis dados devem ser compatíveis com Element | null
const linkAnchor2 = document.querySelector("#anchor");
linkAnchor2.innerText;
//basicamente, usando o as tem até uma sintaxe mais limpa mas perde o type safety, que é basicamente pra isso que o TS foi criado, ou seja, funciona mas se estiver errado no html, vai dar erro no runtime e quebrar o site porque ao usar o as ele já assume que o elemento existe.
// - any
// Podemos usar o Type Assertion para definir que um tipo any é qualquer tipo de dado possível.
// - ! non-null operator
// Indica que não existe a possibilidade do dado ser null. Cuidado com o uso, pois pode levar a erros no runtime. Use apenas se tiver certeza. Se a verificação não for verdade no código vai gerar um erro no JS, pq meio que vc força dizendo que o dado não é null só pra continuar.
// Esse é um operador de TS !. e não de JS como o ?.. Durante a compilação ele será removido.
const video2 = document.querySelector("video"); //video2: HTMLVideoElement | null
video2.volume;
//o ideal aqui seria usar o video2?.volume, mas ao usar o ! na const de video2, vc afirma que video sempre existirá e por isso não será null. Caso o video não exista no html por alguma razão, vai dar erro no runtime e quebrar o codigo.
// - Outras Sintaxes
const video3 = document.querySelector(".player");
const video4 = document.querySelector(".player");
const video5 = document.querySelector(".player");
const video6 = document.querySelector(".player");
video3.volume;
video4.volume;
video5?.volume;
video6.volume;
