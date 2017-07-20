// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  const container = document.getElementById('todo-container');
  const addTodoForm = document.getElementById('add-todo');
  var editTodoForm = document.getElementById('edit-todo');
  var temp=1;
  var state = []; // this is our initial todoList
  var se = JSON.parse(sessionStorage.getItem("mySe1"));
  if (se != null) {
    state = se;
    console.log(se);
  }
  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement('li');
    // you will need to use addEventListener
    todo.done ? todoNode.classList.add("marked") : todoNode.classList.remove("marked");

    // add span holding description
    todoNode.innerHTML = "<span>"+todo.description+"</span>";
    // this adds the delete button
    var deleteButtonNode = document.createElement('button');
    deleteButtonNode.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
    deleteButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(deleteButtonNode);

    // edit
    todoNode.firstElementChild.addEventListener('click', function(event) {
      todoNode.innerHTML = '<form id="edit-todo"><input onClick="this.setSelectionRange(0, this.value.length)" type="text" name="newdescription" value="'+todo.description+'" required><button id="submit" type="submit" name=""><i class="fa fa-location-arrow"></i></button></form>';
      editTodoForm = document.getElementById('edit-todo');
      temp = todo.id;
      editfun();
    });
    // add markTodo button
    todoNode.addEventListener('dblclick', function(event) {
      var newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
    });


    // add classes for css

    return todoNode;
  };
  //Sorting things >> lets gooo

  document.getElementById("ascending").addEventListener('click', function() {
    var fn = function(a, b) {
      return a.id - b.id
    };
    sortMe(fn);
  });
  document.getElementById("descending").addEventListener('click', function() {
    var fn = function(a, b) {
      return b.id - a.id
    };
    sortMe(fn);
  });

  function sortMe(fn) {
    var newState = todoFunctions.sortTodos(state, fn);
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
      var newState = todoFunctions.addTodo(state, {
        description: description.firstElementChild.value
      });
      description.firstElementChild.value = ""; // reset the input field after submitting
      update(newState);
    });
  }

  // edit form
;
  function editfun(){

    editTodoForm.addEventListener('submit', (event) => {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?
      event.preventDefault();

      var description = event.target;
      //document.querySelectorAll('[name="description"]')[0];
      // hint: todoFunctions.addTodo
      var newState = state.map(function(toDo) {
        var newTodo = Object.assign({}, toDo);
console.log(temp);
        if (newTodo.id == temp) {
          console.log(newTodo.id);
          newTodo.description = description.firstElementChild.value;
          console.log(newTodo.description);
        }
        return newTodo;
      });

      update(newState);
    });
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
    sessionStorage.setItem('mySe1', JSON.stringify(state));

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
