var React = require('react');
var ReactDOM = require('react-dom');
var addItemAction = require('../actions/gz1611Action.js');

var GZ1611Component = React.createClass({
	addItem: function(){
		//action
		addItemAction(this.refs.addText.value)
	},
	render: function(){
		return (
			<div>
				<input type="text" ref="addText" />
				<input type="button" onClick={this.addItem} value="gz1611" />
			</div>
		)
	}
})

module.exports = GZ1611Component;