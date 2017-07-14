var React = require('react');

var TodoList =  require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({

   getInitialState: function(){
    return{
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
  render: function(){
    var {todos} = this.state;
    return(
      <div>
        <TodoList todos ={todos}/>
        <AddTodo onAddTodo ={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
