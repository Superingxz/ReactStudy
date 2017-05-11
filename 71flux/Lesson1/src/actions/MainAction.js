var MainDispatcher = require('../dispatcher/MainDispatcher.js');

var ButtonAction = {
	addNewItem: function(text){
		MainDispatcher.dispatch(text);
	}
};

module.exports = ButtonAction;