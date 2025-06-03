// - module
//sempre lembrar: tem export ou import é type module, senão é global.
// Se usarmos o import/export em qualquer momento em um arquivo .ts, o TypeScript irá tratar o mesmo como o module. Consequentemente, o seu escopo não será mais global.
// para ser global, basta criar o arquivo global.ts, (repare se foi gerado o global.js) e chamar o script no html antes do script main, assim, terá acesso ao que for escrito no global.ts
//um arquivo global é bom para definirmos interfaces que queremos reaproveitar, link de url e etc, tudo que for ser reaproveitado.

// pluginSlide.ts
function pluginSlide(seletor: string) {
  console.log(`Criar slide: ${seletor}`);
}

export default pluginSlide;

// global.ts
const URL_BASE = "https://api.origamid.dev/json";

// script.ts
import pluginSlide from "./pluginSlide.js";

pluginSlide("div");

console.log(URL_BASE);

//index.html
// <body>
//   <script src="./dist/global.js"></script>
//   <script type="module" src="./dist/script.js"></script>
// </body>

//Atenção: acaba que os arquivos globais não são recomendados poruqe podem gerar erros no carregamento dos scripts então o ideal é sempre usar modules e importar o que quiser usar. Pode condesnar uma pasta global se quiser e o que quiser usar, basta importar, pra isso temos o isolatedModules, que basicamente te força a usar modules.

// - isolatedModules
// Com a configuração isolatedModules: true, não será permitida a criação de arquivos globais. Todos passarão a ser lidados como module.
//basicamente ele lê o arquivo e caso não encontre um 'import' ou 'export' escrito, vai acusar um erro.

// global.ts
export const URL_BASE = "https://api.origamid.dev/json";

export interface Produto {
  nome: string;
  preco: number;
}

// script.ts
import { Produto, URL_BASE } from "./global.js";

console.log(URL_BASE);

const livro: Produto = {
  nome: "O Senhor dos Anéis",
  preco: 200,
};
