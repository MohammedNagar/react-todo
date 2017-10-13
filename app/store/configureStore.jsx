import * as redux from 'redux';
import thunk from 'redux-thunk';

import {searchTextReducer,showCompletedReducer,todosReducer}  from 'reducers';

export var configure = (intialState ={}) => {
  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });

  var store = redux.createStore(reducer, intialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? devToolsExtension() : f=>f
  ));
  return store;
};
