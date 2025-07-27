const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos"; // Define a constant for the key used in local storage

let toDos = []; // Initialize an array to store todos

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // Save todos to local storage
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // Filter out the todo that matches the ID of the clicked list item
  saveTodos(); // Save the updated todos to local storage
  li.remove(); // Remove the list item when the button is clicked
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id; // Set the ID of the list item to the todo's ID
  const span = document.createElement("span");
  span.innerText = newToDo.text; // Set the text of the span to the todo text
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = ""; // Clear the input field after submission
  const newToDoOBJ = {
    text: newToDo,
    id: Date.now(), // Use current timestamp as a unique ID
  }
  toDos.push(newToDoOBJ); // Assuming toDos is an array defined elsewhere
  paintToDo(newToDoOBJ);
  saveTodos(); // Save the updated todos to local storage
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item) {
  console.log("This is a test", item);
} 

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
  const parsesTodos = JSON.parse(savedTodos);
  toDos = parsesTodos; // Load saved todos into the toDos array
  parsesTodos.forEach(paintToDo); // Repaint saved todos on page load
}

function sexyFilter() {

}
[1, 2, 3, 4 ]. filter(sexyFilter);