// - Array
// Uma array não pode ser verificada com o typeof pois a mesma é um object. Podemos verificar se o dado é instanceof Array ou podemos usar a função Array.isArray().

//O ideal então seria passar unknown porque nao sabemos o que a api retorna e tratar o tipo de dado com type guard

async function fetchCursos() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const json = await response.json();
  handleCursos(json); //any
}
fetchCursos();

function handleCursos(data: unknown) {
  if (data instanceof Array) {
    console.log("É instância de Array");
  }
  // ou
  if (Array.isArray(data)) {
    console.log("É um Array"); //type predicate - arg is any[]
  }
}

// - Type Predicate (is é chamado de type predicate)
// TypeScript não executa JavaScript

// Sabemos já que o TS não executa o JS durante a checagem dos tipos. Se isso ocorre, então como a função isArray consegue ser usada como Type Guard?

// Com o Type Predicate :arg is type, podemos indicar qual o tipo de argumento uma função booleana (que retorna boolean) recebeu para ser verdadeira.

//como o TS não executa o JS, se fizermos uma função que verifica a typeGuard, não funcionaria:

function isStringGuard(value: unknown) {
  return typeof value === "string";
}

function handleData(data: unknown) {
  if (isStringGuard(data)) {
    data.toLowerCase();
  }
}

//como TS não executa JS, não teria como isStringGuard() executar e verificar o type guard de string.

//com o Type predicate é possível da seguinte forma:
function isStringGuard1(value: unknown): value is string {
  //value is string - é dizer, retorna true quando value for string
  return typeof value === "string";
}

function handleData(data: unknown) {
  if (isStringGuard1(data)) {
    //isStringGuard1(value: unknown): value is string
    data.toLowerCase();
  }
}

//é como se vc já desse um predict, falasse, olha, eu sei que vc não executa js, mas coloca que quando executar aqui vai ser string e me da o autocomplete pra continuar. Para fazer isso, tem que garantir que a type guard está correta poque se fosse o caso de verificar uma string e vc passa que vai ser um number o TS não onsegue indentificar porque não vai executar o JS e não vai acusar erro e o site vai quebrar.

//obs: lembrando que o is tem que retornar um valor boolean, entao caso vc use um if na type guard e não coloque um else, ela vai poder retornar null e vai dar erro porque is tem que retornar true or false e não true or null, logo, tem que ter um else com return false.
//lembrar: se ta falando de is, a function retorna boolean
