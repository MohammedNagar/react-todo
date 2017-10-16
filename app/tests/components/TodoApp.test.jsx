var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var {Provider} = require('react-redux');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import {TodoApp} from 'TodoApp';
import TodoList from 'TodoList';
var store = require('configureStore').configure();

describe('TodoApp',() =>{
  it('Should exist',() =>{
    expect(TodoApp).toExist();
  });

  it('Should render TodoList',() => {

      var provider = TestUtils.renderIntoDocument(
        <Provider store = {store}>
           <TodoApp/>
        </Provider>
      );

      var todoApp = TestUtils.scryRenderedComponentsWithType(provider,TodoApp)[0];
      var todoList =  TestUtils.scryRenderedComponentsWithType(todoApp,TodoList);

      expect(todoList.length).toEqual(1);
  });
});
