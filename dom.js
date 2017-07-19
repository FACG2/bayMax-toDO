// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  const container = document.getElementById('todo-container');
  const addTodoForm = document.getElementById('add-todo');
  var state = []; // this is our initial todoList
  var se = JSON.parse(localStorage.getItem("mySe1"));
  if (se != null) {
    state = se;
    console.log(se);
  }
  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement('li');
    // you will need to use addEventListener
    todo.done ? todoNode.classList.add("marked"): todoNode.classList.remove("marked");

    // add span holding description
      todoNode.innerHTML = todo.description;
    // this adds the delete button
    var deleteButtonNode = document.createElement('button');
    deleteButtonNode.textContent = "Remove";
    deleteButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(deleteButtonNode);

    // add markTodo button
      var markButtonNode = document.createElement('button');
      todoNode.addEventListener('click', function(event) {
      var newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
      console.log(todo.done);
    });
    todoNode.appendChild(markButtonNode);
    // add classes for css

    return todoNode;
  };
//Sorting things >> lets gooo
/*
function ascendingFun() {
  fn = function(a, b){return a.id - b.id};
  sortMe(fn);
}
function descendingFun() {
  fn = function(a, b){return b.id - a.id};
  sortMe(fn);
}
function sortMe(fn) {
  var newState = todoFunctions.sortTodos(state, fn);
      update(newState);
}
*/

document.getElementById("ascending").addEventListener('click',function() {
  var fn = function(a, b){return a.id - b.id};
  sortMe(fn);
});
document.getElementById("descending").addEventListener('click',function() {
  var  fn = function(a, b){return b.id - a.id};
  sortMe(fn);
});
function sortMe(fn) {
  var newState = todoFunctions.sortTodos(state, fn);
  console.log(newState);
      update(newState);
}

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', (event) => {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?
       event.preventDefault();

      var description = event.target;
            //document.querySelectorAll('[name="description"]')[0];
      // hint: todoFunctions.addTodo
       var newState = todoFunctions.addTodo(state, {description: description.firstElementChild.value});
       description.firstElementChild.value = ""; // reset the input field after submitting
     update(newState);
    });
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
    localStorage.setItem('mySe1', JSON.stringify(state));

  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement('ul');

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
