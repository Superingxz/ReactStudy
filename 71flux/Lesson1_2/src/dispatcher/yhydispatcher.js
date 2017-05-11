var Dispatcher = require('flux').Dispatcher;
var MainDispather = new Dispatcher();

var store = require("../stores/yhysrore.js");
MainDispather.register(function(text){
	//
	// store.add();
	// store.emitChange();
	if(text == "add"){
		store.add();
		store.emitChange();
	}else if(text == "min"){
		store.min();
		store.emitChange();
	}
})
module.exports = MainDispather;