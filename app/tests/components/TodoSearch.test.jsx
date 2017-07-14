var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoSearch = require('TodoSearch');

describe('TodoSearch',() => {
  it('Should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('Should call onSearch with entered input text',() => {
    var spy = expect.createSpy();
    var searchText = 'Play';
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch ={spy}/>);
    todoSearch.refs.searchTxt.value =searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchTxt);

    expect(spy).toHaveBeenCalledWith(false,searchText);
  });

  it('Should call onSearch with proper checked value',() => {
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch ={spy}/>);
    todoSearch.refs.showCompleted.checked =true;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(true,'');
  });
});
