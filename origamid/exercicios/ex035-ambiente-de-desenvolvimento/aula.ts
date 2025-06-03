// - Bibliotecas Externas
// Ao usarmos uma biblioteca externa criada em JavaScript, o TS não consegue automaticamente identificar a interface da mesma.

// Para isso, milhares de projetos fornecem para instalação os seus arquivos .d.ts, com isso o TS passa a reconhecer a interface da mesma
// <!-- index.html -->
// <iframe id="vimeo" src="https://player.vimeo.com/video/76979871?h=8272103f6e" width="640" height="360" frameborder="0" allowfullscreen allow="autoplay; encrypted-media"></iframe>

// <script src="https://player.vimeo.com/api/player.js"></script>
// <script src="./plugins/jquery-3.6.1.min.js"></script>
// <script src="./plugins/lodash.min.js"></script>
// <script type="module" src="./dist/script.js"></script>

// // terminal
// npm install --save-dev @types/jquery
// npm install --save-dev @types/lodash

// // script.ts
// const body = $('body');
// body.addClass('ativo');

// _.intersection([1, 2, 3, 5, 6], [2, 3, 1, 9]);

// declare const Vimeo: any;
// const iframe = document.getElementById('vimeo');
// const player = new Vimeo.Player(iframe);

// - Definitely Typed
// Este projeto disponibiliza milhares de interfaces de bibliotecas para o TypeScript.

// https://github.com/DefinitelyTyped/DefinitelyTyped

// - Ferramentas Front
// - Vite
// Vite é uma ferramenta de automação Front End. Com ela podemos gerar bundles, iniciar um live server, otimizar o código para produção e mais.

// npm create vite@latest
// // vanilla / typescript - vanilla seria ambiente puro só com JS, sem outro framework

// - Bibliotecas Externas
// Instale bibliotecas externas diretamente via npm install. Se a definição de tipo não for instalada junta com a mesma, instale ela para poder utilizar a biblioteca.

// npm install lodash
// npm install --save-dev @types/lodash

// // Já vem com os tipos
// npm install clipboard

// import _ from 'lodash';
// _.difference([2, 1], [2, 3]);

// import ClipboardJS from 'clipboard';
// const button = new ClipboardJS('button');

// function handleSuccess(event: ClipboardJS.Event) {
//   console.log('Texto copiado.');
//   console.log(event.action);
// }

// button.on('success', handleSuccess);
