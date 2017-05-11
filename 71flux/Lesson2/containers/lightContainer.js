var React = require('react');
var redux = require('react-redux');
var {bindActionCreators} = require('redux');
var LightComponent = require('../components/lightComponent');
var lightAction = require('../actions/lightAction');

//将reducer绑定到props上
function mapStateToProps(state){
	return state;
}

//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
	console.log(dispatch);
  	return bindActionCreators(lightAction, dispatch)
}

module.exports = redux.connect(mapStateToProps, mapDispatchToProps)(LightComponent);