var EventEmitter = require('events').EventEmitter;
var $ = require('jquery');
var assign = require('object-assign');

var Mainstore = assign({}, EventEmitter.prototype, {
	number:0,
	add:function(){
		this.number++;
	},
	min:function(){
		this.number--;
	},
	emitChange:function(){
		this.emit("change")
	},
	addChangeListener: function(callback) {
		//callback ---view----change:function(){this.setState({num:store.number})}
		this.on('change', callback);
	},
	removeChangeListener: function(callback) {
		this.removeListener('change', callback);
	}	

})
module.exports = Mainstore;