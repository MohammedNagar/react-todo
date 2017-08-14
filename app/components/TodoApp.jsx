var React = require('react');
var uuid = require('uuid');
var moment = require('moment');

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

var TodoApp = React.createClass({
  render: function(){
    return (
     <div>
      <h1 className="page-title">Todo App</h1>
      <div className ="container-upper">
        <div className="grid-x">
          <div className="medium-6 large-4 cell">
            <div className="container">
              <TodoSearch />
              <TodoList />
              <AddTodo />
            </div>
         </div>
       </div>
      </div>
    </div>
    );
    }
    });

    module.exports = TodoApp;
