import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect =  require('expect');
var actions = require('actions');

var createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
  it('Should generate search text action',() => {
    var action ={
      type: 'SET_SEARCH_TEXT',
      searchText: 'SOME TEXT'
    };

    var res = actions.setSearchText(action.searchText);
    expect(res).toEqual(action);
  });

  it('Should generate toggle show completed action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };

    var res = actions.toggleShowCompleted();
    expect(res).toEqual(action);
  });

  it('Should generate add todo action',() => {
    var action = {
      type:'ADD_TODO',
      todo:{
      id:'123abc',
      text: 'Yarab',
      completed:false,
      createdAt:77777
     }
    };

    var res = actions.addTodo(action.todo);
    expect(res).toEqual(action);
  });

  it('Should generate add todos action',() => {
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

    var res = actions.addTodos(todos);
    expect(res).toEqual(action);

  });

  it('Should create todo and dispatch ADD_TODO',(done) => {
      const store = createMockStore({});
      const todoText = 'My Todo Item';

      store.dispatch(actions.startAddTodo(todoText)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toInclude({
          type: 'ADD_TODO'
        });

        expect(actions[0].todo).toInclude({
          text: todoText
        });
        done();
      }).catch(done);
  });

  it('Should generate toggle todo action', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: 7
    };

    var res = actions.toggleTodo(action.id);
    expect(res).toEqual(action);
  });
});
