// 1 - Crie uma interface UserData para o formulário abaixo
// 2 - Crie uma variável global UserData no window, ela será um objeto qualquer
// 3 - Adicione um evento de keyup ao formulário
// 4 - Quando o evento ocorrer adicione a {[id]: value} ao UserData
// 5 - Salve UserData no localStorage
// 6 - Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData
// 7 - Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em window.UserData

interface UserData {
  nome?: string;
  email?: string;
  cpf?: string;
}

window.UserData = {};

interface Window {
  UserData: UserData;
}

const form = document.querySelector("#form") as HTMLFormElement;

form?.addEventListener("keyup", handleInput);

function handleInput({ target }: KeyboardEvent) {
  if (target instanceof HTMLInputElement) {
    window.UserData[target.id] = target.value;
    console.dir(target.value);
  }
}

//solução criada para o exercicio:
// window.userData = {
//   nome: "",
//   email: "",
//   cpf: 0,
// };

// interface UserData {
//   nome: string;
//   email: string;
//   cpf: number;
// }

// interface Window {
//   userData: UserData;
// }

// const inputNome = document.querySelector("#nome");
// const inputEmail = document.querySelector("#email");
// const inputCpf = document.querySelector("#cpf");
// const formSubmit = document.querySelector("form");

// inputNome?.addEventListener("keyup", takeValueInput);
// inputEmail?.addEventListener("keyup", takeValueInput);
// inputCpf?.addEventListener("keyup", takeValueInput);
// formSubmit?.addEventListener("submit", submitSave);

// function takeValueInput() {
//   if (inputNome instanceof HTMLInputElement) {
//     window.userData.nome = inputNome.value;
//   }
//   if (inputEmail instanceof HTMLInputElement) {
//     window.userData.email = inputEmail.value;
//   }
//   if (inputCpf instanceof HTMLInputElement) {
//     window.userData.cpf = Number(inputCpf.value);
//   }
// }

// function submitSave(e: Event) {
//   console.log("teste");
//   e.preventDefault();

//   window.localStorage.setItem("nome", window.userData.nome);
//   window.localStorage.setItem("email", window.userData.email);
//   window.localStorage.setItem("cpf", window.userData.cpf.toString());
// }
// window.onload = () => {
//   if (inputNome && inputNome instanceof HTMLInputElement) {
//     const nome = window.localStorage.getItem("nome");
//     if (typeof nome === "string") {
//       inputNome.value = nome;
//     }
//   }
//   if (inputEmail && inputEmail instanceof HTMLInputElement) {
//     const email = window.localStorage.getItem("email");
//     if (typeof email === "string") {
//       inputEmail.value = email;
//     }
//   }
//   if (inputCpf && inputCpf instanceof HTMLInputElement) {
//     const cpf = window.localStorage.getItem("cpf");
//     if (typeof cpf === "string") {
//       inputCpf.value = cpf;
//     }
//   }
// };

// solução professor:
// interface Window {
//   UserData: any;
// }

// window.UserData = {};

// function validJSON(str: string) {
//   try {
//     JSON.parse(str);
//   } catch (e) {
//     return false;
//   }
//   return true;
// }

// interface UserData {
//   nome?: string;
//   email?: string;
//   cpf?: string;
// }

// function isUserData(obj: unknown): obj is UserData {
//   if (
//     obj &&
//     typeof obj === 'object' &&
//     ('nome' in obj || 'email' in obj || 'cpf' in obj)
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function loadLocalStorage() {
//   const localUserData = localStorage.getItem('UserData');
//   if (localUserData && validJSON(localUserData)) {
//     const UserData = JSON.parse(localUserData);
//     if (isUserData(UserData)) {
//       Object.entries(UserData).forEach(([key, value]) => {
//         const input = document.getElementById(key);
//         if (input instanceof HTMLInputElement) {
//           input.value = value;
//           window.UserData[key] = value;
//         }
//       });
//     }
//   }
// }

// loadLocalStorage();

// function handleInput({ target }: KeyboardEvent) {
//   if (target instanceof HTMLInputElement) {
//     window.UserData[target.id] = target.value;
//     localStorage.setItem('UserData', JSON.stringify(window.UserData));
//   }
// }

// const form = document.querySelector<HTMLElement>('#form');
// form?.addEventListener('keyup', handleInput);
