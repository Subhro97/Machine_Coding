// Todo blueprint
class ToDo {
  constructor(id, value) {
    this.id = id;
    this.value = value;
  }
}

const $ELMS = {
  inputElm: document.querySelector(".input-cont-wrap input"),
  formElm: document.querySelector("form"),
  errorElm: document.querySelector(".error-txt"),
  clearInput: document.querySelector(".cross"),
  todolistCont: document.querySelector(".todo-list"),
};

let todoArray = []; // Stores all the to do's

function addToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem("todos"));
}

// Add to do
$ELMS.formElm.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = e.target[0].value;
  const valueLength = e.target[0].value.trim().length;

  if (valueLength === 0) {
    $ELMS.errorElm.textContent = "Please enter Todo!";
    $ELMS.errorElm.style.display = "block";
    return;
  }

  if (valueLength < 10) {
    $ELMS.errorElm.textContent = "Minimum text should be 10 letters";
    $ELMS.errorElm.style.display = "block";
    return;
  }

  $ELMS.errorElm.style.display = "none";

  let newTodo = new ToDo(Math.random() * 1000, value);
  todoArray.push(newTodo);

  addToLocalStorage("todos", todoArray);

  appendTodoHandler(newTodo);
  $ELMS.inputElm.value = "";

  console.log(todoArray);
});

// clear to do input
$ELMS.clearInput.addEventListener("click", (e) => {
  $ELMS.inputElm.value = "";
});

// Append's the to-do's
function appendTodoHandler(todo) {
  if (todo) {
    $ELMS.todolistCont.innerText === "No Todo's added"
      ? ($ELMS.todolistCont.innerText = "")
      : "";

    console.log($ELMS.todolistCont);

    createTodo(todo);
  } else {
    $ELMS.todolistCont.innerHTML = "";
    const currentTodos = getFromLocalStorage("todos");

    if (!currentTodos || currentTodos.length === 0) {
      $ELMS.todolistCont.textContent = "No Todo's added";
      return;
    }

    currentTodos.forEach((todo, idx) => {
      createTodo(todo);
    });
  }
}

// Remove To do Item
$ELMS.todolistCont.addEventListener("click", (e) => {
  if (e && e.target && e.target.id && e.target.nodeName === "SPAN") {
    todoArray = todoArray.filter((todoItem, idx) => {
      return todoItem.id != e.target.id;
    });

    addToLocalStorage("todos", todoArray);
    appendTodoHandler();
  }
});

function revertTodoElm(todoItem, inputElm) {
  const updatedText = inputElm.value;

  const id = todoItem.querySelector(".cross").id;

  todoArray.forEach((todo, idx) => {
    if (todo.id == id) {
      todo.value = updatedText;
    }
  });

  addToLocalStorage("todos", todoArray);

  const newTodoTxt = document.createElement("p");
  newTodoTxt.textContent = updatedText;

  todoItem.replaceChild(newTodoTxt, inputElm);
}

// Edit To do Item
$ELMS.todolistCont.addEventListener("dblclick", (e) => {
  if (e.target.classList.contains("todo-item")) {
    const todoItem = e.target;

    const textElm = todoItem.querySelector("p");

    const todoText = textElm.innerText;

    const inputElm = document.createElement("input");

    inputElm.value = todoText;
    inputElm.type = "text";

    todoItem.replaceChild(inputElm, textElm);

    inputElm.focus();

    // inputElm.addEventListener("blur", (e) => revertTodoElm(todoItem, inputElm));
    inputElm.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        revertTodoElm(todoItem, inputElm);
      }
    });
  }
});

//Create Todo
function createTodo(todo) {
  const todoItem = document.createElement("div");
  const todoItemTxt = document.createElement("p");
  const todoItemCross = document.createElement("span");

  todoItem.classList.add("todo-item");
  todoItemCross.classList.add("cross");
  todoItemCross.setAttribute("id", todo.id);

  todoItemTxt.textContent = todo.value;

  todoItem.append(todoItemTxt, todoItemCross);

  $ELMS.todolistCont.append(todoItem);
}

window.addEventListener("DOMContentLoaded", () => {
  todoArray = getFromLocalStorage("todos");
  appendTodoHandler();
});
