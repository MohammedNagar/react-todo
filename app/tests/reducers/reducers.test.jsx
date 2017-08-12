var expect =  require('expect');
var df = require('deep-freeze-strict');
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

});
