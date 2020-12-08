const list = document.querySelector("#list");
const myAlert = document.querySelector("#my-alert");
let listArray = [];

let listInLocalStorage = JSON.parse(localStorage.getItem("lista"));

function criarItemHTML(text) {
  const item = `<div class="card-body">${text}</div>`;
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = item;
  list.appendChild(div);
}

function validaCampo() {
  const conteudo = document.createTextNode("Preencha o campo para prosseguir!");
  myAlert.appendChild(conteudo);
  myAlert.style.display = "block";
  setTimeout(() => {
    myAlert.style.display = "none";
    myAlert.removeChild(conteudo);
  }, 3000);
}

function adicionaItem(event) {
  event.preventDefault();

  let inputText = document.querySelector("#inputText").value;
  if (inputText == "") {
    validaCampo();
  } else {
    listArray.push({
      id: new Date().getTime(),
      text: inputText,
    });
    criarItemHTML(inputText);
    document.querySelector("#inputText").value = "";
  }
}

function salvarLista() {
  localStorage.setItem("lista", JSON.stringify(listArray));
}

function carregarLista() {
  if (listInLocalStorage && listArray != listInLocalStorage) {
    // listArray = listInLocalStorage;
    listArray.forEach((element) => criarItemHTML(element.text));
  }
}
