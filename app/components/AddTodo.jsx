var React = require('react');

var AddTodo = React.createClass({

  handleSubmit: function(e){
    e.preventDefault();
    var todoText = this.refs.txtAdd.value;
    if(todoText.length > 0){
      this.refs.txtAdd.value = '';
      this.props.onAddTodo(todoText);
    }else{
      this.refs.txtAdd.focus();
    }
  },
  render: function(){
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
       <input type ='text' ref ='txtAdd' placeholder ='What do you need to do?'/>
       <button className="button expanded">Add Todo</button>
      </form>
      </div>
    );
  }
});

module.exports = AddTodo;
