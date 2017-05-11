var React = require('react');
var redux = require('redux');
var counterReducer = require('../reducers/counterReducer.js');
var counterAction = require('../actions/conterAction.js');

//创建 store
//stroe 是对 reducer 的一种实现 
var store = redux.createStore(counterReducer);

// var reducer = function(state, action){
// 	switch(action.type){
// 		case INCREMENT_COUNTER:
// 			state += 1;
// 			break;
// 		case DECREMENT_COUNTER:
// 			state -= 1;
// 			break;
// 		default:
// 			state = 0;
// 	}
// 	return state;
// }

// var increment = {
// 	type: INCREMENT_COUNTER
// }

// console.log(reducer(0, increment))

// store.subscribe(function(){
// 	console.log(store.getState());
// })

var CounterComponent = React.createClass({
	getInitialState: function(){
		return {value: store.getState()}
	},
	increment: function(){
		store.dispatch(counterAction.increment());
		this.setState({value: store.getState()});
	},
	decrement: function(){
		store.dispatch(counterAction.decrement());
		this.setState({value: store.getState()});
	},
	render: function(){
	    return (
	      <p>
	        Clicked: {this.state.value} times
	        {' '}
	        <button onClick={this.increment}>+</button>
	        {' '}
	        <button onClick={this.decrement}>-</button>	        
	      </p>
	    )		
	}
})

module.exports = CounterComponent;