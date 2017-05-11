var EventEmitter = require('events').EventEmitter;
var $ = require('jquery');
var assign = require('object-assign');

var MainStore = assign({}, EventEmitter.prototype, {
	items: [],
	getAll: function(){
		return this.items;
	},
	addNewItem: function(text){
		this.items.push(text);
	},
	emitChange: function(){
		this.emit('change');
	},
	addChangeListener: function(callback) {
		this.on('change', callback);
	},
	removeChangeListener: function(callback) {
		this.removeListener('change', callback);
	}	
});

module.exports = MainStore;