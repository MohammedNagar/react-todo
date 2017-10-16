import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'actions';

export var Login = React.createClass({
  onLogin(){
   var {dispatch} = this.props;
   dispatch(actions.startLogin());
  },
  render(){
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className ="container-upper">
          <div className="grid-x">
            <div className="medium-12 large-12 cell">
              <div className="container">
                <div className="callout callout-auth">
                  <h3>Login</h3>
                  <p>
                    Login with GitHub account below.
                  </p>
                  <button className="button" onClick = {this.onLogin}>Login with GitHub</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Redux.connect()(Login);
