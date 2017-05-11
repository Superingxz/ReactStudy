var EventEmitter = require('events').EventEmitter;
var $ = require('jquery');
var assign = require('object-assign');

var MyStore = assign({}, EventEmitter.prototype, {
  items: 0,
  getAll: function(){
    return this.items;
  },
  increase: function(text){
    this.items++;
    console.log(this.items);
  },
  decrease:function(text){
    this.items--;
    console.log(this.items);
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

module.exports = MyStore;
