let result = document.querySelector("#result");
let tasksArray = [];
let taskClicked;

const tasksInLocalStorage = JSON.parse(localStorage.getItem("tasks"));
if (tasksInLocalStorage) {
  tasksArray = tasksInLocalStorage;
  for (let task of tasksArray) {
    const newTaskElement = createTaskAtHTML(task);
    result.appendChild(newTaskElement);
  }
}

function addTasksAtLocalStorage() {
  return localStorage.setItem("tasks", JSON.stringify(tasksArray));
}

function setAttributes(elem) {
  for (let i = 1; i < arguments.length; i += 2) {
    elem.setAttribute(arguments[i], arguments[i + 1]);
  }
}

function createTaskAtHTML(task) {
  // ========== criar checkbox ==========
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "check";
  checkbox.id = task?.id;
  if (task.checked) {
    checkbox.setAttribute("checked", "checked");
  }

  checkbox.addEventListener("click", () => {
    task.checked = !task.checked;
    if (task.checked) {
      checkbox.setAttribute("checked", "checked");
    } else {
      checkbox.removeAttribute("checked");
    }
    addTasksAtLocalStorage();
  });

  // ========== cria label da tarefa ==========
  const label = document.createElement("label");
  const text = document.createTextNode(task?.text);
  label.htmlFor = task?.id;
  label.appendChild(text);

  // ========== colocar checkbox e label em uma div ==========
  const div = document.createElement("div");
  div.appendChild(checkbox);
  div.appendChild(label);
  div.className = "label-checkbox";
  div.setAttribute("style", "display: flex;");

  // ========== cria botão de deletar ==========
  const button = document.createElement("button");
  const closeIcon = document.createTextNode("\u00D7");
  button.appendChild(closeIcon);
  button.className = "close2";
  button.id = task?.id;
  setAttributes(button, "data-tt", "tooltip", "title", "Deletar tarefa!");

  button.addEventListener("click", () => {
    setAttributes(button, "data-toggle", "modal", "data-target", "#modal2");
    taskClicked = button.parentElement.parentElement;
  });

  // ========== cria botão de editar ==========
  const button2 = document.createElement("button");
  const editIcon = document.createTextNode("\u270f");
  button2.appendChild(editIcon);
  button2.className = "edit";
  button2.id = task?.id;
  setAttributes(button2, "data-tt", "tooltip", "title", "Editar tarefa!");

  button2.addEventListener("click", () => {
    const newInputTask = document.querySelector("#new-input-text");
    for (let task of tasksArray) {
      if (task.id === Number(button2.id)) {
        newInputTask.value = task.text;
      }
    }
    taskClicked = button2.parentElement.parentElement;
    setAttributes(button2, "data-toggle", "modal", "data-target", "#modal3");
  });

  // ========== colocar botões de editar e deletar uma div ==========
  const div2 = document.createElement("div");
  div2.appendChild(button2);
  div2.appendChild(button);
  div2.className = "edit-delete";
  div2.setAttribute("style", "display: flex;");

  // ========== cria div maior, que receberá as divs anteriores ==========
  const newTaskElement = document.createElement("div");
  newTaskElement.appendChild(div);
  newTaskElement.appendChild(div2);
  newTaskElement.className = "new-task";
  newTaskElement.id = task?.id;

  return newTaskElement;
}

function checkInput(idInput, idAlternativeText, idButtonConfirm) {
  const valueInput = document.querySelector(`#${idInput}`).value;
  const alternativeText = document.querySelector(`#${idAlternativeText}`);
  const btnConfirm = document.querySelector(`#${idButtonConfirm}`);
  btnConfirm.removeAttribute("data-dismiss");
  if (valueInput === "") {
    alternativeText.setAttribute("style", "display: block; color: red");
  } else {
    document.querySelector(`#${idInput}`).value = "";
    alternativeText.setAttribute("style", "display: none;");
    btnConfirm.setAttribute("data-dismiss", "modal");
  }
  return valueInput;
}

function clickToCreateTask() {
  const inputValue = checkInput("input-tarefa", "com-texto", "btn-add");
  if (inputValue) {
    let task = {
      id: new Date().getTime(),
      checked: false,
      text: inputValue,
    };
    tasksArray.push(task);
    const newTaskElement = createTaskAtHTML(task);
    result.appendChild(newTaskElement);
    addTasksAtLocalStorage();
  }
}

function confirmEdit() {
  const inputValue = checkInput("new-input-text", "com-texto2", "btn-change");
  if (inputValue) {
    for (let task of tasksArray) {
      if (task.id === Number(taskClicked.id)) {
        task.text = inputValue;
        const newTaskElement = createTaskAtHTML(task);
        taskClicked.replaceWith(newTaskElement);
      }
    }
    addTasksAtLocalStorage();
  }
}

function confirmDelete() {
  const btnDelete = document.querySelector("#btn-delete");
  btnDelete.setAttribute("data-dismiss", "modal");
  tasksArray = tasksArray.filter((task) => task.id !== Number(taskClicked.id));
  result.removeChild(taskClicked);
  addTasksAtLocalStorage();
}
