var React= require('react');
var ReactDOM = require('react-dom');
var { BrowserRouter, Route } =require('react-router-dom');
var {Provider}  = require('react-redux');

var TodoApp = require('TodoApp');
var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('CurrentState: ',store.getState());
});

store.dispatch(actions.addTodo('Play a game...'));
store.dispatch(actions.setSearchText('game'));
store.dispatch(actions.toggleShowCompleted());
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
