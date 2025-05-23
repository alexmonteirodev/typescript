"use strict";
// - Arrays
// Uma array é definida com o tipo de dado(s) que ela possui, seguida por [];
const numeros = [1, 2, 3, 4, 5]; //const numeros: number[]
function verNumeros(arr) {
    console.log(arr); //ao acessar arr. já aparece o autocomplete com os métodos de Array
}
//exemplo 2:
const valores = [1, 2, "produto", 3, 4, "taxas", 5]; //const valores: (string | number)[]
function filtroDeNumeros(arr) {
    return arr.filter((item) => typeof item === "number");
}
console.log(filtroDeNumeros(valores)); //[1, 2, 3, 4, 5]
// - Sintaxe Alternativa
// Existe uma sintaxe alternativa, onde usamos Array<type>. Sendo type o tipo de dado dentro da array.
const ordem = [10, 30, 40, 5, 3, 30];
function maiorQue10(data) {
    return data.filter((n) => n > 10);
}
//--------- Exercício
// Defina a interface da API: https://api.origamid.dev/json/cursos.json e mostre os dados na tela.
// Existem apenas dois níveis de cursos, Iniciante (iniciante) e Avançado (avancado). Se for para iniciante pinte o título de azul, para avançado pinte de vermelho.
async function fetchCursos(http) {
    const response = await fetch(http);
    const json = await response.json();
    console.log(json);
    monstraNaTela(json);
    mostra(json);
}
fetchCursos("https://api.origamid.dev/json/cursos.json");
function monstraNaTela(json) {
    json.map((object) => {
        const h2 = document.createElement("h2");
        h2.innerHTML = object.nome;
        document.body.appendChild(h2);
        object.nivel === "iniciante"
            ? (h2.style.color = "blue")
            : (h2.style.color = "red");
    });
}
//outra forma (melhor):
function mostra(json) {
    json.forEach((object) => {
        let color;
        object.nivel === "iniciante" ? (color = "blue") : (color = "red");
        document.body.innerHTML += `
        <div>
            <h1 style='color:${color}'>${object.nome}</h1>
            <p>${object.horas}</p>
        </div>
        `;
    });
}
