import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import firebase from 'app/firebase/';
import TodoApp from 'TodoApp';
import Login from 'Login';
import * as actions from 'actions';
import * as Redux from 'react-redux';
export var PrivateRoute = ({ component: Component, ...rest }) => {

  // return the Route component
  return (
    <Route {...rest} render={props => {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        console.log('ON...ON');
        // run dispatch
        var {dispatch} = props;
        dispatch(actions.login(user.uid));
        dispatch(actions.startAddTodos());
        // return component
        return(
          <Component  {...props} />
        ) ;

      } else {
        console.log('OFF...OFF');
        // run dispatch
        dispatch(actions.logout());
        // return component
        return (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        );

      }
    });
  }} />);
}
export default Redux.connect()(PrivateRoute);
