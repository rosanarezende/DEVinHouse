let resultado = document.querySelector("#resultado");
let resultadoNoLocalStorage = localStorage.getItem("resultado");
if (resultadoNoLocalStorage) {
  resultado.innerHTML = resultadoNoLocalStorage;
}

function guardarResultadoNoLocalStorage() {
  return localStorage.setItem("resultado", resultado.innerHTML);
}

function deletar() {
  const botoesDeletar = document.querySelectorAll(".close");
  for (i = 0; i < botoesDeletar.length; i++) {
    botoesDeletar[i].onclick = function () {
      const item = this.parentElement;
      resultado.removeChild(item);
      guardarResultadoNoLocalStorage();
    };
  }
}

function finalizar() {
  const checks = document.querySelectorAll("input[type=checkbox]");
  for (i = 0; i < checks.length; i++) {
    checks[i].onclick = function () {
      const item = this.parentElement.parentElement;
      item.classList.toggle("finalizada");
      this.setAttribute("checked", "checked");
      guardarResultadoNoLocalStorage();
    };
  }
}

deletar();
finalizar();

// ------ Funcionamento das tarefas ------
function novaTarefa() {
  const botaoAdicionar = document.querySelector("#btn-add");
  botaoAdicionar.removeAttribute("data-dismiss");

  // cria checkbox
  const id = Math.random();

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.className = "check";
  checkbox.id = id;

  // cria label da tarefa
  const valueInputTarefa = document.querySelector("#input-tarefa").value;
  const texto = document.createTextNode(valueInputTarefa);
  const label = document.createElement("label");
  label.appendChild(texto);
  label.htmlFor = id;

  // cria div da tarefa com checkbox e label
  const div = document.createElement("div");
  div.setAttribute("style", "display: flex;");
  div.appendChild(checkbox);
  div.appendChild(label);
  div.className = "label-checkbox";

  // cria botão de deletar
  const button = document.createElement("button");
  const iconeFechar = document.createTextNode("\u00D7");
  button.className = "close";
  button.appendChild(iconeFechar);

  // cria div maior, que receberá a div anterior e botão de deletar
  const itemNovo = document.createElement("div");
  itemNovo.className = "nova-tarefa";
  itemNovo.appendChild(div);
  itemNovo.appendChild(button);

  // se o input não for preenchido, aparece mensagem de alerta
  const textoAlternativo = document.querySelector("#com-texto");
  if (valueInputTarefa === "") {
    textoAlternativo.setAttribute("style", "display: block; color: red");
  }
  // caso contrário, permite criar tarefa
  else {
    textoAlternativo.setAttribute("style", "display: none;");
    botaoAdicionar.setAttribute("data-dismiss", "modal");
    resultado.appendChild(itemNovo);
    document.querySelector("#input-tarefa").value = "";
  }

  deletar();
  finalizar();

  guardarResultadoNoLocalStorage();
}
