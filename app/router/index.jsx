import React from 'react';
import { HashRouter, Route, Switch,withRouter } from 'react-router-dom';
import firebase from 'app/firebase/';
import TodoApp from 'TodoApp';
import Login from 'Login';
import PrivateRoute  from 'PrivateRoute';


var requireLogin = (nextState,replace,next) =>{
  if(!firebase.auth().currentUser){
    console.log('DONE1');
    replace('/');
  }
  next();
};

var redirectIfLoggedIn = (nextState,replace,next) =>{
  if(firebase.auth().currentUser){
    replace('/todos');
  }
  next();
};

export default (
  <div>
    <HashRouter>
      <div>
        <div className="columns medium-6 large-4 small-centered">
          <Switch>
            <PrivateRoute path='/todos' component={TodoApp} onEnter ={requireLogin}/>
            <Route path='/login' component={Login}/>
            <Route component={Login}  onEnter ={redirectIfLoggedIn}/>
          </Switch>
        </div>
      </div>
    </HashRouter>
  </div>
);
