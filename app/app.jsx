var React= require('react');
var ReactDOM = require('react-dom');
var { BrowserRouter, Route } =require('react-router-dom');
var {Provider}  = require('react-redux');

var TodoApp = require('TodoApp');
var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

// import './../playground/firebase/index';

// store.subscribe(() => {
//   var state = store.getState();
//   console.log('CurrentState: ',state);
//   TodoAPI.setTodos(state.todos);
// });

// var initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));

store.dispatch(actions.startAddTodos());

//Load foundation
$(document).foundation();

//app style

require('style-loader!css-loader!sass-loader!applicationStyles');


ReactDOM.render(
      <Provider store = {store}>
         <TodoApp/>
      </Provider>,
      document.getElementById('app')
);
