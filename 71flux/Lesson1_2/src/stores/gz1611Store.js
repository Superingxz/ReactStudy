module.exports = {
	items: [],
	addItem: function(text){
		console.log(text);
		this.items.push(text);
	},
	getAll: function(){
		return this.items;
	},
	emitChange: function(){
		this.emit('change');
	}
};