var expect =  require('expect');
var df = require('deep-freeze-strict');
var moment = require('moment');

var reducers = require('reducers');

describe('Reducers',() => {
  describe('searchTextReducer', () => {
    it('Should set search text',() => {
      var action ={
        type:'SET_SEARCH_TEXT',
        searchText: 'DOG'
      };

      var res = reducers.searchTextReducer(df(''),df(action));
      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer',() => {
    it('Should toggle show completed',() => {
      var action = {
        type:'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(false),df(action));
      expect(res).toEqual(true);
    });
  });

 describe('todosReducer',() => {
   it('Shoud add new todo',() => {
     var action = {
       type: 'ADD_TODO',
       todo :{
         id:'abc123',
         text:'LEARN REACT&REDUX',
         completed: false,
         createdAt:123777
       }
     }
     var res = reducers.todosReducer(df([]),df(action));

     expect(res.length).toEqual(1);
     expect(res[0]).toEqual(action.todo);
   });

   it('Should update todo', () => {
     var todos = [{
       id: 7,
       text: 'Call her',
       completed: true,
       createdAt: 123,
       completedAt: 125
     }
     ];
     var updates = {
       completed: false,
       completedAt: null
     };
     var action = {
       type:'UPDATE_TODO',
       id: todos[0].id,
       updates
     };
     var res = reducers.todosReducer(df(todos),df(action));
      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);
   });

   it('Should add existing todos', () => {
     var todos = [{
       id:777,
       text:'STUDY REDUX',
       completed: false,
       completedAt: undefined,
       createdAt: 7700
     }];
     var action = {
       type: 'ADD_TODOS',
       todos
     };
     var res = reducers.todosReducer(df([]),df(action));
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
   });
 });

 describe('Auth Reducer',() => {
   it('Should store uid on login',() => {
     const action = {
       type: 'LOGIN',
       uid: '123ABC'
     };
     var res = reducers.authReducer(undefined,df(action));
     expect(res).toEqual({
     uid: action.uid
     });
   });

   it('Should wipe auth on logout',() => {
     const authData = {
       uid: '123ABC'
     };
     const action = {
       type: 'LOGOUT'
     };
     var res = reducers.authReducer(df(authData),df(action));
     expect(res).toEqual({});
   });

 });
});
