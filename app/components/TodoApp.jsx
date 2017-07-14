var React = require('react');

var TodoList =  require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({

   getInitialState: function(){
    return{
      showCompleted: false,
      searchText: '',
      todos: [{
        id: 1,
        text: 'Study React'
      },
      {
        id: 2,
        text: 'Wipe my tears'
      },
      {
        id: 3,
        text: 'Cry tightly'
      },
      {
        id: 4,
        text: 'Try to forget'
      }
      ]
    };
  },
  handleAddTodo: function(text){
    alert('New todo: ' + text);
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
