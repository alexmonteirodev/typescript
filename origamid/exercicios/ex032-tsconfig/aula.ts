// - tsconfig
// Existem diversas opções do compilador do TypeScript. Algumas vão influenciar no código gerado e outras nas indicações de erros pelo TS.
// configs mais comuns:
// {
//
//   "compileOnSave": true, // Compila ao salvar
//   // Opções do compilador
//   "compilerOptions": {
//
//     "target": "ESNext",  // Versão do JavaScript gerado
//
//     "module": "ESNext", // Versão do type module
//
//     "lib": ["ESNext", "DOM"], // Vai usar bibliotecas do ESNext e do DOM
//
//     "sourceMap": true, // Gera source map ao compilar - pq o erro no run time mostra ex: linha 3 arquivo.js, e com o sourcemap, ele mostra a linha do arquivo.ts
//
//     "noEmit": false,  // Não compilar
//
//     "allowJs": true, // Permite importar arquivos JavaScript sem que o arquivo tenha um arquivo.ts o gerando
//
//     "removeComments": true,  // Remove os comentários do arquivo JS, ao compilar
//
//     "strict": true,   // Modo estrito (inclui outras opções)
//
//     "noImplicitAny": true,  // [strict] É necessario indicar o tipo de dado dos que não são inferidos, senão o TS acusa erro
//
//     "alwaysStrict": true, // [strict] Adiciona "use strict" ao JavaScript
//
//     "strictNullChecks": true,  // [strict] Verifica a possibilidade do dado ser null | undefined
//
//     "noImplicitThis": true,    // [strict] Necessário declarar o this
//
//     "noImplicitReturns": true,   // Indica a possibilidade de retorno undefined
//
//     "noUnusedLocals": true,  // Indica parâmetros e variáveis que não foram utilizados
//     "noUnusedParameters": true,  // Indica parâmetros e variáveis que não foram utilizados
//
//     "outDir": "dist"   // Diretórios dos arquivos compilados, pasta separada com os arquivos js compilados
//   },
//
//   "include": ["src"], // Compila o que estiver na pasta src
//
//   "exclude": ["node_modules"] // Não compila o que estiver na pasta node_modules
// }

// - Demais Configurações
// https://www.typescriptlang.org/tsconfig

// - Quais utilizar?
// {
//   "compilerOptions": {
//     "target": "ESNext",
//     "strict": true,
//     "sourceMap": true,
//     "allowJs": true,
//     "removeComments": true,
//     "noImplicitReturns": true,
//     "isolatedModules": true,
//     "outDir": "dist"
//   },
//   "include": ["src"],
//   "exclude": ["node_modules"]
// }
