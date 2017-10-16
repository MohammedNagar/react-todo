var React= require('react');
var ReactDOM = require('react-dom');
var { HashRouter, Route, Switch } = require('react-router-dom');
var {Provider}  = require('react-redux');

import TodoApp from 'TodoApp';
var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

import Login from 'Login';

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
    <div>
      <HashRouter>
        <div>
          <div className="columns medium-6 large-4 small-centered">
            <Switch>
              <Route path='/todos' component={TodoApp}/>
              <Route path='/login' component={Login}/>
              <Route component={Login}/>
            </Switch>
          </div>
        </div>
      </HashRouter>
    </div>
  </Provider>,
  document.getElementById('app')
);
