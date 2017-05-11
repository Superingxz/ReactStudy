var flux = require('flux');
var Dispatcher = flux.Dispatcher;
var gz1611Dispatcher = new Dispatcher();

var gz1611Store = require('../stores/gz1611Store.js');

//把从 action 发出来的 dispatcher 进行分发到对应的 store
gz1611Dispatcher.register(function(text){
	//进行分发到 store
	//改变
	gz1611Store.addItem(text);
	//通知 view 更新
	gz1611Store.emitChange();
})

var addItem = function(text){
	//把 action 分发出去
	//发出dispather
	gz1611Dispatcher.dispatch(text);
}

module.exports = addItem;