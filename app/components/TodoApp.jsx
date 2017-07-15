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
        text: 'Study React'
      },
      {
        id: uuid(),
        text: 'Wipe my tears'
      },
      {
        id: uuid(),
        text: 'Cry tightly'
      },
      {
        id: uuid(),
        text: 'Try to forget'
      }
      ]
    };
  },
  handleAddTodo: function(text){
    this.setState({
    todos: [...this.state.todos,
    {
      id: uuid(),
      text: text
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
        <TodoList todos ={todos}/>
        <AddTodo onAddTodo ={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
