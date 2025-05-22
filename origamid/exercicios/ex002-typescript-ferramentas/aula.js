"use strict";
// - script.ts e tsc
// Os principais programas que executam JavaScript (browser/node), não conseguem executar TypeScript. Por isso precisamos de um compilador para gerar um arquivo JavaScript a partir de um TypeScript.
//o próprio TS já tem esse compilador, o tsc
//para instalar
// npm install -g typescript (o -g instala globalmente então por ser mac teria que dar permissao usando o sudo antes do comando mas preferi instalar localmente na pasta typescript)
//depois inicialmente para usar, temos no cli: tsc arquivo-que-quero-compilar.ts
// exemplo:
//no arquivo.ts
function falarNome(nome) {
    console.log(nome);
}
// cli:tsc arquivo.ts
//compila no arquivo.js
function falarNome(nome) {
    console.log(nome);
}
//ou seja, eliminou o que era TS. (:string)
// pra não ter que ficar dando o comando tsc arquivo.ts no terminal toda hora que quiser compilar, podemos criar uma config inicial usando o: tsc --init
//tsc --init vai criar um arquivo chamado tsconfig.json, onde podemos usar nossas configs. Depois disso basta escrever tsc na cli que ele vai pegar todos os arquivos .ts e compilar usando as configs que definimos.
//obs: caso tenha instalado localmente o comando é: npx tsc
// usando o: tsc -w, é dizer watch, ele fica rodando e compilando ao vivo. como se fosse um npm run dev
//obs: olhar tsconfig.json
