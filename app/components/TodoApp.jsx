var React = require('react');
var uuid = require('uuid');

var TodoList =  require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({

   getInitialState: function(){
    return{
      showCompleted: false,
      searchText: '',
      todos: [{
        id: uuid(),
        text: 'Study React',
        completed: true
      },
      {
        id: uuid(),
        text: 'Wipe my tears',
        completed: false
      },
      {
        id: uuid(),
        text: 'Cry tightly',
        completed: false
      },
      {
        id: uuid(),
        text: 'Try to forget',
        completed: true

      }
      ]
    };
  },
  handleToggle: function(id){

  var updatedTodos = this.state.todos.map((todo) => {
    if(todo.id === id){
      todo.completed = !todo.completed;
    }
    return todo;
  });
  this.setState({
    todos: updatedTodos
  });
  },
  handleAddTodo: function(text){
    this.setState({
    todos: [...this.state.todos,
    {
      id: uuid(),
      text: text,
      completed: false
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
    var {todos} = this.state;
    return(
      <div>
        <TodoSearch onSearch = {this.handleSearch} />
        <TodoList todos ={todos} onToggle ={this.handleToggle}/>
        <AddTodo onAddTodo ={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
