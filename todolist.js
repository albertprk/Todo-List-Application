window.onload = function() {
  createList();
};

var array = ["Eat", "Sleep"];
var length = array.length;

// var JSONItems = [];
// $.getJSON("data.json", function(data){
//  JSONItems = JSon.parse(data);
//  console.log(JSONItems);
//}

function clearForm() {
  textform.value = "";
}

function addTodo() {
  var currentList = document.createElement("li");
  var input = document.getElementById("textform").value;
  var newTodo = document.createTextNode(input);
  array.push(input);
  currentList.appendChild(newTodo);
  if (input === '') {
    alert("Entry cannot be empty");
  } else {
    document.getElementById("todolist").appendChild(currentList);
  }
  document.getElementById("textform").value = "";
}

function deleteAll() {
  document.getElementById("todolist").innerHTML = "";
}

function createList() {
  for (i = 0; i < length; i++) {
    var currentList = document.createElement("li");
    var input = array[i];
    var newTodo = document.createTextNode(input);
    currentList.appendChild(newTodo);
    document.getElementById("todolist").appendChild(currentList);
  }
}
