var React = require('react');

var TodoList =  require('TodoList');

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
  render: function(){
    var {todos} = this.state;
    return(
      <div>
        <TodoList todos ={todos}/>
      </div>
    );
  }
});

module.exports = TodoApp;
