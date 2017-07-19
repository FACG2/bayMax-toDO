# BayMax-toDO
BayMax toDO List website [here](https://facg2.github.io/bayMax-toDO/)



## User stories.

In the case of this project the client requires the following:

    * Enter tasks I need to do into a web page so that I don't forget them
    * View the tasks I have added in a list so that I can plan my day
    * Mark tasks as complete so that I can focus on the tasks I have left
    * Click on any part of a to-do to mark it as complete so that it's easier for me to check to-dos off
    * The to-dos to be large enough so that I don't hit the wrong one with my thumb


## Process of building our client's BayMax toDO List.

    1. Understanding requirments/features.

    2. Test First! [Test Driven Development approach].

![alt](https://image.ibb.co/dqDP5a/tddSteps.jpg)


>After Each failing test, part of the code is written||modified to pass it.
>And againg we repeat the process again till we cover the required features
>with proven "passing" tests.

## List of Tests.


* Check the ```addTodo``` function.

```javascript
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
```

* Check the ```deleteTodo``` function.

```javascript
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
```

* Check the ```markTodo``` function.

```javascript
test('markTodo function test', function(t) {
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

  t.end();
});
```

* Check the ```sortTodos``` function.

```javascript
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
```

    3. Building the ``logic.js`` file which contains Functions that manage a todoList, these functions are addTodo, deleteTodo, markTodo, and sortTodos.

    4. Building the ``dom.js`` file.

    5. Editing the ``HTML-index`` file and building the ``CSS-style`` file
    and linking the logic & dom Scripts.
