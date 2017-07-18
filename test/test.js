var test = require('tape');
var logic = require('../logic');
var todoList = [];
var newTodoElem = { description: 'make smoothie out of things that should really be cooked' };
var todoList1 = [{ description: 'make tea' }];
var newTodoElem1 = { description: 'make eggs' };
var todoList2 = [{ description: 'make tea' }, { description: 'make eggs' }];
var newTodoElem2 = { description: 'make salad' };
var todoList3 = [{ id:0,description: 'make tea',done: true}, { description: 'make eggs' }];
var newTodoElem3 = { description: 'make salad' };


test('addTodo function test', function(t) {
  var actual = addTodo(todoList, newTodoElem);
  var expected =  [
     { id: 0,
    description: make smoothie out of things that should really be cooked,
    done: false,  }
  ];
  t.equal(actual, expected, 'addTodo function test pass');

  var actual1 = addTodo(todoList1, newTodoElem1);
  var expected1 =  [
    { description: 'make tea',},
    { id: 0,
      description: 'make eggs',
      done: false, }
  ]
  t.equal(actual1, expected1, 'addTodo works for other values');

  var actual = addTodo(todoList, newTodoElem);
  var expected =  [
     { id: 0,
    description: make smoothie out of things that should really be cooked,
    done: false,  }
  ];
  t.equal(actual, expected, 'addTodo returns the same value when called with the same argument');

  var actual2 = addTodo(todoList2, newTodoElem2);
  var expected2 =  [
    { description: 'make tea',},
    { description: 'make eggs',},
    { id: 0,
      description: 'make salad',
      done: false, }
  ]
  t.equal(actual2, expected2, 'addTodo fworks for other values');

  var actual3 = addTodo(todoList3, newTodoElem3);
  var expected3 =  [
    { id: 0,
      description: 'make tea',
      done: true, },
    { description: 'make eggs',},
    { id: 1,
      description: 'make salad',
      done: false, }
  ]
  t.equal(actual3, expected3, 'addTodo fworks for other values');

  t.end();
});
