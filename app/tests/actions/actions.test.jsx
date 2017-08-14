var expect =  require('expect');
var actions = require('actions');

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
      text: 'DEMO TODO'
    };

    var res = actions.addTodo(action.text);
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

  it('Should generate toggle todo action', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: 7
    };

    var res = actions.toggleTodo(action.id);
    expect(res).toEqual(action);
  });
});
