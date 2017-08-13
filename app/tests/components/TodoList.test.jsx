var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var {Provider} = require('react-redux');
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo,{Todo} from 'Todo';
import {configure} from 'configureStore';
describe('TodoList',()=> {
  it('Should exist',() =>{
    expect(TodoList).toExist();
  });

  it('Should render one Todo component for each todo item',() => {

    var todos = [
      {
        id:1,
        text:'Pray',
        completed: false,
        completedAt: undefined,
        createdAt:500
      },
      {
        id:2,
        text:'Read',
        completed: false,
        completedAt: undefined,
        createdAt:501
      }
    ];

    var store = configure({
      todos
    });
    var provider = TestUtils.renderIntoDocument(
      <Provider store ={store}>
         <ConnectedTodoList/>
      </Provider>
    );
    var todoList = TestUtils.scryRenderedComponentsWithType(provider,ConnectedTodoList)[0];
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList,ConnectedTodo);

    expect(todosComponents.length).toBe(todos.length);
  });

  it('Should render empty message if no todos',() => {

    var todos = [];

    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    expect(todoList.refs.emptyPhara).toExist();
  });
});
