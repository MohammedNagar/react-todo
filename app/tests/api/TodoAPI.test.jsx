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

  describe('FilterTodos',() => {
    var filteredTodos = [
      {
        id: 70,
        text: 'Play a little',
        completed: true
      },
      {
        id: 71,
        text: 'Eat so much',
        completed: false
      },
      {
        id: 70,
        text: 'Drink a little',
        completed: true
      }
    ]
    it('Should return all items if showCompleted is true',() => {
       var filtered = TodoAPI.filterTodos(filteredTodos,true,'');
       expect(filtered.length).toBe(3);
    });

    it('Should return only non completed if showCompleted is false',() => {
       var filtered = TodoAPI.filterTodos(filteredTodos,false,'');
       expect(filtered.length).toBe(1);
    });

    it('Should sort by completed status',() => {
      var filtered = TodoAPI.filterTodos(filteredTodos,true,'');
      expect(filtered[0].completed).toBe(false);
    });

    it('Should filter Todos by searchText',() => {
       var filtered = TodoAPI.filterTodos(filteredTodos,true,'little');
       expect(filtered.length).toBe(2);
    });

    it('Should return all items if searchText is empty',() => {
       var filtered = TodoAPI.filterTodos(filteredTodos,true,'');
       expect(filtered.length).toBe(3);
    });

  });
});
