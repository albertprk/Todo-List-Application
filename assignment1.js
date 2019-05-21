function clearForm() {
  todo.value = "";
}

function addTodo() {
  var currentList = document.createElement("li");
  var input = document.getElementById("todo").value;
  var newTodo = document.createTextNode(input);
  currentList.appendChild(newTodo);
  if (input === '') {
    alert("Entry cannot be empty");
  } else {
    document.getElementById("todolist").appendChild(currentList);
  }
  document.getElementById("todo").value = "";
}

function deleteAll() {
  document.getElementById("todolist").innerHTML = "";
}
