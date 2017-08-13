var React = require('react');
var uuid = require('uuid');
var moment = require('moment');

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({

   getInitialState: function(){
    return{
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    };
  },
  componentDidUpdate: function(){
    TodoAPI.setTodos(this.state.todos);
  },
  handleAddTodo: function(text){
    this.setState({
    todos: [...this.state.todos,
    {
      id: uuid(),
      text: text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: undefined
    }]

    });
  },
  handleSearch: function(showCompleted,searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });

  },
  render: function(){
    var {todos,showCompleted,searchText} = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos,showCompleted,searchText);
    return (
     <div>
      <h1 className="page-title">Todo App</h1>
      <div className ="container-upper">
        <div className="grid-x">
          <div className="medium-6 large-4 cell">
            <div className="container">
              <TodoSearch onSearch = {this.handleSearch} />
              <TodoList />
              <AddTodo onAddTodo ={this.handleAddTodo}/>
            </div>
         </div>
       </div>
      </div>
    </div>
    );
    }
    });

    module.exports = TodoApp;
