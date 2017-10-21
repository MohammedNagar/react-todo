var React= require('react');
var ReactDOM = require('react-dom');
var {Provider}  = require('react-redux');
import firebase from 'app/firebase/';
var actions = require('actions');
var store = require('configureStore').configure();
import router from 'app/router/';


//Load foundation
$(document).foundation();

//app style

require('style-loader!css-loader!sass-loader!applicationStyles');



ReactDOM.render(
  <Provider store = {store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
