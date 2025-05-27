// Estado dos elementos

// menu ativo:
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em button

// menu inativo:
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button

const nav = document.querySelector("#nav");
const buttonNav = document.querySelector("#btn-mobile");

buttonNav?.addEventListener("click", handleClickMenu);

function handleClickMenu(e: Event) {
  const elemento = e.currentTarget;
  if (elemento instanceof HTMLButtonElement) {
    nav?.classList.toggle("active");

    if (nav?.classList instanceof DOMTokenList) {
      if (nav.classList.contains("active")) {
        elemento.ariaExpanded = "true";
        elemento.ariaLabel = "Fechar Menu";
      } else {
        elemento.ariaExpanded = "false";
        elemento.ariaLabel = "Abrir Menu";
      }
    }
  }
}

// solucao prof:
const btnMobile = document.getElementById("btn-mobile");

btnMobile?.addEventListener("pointerdown", toggleMenu);

function toggleMenu(event: PointerEvent) {
  const button = event.currentTarget;
  const nav = document.getElementById("nav");
  if (button instanceof HTMLElement && nav) {
    const active = nav.classList.contains("active");
    if (active) {
      nav.classList.remove("active");
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", "Abrir Menu");
    } else {
      nav.classList.add("active");
      button.setAttribute("aria-expanded", "true");
      button.setAttribute("aria-label", "Fechar Menu");
    }
  }
}
