var React = require('react');
var MainStore = require('../stores/MainStore.js');
var MainAction = require('../actions/MainAction.js');

var MainButton = React.createClass({
	getInitialState: function(){
		return {
			items: MainStore.getAll()
		}
	},
	addNewItem: function(){
		MainAction.addNewItem('New Item');
	},
	componentDidMount: function(){
		MainStore.addChangeListener(this._onChange);
	},
	componentWillUnmount: function(){
		MainStore.removeChangeListener(this._onChange);
	},
	_onChange: function(){
		this.setState({
			items: MainStore.getAll()
		})
	},
	render: function(){
		var items = this.state.items;
		var itemHtml = items.map(function(item, index){
			return <li key={index}>item</li>;
		});

		return (
			<div>
				<ul>{itemHtml}</ul>
				<button onClick={this.addNewItem}>add</button>
			</div>
		);
	}
});

module.exports = MainButton;