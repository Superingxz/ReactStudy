var globalApp = angular.module('globalApp', []);
//工厂模式
//var _dkfactory = dkFactory();
globalApp.factory('dkFactory', function () {
    var obj = {
        message: 'this is a factory'
    }
    return obj;
})

//构造函数模式
//var _dkservice = new dkService();
//new => 实例化的过程 => 每次实例化在内存当中都会分一块独立的空间
globalApp.service('dkService', function () {
    this.message = 'this is a service';
})

//构造函数模式
//$get 是必须的
globalApp.provider('dkProvider', function () {
    var obj = {};
    obj.message = 'this is a provider';

    this.set = function (_mess) {
        obj.message = _mess;
    }

    this.$get = function () {
        return obj;
    }
})

globalApp.filter('range', function () {
    return function (_array, _range) {
        for (var i = 0; i < _range; i++) {
            _array.push(i);
        }
        return _array;
    }
})