var redux = require('redux');
var {searchTextReducer,showCompletedReducer,todosReducer}  = require('reducers');

export var configure = (intialState ={}) => {
  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });

  var store = redux.createStore(reducer, intialState, redux.compose(
    window.devToolsExtension ? devToolsExtension() : f=>f
  ));
  return store;
};
