var React  = require("react");
var ReactDOM = require("react-dom");

var action = require("../actions/yhyaction.js");
var store = require("../stores/yhysrore.js");
var Component = React.createClass({
	getInitialState() {
		return {
			num:store.number,
		}
	},
	add:function(){
		action.add("add");
	},
	min:function(){
		action.min("min")
	},
	change:function(){
		this.setState({
			num:store.number
		})
	},
	render() {
		return (
			<div>
				<span>Click:</span>
				<span></span>
				<span>times</span>
				<button onclick={this.add}>+</button>
				<button onclick={this.min}>-</button>
			</div>
		)
	},
	componentDidMount: function(){
		store.addChangeListener(this.change);
	},
	componentWillUnmount: function(){
		store.removeChangeListener(this.change);
	}
})	
module.exports = Component;