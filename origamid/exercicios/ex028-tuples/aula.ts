// - Tuples
// Tuples são arrays que possuem dados em posições fixas.
//ex:

//sem tuples
const produto1: (string | number)[] = ["Notebook", 2500];
produto1[0].toLowerCase; //produto1: (string | number)[]

//com tuples
const produto2: [string, number] = ["Notebook", 2500];
produto2[0].toLowerCase; //produto2: [string, number]

// - as const
// Torna um dado readonly e infere o tipo de dado mais específico possível. Em métodos que retornam Array's, as mesmas são transformadas em Tuples.
//basicamente o as const preenche o tipo de dado com tuples, sem vc ter que fazer manualmente, como no exemplo acima.
//a seguir temos dois exemplos, o primeiro define a tuple manualmente e o segundo via as const

//sem usar o as const, teriamos que ao passar o que a f retorna, indicar a tuple - : [HTMLElement, string] | null
function getText(selector: string): [HTMLElement, string] | null {
  const el = document.querySelector<HTMLElement>(selector);

  if (el) {
    return [el, el.innerText];
  } else {
    return null;
  }
}

const btnAs = getText("button"); //btnAs: (string | HTMLElement)[] | null

if (btnAs) {
  btnAs[0]; //antes de usar a tuple - btnAs: (string | HTMLElement)[]; depois de usar a tuple - btnAs: [HTMLElement, string]
  btnAs[1];
}

//usando as const
function getText2(selector: string) {
  const el = document.querySelector<HTMLElement>(selector);

  if (el) {
    return [el, el.innerText] as const; //readonly [HTMLElement, string]
  } else {
    return null;
  }
}

const btnAs2 = getText2("button"); //btnAs: (string | HTMLElement)[] | null

if (btnAs2) {
  btnAs2[0]; //antes de usar a tuple - btnAs: (string | HTMLElement)[]; depois de usar a tuple - btnAs: [HTMLElement, string]
  btnAs2[1];
}
