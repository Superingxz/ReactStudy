var React = require('react');

var redux = require('redux');

var myReducer = require('../reducers/myReducer.js');
var myAction = require('../actions/myAction.js');

var store = redux.createStore(myReducer);

