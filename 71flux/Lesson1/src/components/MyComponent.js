var React = require('react');

var ReactDOM = require('react-dom')

var MyStore = require('../stores/MyStore.js');
var MyAction = require('../actions/MyAction.js');

var MyComponent = React.createClass({
	getInitialState: function(){
		return {
			items: MyStore.getAll()
		}
	},
	increase:function(){
		MyAction.increase("increase");
	},
	decrease:function(){
		MyAction.decrease("decrease");
	},
	componentDidMount: function(){
		MyStore.addChangeListener(this._onChange);
	},
	componentWillUnmount: function(){
		MyStore.removeChangeListener(this._onChange);
	},
	_onChange: function(){
		this.setState({
			items: MyStore.getAll()
		})
	},
	render:function(){
		var items = this.state.items;

		return(
			<div>
				<span>点击了:{items}次</span>
				<input type = "button" onClick={this.increase} value = "+"/>
				<input type = "button" onClick={this.decrease} value = "-"/>
			</div>
		);
	}
});
module.exports = MyComponent;
