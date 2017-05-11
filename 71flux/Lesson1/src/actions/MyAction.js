var MyDispatcher = require('../dispatcher/MyDispatcher.js');

var MyAction = {
	increase:function(text){
    	MyDispatcher.dispatch(text);
	},
	decrease:function(text){
    	MyDispatcher.dispatch(text);
	}
};

module.exports = MyAction;
