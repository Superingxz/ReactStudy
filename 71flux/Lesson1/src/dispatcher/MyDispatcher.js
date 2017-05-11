var Dispatcher = require('flux').Dispatcher;

var MyDispatcher = new Dispatcher();

var MyStore = require('../stores/MyStore.js')

MyDispatcher.register(function(text){
  if(text == 'increase'){
    MyStore.increase();
    MyStore.emitChange();
  }
  if(text == 'decrease'){
    MyStore.decrease();
    MyStore.emitChange();
  }
//  MyStore.increase();
//  MyStore.decrease();
//  MyStore.emitChange();

});


module.exports = MyDispatcher;
