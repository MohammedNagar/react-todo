import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import firebase from 'app/firebase/';
import TodoApp from 'TodoApp';
import Login from 'Login';
const PrivateRoute = ({ component: Component, ...rest }) => {

  <Route {...rest} render={props => (
      firebase.auth().onAuthStateChanged((user) => user
      ?(
        <Component  {...props}/>
      )
      :(
        <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }}/>
        )
      )
    )}/>


  }

  export default PrivateRoute
