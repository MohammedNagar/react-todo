var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({

  handleSubmit: function(e){
    e.preventDefault();
    var {dispatch} = this.props;
    var todoText = this.refs.txtAdd.value;
    if(todoText.length > 0){
      this.refs.txtAdd.value = '';
      dispatch(actions.startAddTodo(todoText));
    }else{
      this.refs.txtAdd.focus();
    }
  },
  render: function(){
    return(
      <div className ="container__footer">
      <form ref='addForm' onSubmit={this.handleSubmit}>
       <input type ='text' ref ='txtAdd' placeholder ='What do you need to do?'/>
       <button className="button expanded">Add Todo</button>
      </form>
      </div>
    );
  }
});

export default connect()(AddTodo);
