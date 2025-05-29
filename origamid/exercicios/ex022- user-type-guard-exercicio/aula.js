"use strict";
// 1 - Faça um fetch da API: https://api.origamid.dev/json/cursos.json
// 2 - Defina a interface da API
// 3 - Crie um Type Guard, que garanta que a API possui nome, horas e tags
// 4 - Use Type Guards para garantir a Type Safety do código
// 5 - Preencha os dados da API na tela.
//tenho que ter uma f que mostre os itens da api na tela (monstraDadosApi). Para acessar as prorpiedades da dos itens da api e ter o autocomplete e ter certeza que estou falando com aquela api em epecifico preciso de uma interface (Cursos) e colocar essa interface em uma verificação/type guard para verificar se estou falando com aquela api mesmo, porque o TS não executa JS então, tenho que criar um predicate (typeGuardCursos), que retorne true e poder seguir com minha verificação e mostrar os itens na tela
async function cursosFetch(api) {
    const r = await fetch(api);
    const json = await r.json();
    monstraDadosApi(json);
}
cursosFetch("https://api.origamid.dev/json/cursos.json");
function typeGuardCursos(data) {
    if (data && typeof data === "object" && Array.isArray(data)) {
        //obs: data existe? && data é um objeto? && data é um array?; sim? então loop(every) e verifica se cada elemento inclui as devidas propriedades
        data.every((element) => {
            "nome" in element &&
                "horas" in element &&
                "aulas" in element &&
                "gratuito" in element &&
                "tags" in element &&
                "idAulas" in element &&
                "nivel" in element;
        });
        return true;
    }
    else {
        return false;
    }
}
function monstraDadosApi(dataApi) {
    if (typeGuardCursos(dataApi)) {
        dataApi.forEach((element) => {
            document.body.innerHTML += `
    <div>
        <h2>Nome: ${element.nome}</h2>
        <p>Horas: ${element.horas}</p>
        <p>Aulas: ${element.aulas}</p>
        <p>Tem que pagar? ${element.gratuito ? "sim" : "não"}</p>
        <p>Nível: ${element.nivel}</p>
    </div>
  `;
        });
    }
}
