var dispatcher = require("../dispatcher/yhydispatcher.js");
module.exports = {
	add:function(text){
		dispatcher.dispatch(text);
	},
	min:function(text){
		dispatcher.dispatch(text);
	}
}