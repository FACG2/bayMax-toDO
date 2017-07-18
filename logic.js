// Part 1. Fill in any missing parts of the todoFunction object!
// you can access these on todo.todoFunctions
// For part one we expect you to use tdd

var todoFunctions = {
  // todoFunctions.generateId() will give you a unique id
  // You do not need to understand the implementation of this function.
  generateId: (function() {
    var idCounter = 0;

    function incrementCounter() {
      return (idCounter += 1);
    }

    return incrementCounter;
  })(),
  addTodo: function(todos, newTodo) {
    return todos.concat({id : todoFunctions.generateId() , description: newTodo.description , done: false} )
  },
  deleteTodo: function(todos, idToDelete) {
    return todos.filter(function(toDo){
      return toDo.id != idToDelete;
});
  },
  markTodo: function(todos, idToMark) {
    return todos.map(function(toDo) {
      var newTodo = Object.assign({}, toDo);
      if (newTodo.id == idToMark) {
        newTodo.done = newTodo.done ? false : true ;
      }
      return newTodo;
    })
    // hint: array.map
  },
  sortTodos: function(todos, fn) {
      return todos.slice(0).sort(fn);
    // hint: array.slice, array.sort

  },
};


// Why is this if statement necessary?
// The answer has something to do with needing to run code both in the browser and in Node.js
// See this article for more details:
// http://www.matteoagosti.com/blog/2013/02/24/writing-javascript-modules-for-both-browser-and-node/
if (typeof module !== 'undefined') {
  module.exports = todoFunctions;
}
