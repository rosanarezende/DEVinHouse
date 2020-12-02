// ------ Funcionamento da barra de navegação ------
const nav_link_todas = document.querySelector("#nav-link-todas");
const nav_link_novas = document.querySelector("#nav-link-novas");
const nav_link_finalizadas = document.querySelector("#nav-link-finalizadas");

nav_link_todas.addEventListener("click", () => {
  nav_link_finalizadas.classList.remove("active");
  nav_link_novas.classList.remove("active");
  nav_link_todas.classList.add("active");

  let todas = document.querySelectorAll(".nova-tarefa");
  if (todas.length != 0) {
    for (i = 0; i < todas.length; i++) {
      todas[i].style.display = "flex";
    }
  }
});

nav_link_novas.addEventListener("click", () => {
  nav_link_finalizadas.classList.remove("active");
  nav_link_todas.classList.remove("active");
  nav_link_novas.classList.add("active");

  let todas = document.querySelectorAll(".nova-tarefa");
  if (todas.length != 0) {
    for (i = 0; i < todas.length; i++) {
      todas[i].style.display = "flex";
      if (todas[i].className.includes("finalizada")) {
        todas[i].style.display = "none";
      }
    }
  }
});

nav_link_finalizadas.addEventListener("click", () => {
  nav_link_todas.classList.remove("active");
  nav_link_novas.classList.remove("active");
  nav_link_finalizadas.classList.add("active");

  let todas = document.querySelectorAll(".nova-tarefa");
  if (todas.length != 0) {
    for (i = 0; i < todas.length; i++) {
      todas[i].style.display = "flex";
      if (!todas[i].className.includes("finalizada")) {
        todas[i].style.display = "none";
      }
    }
  }
});
