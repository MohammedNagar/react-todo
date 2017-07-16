var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Todo = require('Todo');

describe('Todo',() =>{
  it('Should exist',() =>{
    expect(Todo).toExist();
  });

  it('Should call onToggle with id on click',() =>{
    var todoData = {
      id: 7,
      text: 'hope i will be better',
      completed: true
    };

    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);

    TestUtils.Simulate.click(todo.refs.todoDiv);
      expect(spy).toHaveBeenCalledWith(7);
  });
});
