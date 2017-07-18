var expect =  require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {

   beforeEach(() => {
     localStorage.removeItem('todos');
   });
   var todos = [{
     id: 777,
     text: 'Test',
     completed: false
   }];

  it('Should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
   it('Should set valid todos array', ()=> {

     TodoAPI.setTodos(todos);
     var actualTodos = JSON.parse(localStorage.getItem('todos'));
     expect(actualTodos).toEqual(todos);
   });
   it('Should not set invalid todos array', () => {
     var badTodos = {a: 'bad'};
     TodoAPI.setTodos(badTodos);
     expect(localStorage.getItem('todos')).toBe(null);
   });
  });

  describe('getTodos', () => {
    it('Should return an empty array for bad data', () => {
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('Should return todos if valid data in localStorage', () => {
      localStorage.setItem('todos',JSON.stringify(todos));
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual(todos);
    });
  });
});
