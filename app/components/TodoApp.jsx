import React from 'react';
import * as Redux from 'react-redux';



import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import * as actions from 'actions';

export var TodoApp = React.createClass({

  onLogout(e){
    var {dispatch} = this.props;
    e.preventDefault();
    dispatch(actions.startLogout());
  },
  render(){
    return (
      <div>
        <div className="page-actions">
           <a href="#" onClick ={this.onLogout}>Logout</a>
        </div>
        <h1 className="page-title">Todo App</h1>
        <div className ="container-upper">
          <div className="grid-x">
            <div className="medium-12 large-12 cell">
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

export default Redux.connect()(TodoApp);
