let result = document.querySelector("#result");
let tasksArray = [];

function addTasksAtLocalStorage() {
  return localStorage.setItem("tasks", JSON.stringify(tasksArray)); 
}

function getTasksAtLocalStorage(){
  const tasksInLocalStorage = JSON.parse(localStorage.getItem("tasks"));
  if(tasksInLocalStorage) {
    tasksArray = tasksInLocalStorage
    for(let task of tasksArray) {
      createTaskAtHTML(task)
    }
  }
}
getTasksAtLocalStorage()

function setAttributes(elem) {
  for (let i = 1; i < arguments.length; i += 2) {
    elem.setAttribute(arguments[i], arguments[i + 1]);
  }
}

function createTaskAtHTML(task){
  // criar checkbox
  const checkbox = document.createElement("input");
  if(task.checked) {
    setAttributes(checkbox, "type", "checkbox", "checked", "checked")
  } else {
    checkbox.setAttribute("type", "checkbox");
  }
  checkbox.className = "check";
  checkbox.id = task?.id;

  // cria label da tarefa
  const text = document.createTextNode(task?.text);
  const label = document.createElement("label");
  label.appendChild(text);
  label.htmlFor = task?.id;

  // colocar checkbox e label em uma div
  const div = document.createElement("div");
  div.setAttribute("style", "display: flex;");
  div.appendChild(checkbox);
  div.appendChild(label);
  div.className = "label-checkbox";

  // cria botão de deletar
  const button = document.createElement("button");
  const closeIcon = document.createTextNode("\u00D7");
  button.className = "close";
  button.id = "deletar-tarefa";
  button.appendChild(closeIcon);
  setAttributes(button, "data-tt", "tooltip", "title", "Deletar tarefa!");

  // cria div maior, que receberá a div anterior e botão de deletar
  const newTaskElement = document.createElement("div");
  newTaskElement.className = "nova-tarefa";
  newTaskElement.appendChild(div);
  newTaskElement.appendChild(button);

  result.appendChild(newTaskElement)
}

function clickToCreateTask(){
    const btnAdd = document.querySelector("#btn-add");
    btnAdd.removeAttribute("data-dismiss");
    
    const valueInputTask = document.querySelector("#input-tarefa").value;
    const textoAlternativo = document.querySelector("#com-texto");
    if (valueInputTask === "") {
      textoAlternativo.setAttribute("style", "display: block; color: red");
    }
    else {
      textoAlternativo.setAttribute("style", "display: none;");
      btnAdd.setAttribute("data-dismiss", "modal");
      task = {
        id: new Date().getTime(), // ou Math.random();
        checked: false,
        text: valueInputTask
      }
      tasksArray.push(task)
      addTasksAtLocalStorage()
      createTaskAtHTML(task)
      document.querySelector("#input-tarefa").value = "";
    }
}

function clickToFinishTask() {
  const checks = document.querySelectorAll("input[type=checkbox]");
  for (i = 0; i < checks.length; i++) {
    checks[i].addEventListener('click', (event) => {
      for(let task of tasksArray) {
        if(task.id === Number(event.target.id)) {
          task.checked = !task.checked
        }
        if(task.checked) {
          event.target.setAttribute("checked", "checked");
        } else {
          event.target.removeAttribute("checked");
        }
      }
      addTasksAtLocalStorage();
    });
  }
}
clickToFinishTask();

let tempIdToDelete;
let tempDivToDelete;
function clickToDelete() {
  const botoesDeletar = document.querySelectorAll("#deletar-tarefa");
  for (i = 0; i < botoesDeletar.length; i++) {
    botoesDeletar[i].removeAttribute("data-dismiss");
    botoesDeletar[i].addEventListener('click', (event) => {
      setAttributes(event.target, "data-toggle", "modal", "data-target", "#modal2")
      tempIdToDelete = event.target.parentElement.children[0].children[0].id
      tempDivToDelete = event.target.parentElement
    })
  }
}
clickToDelete();

function confirmDelete() {
  const btnDelete = document.querySelector("#btn-delete");
  btnDelete.setAttribute("data-dismiss", "modal");
  tasksArray = tasksArray.filter(task => task.id !== Number(tempIdToDelete))
  result.removeChild(tempDivToDelete);
  addTasksAtLocalStorage();
}
