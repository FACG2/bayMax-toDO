var test = require('tape');
var todoFunctions = require('../logic');
var todoList = [];
var todoList2 = [
  {
    id: 1 ,
    description : "first one",
    done : true
  },
  {
    id: 2 ,
    description : "second one",
    done : false
  },
  {
    id: 4 ,
    description : "4th one",
    done : false
  },
  {
    id: 3 ,
    description : "3rd one",
    done : true
  }
];
// Add toDo test
test('addTodo function test', function(t) {
  var actual = todoFunctions.addTodo(todoList, { description: 'make smoothie out of things that should really be cooked' });
  var expected =  [
     { id: 1,
    description: "make smoothie out of things that should really be cooked",
    done: false  }
  ];
  t.deepEqual(actual, expected, 'addTodo function test pass');
  t.end();
});

// Delete toDo test
test('deleteTodo test', function(t) {
  var actual = todoFunctions.deleteTodo(todoList2, 1);
  var expected =  [
    {
      id: 2 ,
      description : "second one",
      done : false
    },
    {
      id: 4 ,
      description : "4th one",
      done : false
    },
    {
      id: 3 ,
      description : "3rd one",
      done : true
    }
  ];
  t.deepEqual(actual, expected, 'addTodo function test pass');
  t.end();
});
// Mark toDo test
test('addTodo function test', function(t) {
  var actual = todoFunctions.markTodo(todoList2, 1);
  var expected =  [
    {
      id: 1 ,
      description : "first one",
      done : false
    },
    {
      id: 2 ,
      description : "second one",
      done : false
    },
    {
      id: 4 ,
      description : "4th one",
      done : false
    },
    {
      id: 3 ,
      description : "3rd one",
      done : true
    }
  ];
  t.deepEqual(actual, expected, 'markTodo function test pass');


  actual = todoFunctions.markTodo(todoList2, 4);
  expected =  [
    {
      id: 1 ,
      description : "first one",
      done : true
    },
    {
      id: 2 ,
      description : "second one",
      done : false
    },
    {
      id: 4 ,
      description : "4th one",
      done : true
    },
    {
      id: 3 ,
      description : "3rd one",
      done : true
    }
  ];
  t.deepEqual(actual, expected, 'markTodo function pure testing pass');

  t.end();
});
//Sort toDo test
test('Sort function test', function(t) {
  var actual = todoFunctions.sortTodos(todoList2);
  var expected =  [
    {
      id: 1 ,
      description : "first one",
      done : true
    },
    {
      id: 2 ,
      description : "second one",
      done : false
    },
    {
      id: 3 ,
      description : "3rd one",
      done : true
    },
    {
      id: 4 ,
      description : "4th one",
      done : false
    }
  ];
  t.deepEqual(actual, expected, 'addTodo function test pass');
  t.end();
});
