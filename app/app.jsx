var React= require('react');
var ReactDOM = require('react-dom');
var { BrowserRouter, Route } =require('react-router-dom');

var TodoApp = require('TodoApp');
//Load foundation


$(document).foundation();

//app style

require('style-loader!css-loader!sass-loader!applicationStyles');


ReactDOM.render(
      <TodoApp/>,
      document.getElementById('app')
);
