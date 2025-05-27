// - Eventos
// Ao adicionar um evento em TS devemos colocar o Type desse evento, por isso, é sempre importante se atentar ao protótipo do evento para ter acesso aos métodos e propriedades corretos.

// exemplo disso é o evento de click. Ao adicionarmos um evento de click o evento disparado na tela ao clicar é o de PointerEvent. No type da function de handleClick, podemos passar Event de forma genérica que funciona, porém porque usar TS se vamos usar as coisas de forma genérica. (é como se fosse type: any).

// function handleClick(event: Event) {}

// Logo, temos um problema. Ao trocar o type para PointerEvent, para termos o autocomplete direto do elemento, o TS acusa um erro por conta do evento 'click'. Isso acontece por um pequeno erro no TS já que o primeiro evento gerado após o click é o pointerEvent. Acontece que com o passar do tempo e as tecnologias melhoraram, temos diferentes toques de tela, como por exemplo, o touch e toque com caneta. Por ser um pouco mais antigo, o type reconhecido para o evento de click é um prototype abaixo, ou seja, o PointerEvent.
// a ordem de prototype seria: PointerEvent -> MouseEvent -> UIEvent -> Event

// Dica: hoje em dia tbm é utilizado o evento 'pointerdown', que pega, touch, caneta e click de mouse e possui o type de PointerEvent.

const btnLogin = document.querySelector("button");

btnLogin?.addEventListener("pointerdown", handleClick);

function handleClick(event: PointerEvent) {
  console.log(event);
}

// - Event e instanceof
// Uma função, quando criada para ser executada em diferentes tipos de eventos, deve receber como parâmetro o tipo comum entre elas Event.
//existem momentos em que vc pode querer adicionar dois eventos diferentes (1 de mouse e 1 de toque), como são elementos diferentes, se passa o type de mouse, não funciona pro touch e vice versa, por isso, devemos usar o type em comum entre eles e dentro da função usar o instanceof para trabalhar com cada um.

document.documentElement.addEventListener("mousedown", ativarMenu);
document.documentElement.addEventListener("touchstart", ativarMenu);
document.documentElement.addEventListener("pointerdown", ativarMenu);

function ativarMenu(event: Event) {
  console.log(event.pageX); //exemplo de que não deixa acessar
  if (event instanceof MouseEvent) {
    console.log(event.pageX);
  }
  if (event instanceof TouchEvent) {
    console.log(event.touches[0].pageX);
  }
}
// também poderia passar assim: function ativarMenu(event: MouseEvent | TouchEvent), porém toda vez que adicionar um novo evento tem que adicionar no type tbm e usando o Event genérico fica mais fácil de trabalhar porque não tem que ficar adicionando toda hora um type a mais.

// - this
// Dentro de uma função, o this faz referência ao objeto que executou a mesma. No JavaScript o this pode ser passado como o primeiro parâmetro da função, mesmo não sendo necessário informar ele durante a execução.
//obs: quando o modo strict do TS não está ativada o this faz referencia a window e quando esta ativado, o this faz referencia ao elemento do evento, no caso o btnLog (button). Atenção, se ativar a função sem ser pelo click o this retorna undefined.
//vai acusar um erro no this porque tem que definir o type. O type deve ser definido no primeiro argumento da função.

const btnLog = document.querySelector("button");

btnLog?.addEventListener("click", ClickButton);
// sem o strict, this = window
function ClickButton(this: HTMLButtonElement, event: MouseEvent) {
  console.log(this); //com o strict, this = button
}
ClickButton(); // this = undefined

// - target e currentTarget
// Como o this pode oscilar muito entre,window, element e undefined, é recomendável, quando quiser falar com o elemento, usar o currentTarget (elemento onde o evento foi adicionado) para ter certeza.
// O TypeScript não executa o JavaScript, assim ele não consegue assumir qual será o target ou currentTarget do evento executado. Os elementos são definidos como o tipo EventTarget, pois esse é o tipo mais comum entre os elementos que podem receber um evento.

const btnLogin2 = document.querySelector("button");

btnLogin2?.addEventListener("click", ClickButton2);
function ClickButton2(event: MouseEvent) {
  console.log(event.currentTarget.innerText); //retorna button - type: EventTarget | null - Erro: A propriedade 'innerText' não existe no tipo 'EventTarget'
}

// O problema é que retorna o button mas o type é de EventTarget, então se eu quero usar alguma propriedade como innerText, ele não vai deixar porque não existe innerText no protótipo de EventTarget e sim no de HTMLButtonElement, pra isso devemos usar mais uma vez o instanceof

const btnLogin3 = document.querySelector("button");

btnLogin3?.addEventListener("click", ClickButton2);
function ClickButton3(event: MouseEvent) {
  console.dir("aqui", event.currentTarget);
  if (event.currentTarget instanceof HTMLButtonElement) {
    console.log(event.currentTarget.innerText);
  }
}
// Então sempre vai ter que verificar se o event é uma instancia do type que eu quero porque por padrão, sempre virá o type como eventTarget que é a mínima instancia possível que pode receber um evento.
