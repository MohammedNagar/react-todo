var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp',() =>{
  it('Should exist',() =>{
    expect(TodoApp).toExist();
  });

  it('Should add todo to the todos state on handleAddTodo',() => {
    var todoText = 'Eat fish.';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos:[]});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it('Should toggle completed value when handleToggle called', () =>{

    var todoData = {
      id: 11,
      text: 'Study React',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    }

    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({
      todos: [todoData]
    });

    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(true);
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });

  it('Should completedAt removed when toggole from true to false', () =>{

    var todoData = {
      id: 11,
      text: 'Study React',
      completed: true,
      createdAt: 0,
      completedAt: 777
    }

    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({
      todos: [todoData]
    });

    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completedAt).toNotExist();
  });
});
