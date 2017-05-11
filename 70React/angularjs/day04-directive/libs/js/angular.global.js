var globalApp = angular.module('globalApp', []);

globalApp.value('lanType', 'cn');

globalApp.factory('dictionaryFactory', function ($http, lanType) {
    var obj = {};
    obj.initDictionary = function (_callback) {
        $http.get('libs/dictionary/dictionary.txt?_' + Math.random()).success(function (response) {
            _callback(response);
        });
    }
    //fetchDictionary('account') => 
    obj.fetchDictionary = function (_dictionary, _colName, _lanType) {
        if (typeof _lanType == 'undefined') {
            if (window.localStorage.getItem('lanType')) {
                _lanType = window.localStorage.getItem('lanType');
            } else {
                _lanType = lanType;
            }
        }
        
        if (_dictionary && _dictionary[_colName]) {
            return _dictionary[_colName][_lanType];
        }
        return null;
    }    
    return obj;
})

globalApp.directive('dkgrid', function ($http, $compile, dictionaryFactory) {
    return {
        templateUrl: 'dkgrid.html',
        link: function (scope, element, attrs) {

            //用于存放数据列表
            //[{"indexid":13,"account":"韦晓"...
            scope.models = [];
            //用于存放列信息
            //{'indexid', 'account'...
            scope.columns = [];

            $http.get(attrs.api).success(function (response) {
                if (response.status && response.data && response.data.length > 0) {
                    scope.models = response.data;
                    //$scope.models[0] =》 {{"indexid":13,"account":"韦晓","password"...
                    dictionaryFactory.initDictionary(function (_dictionary) {
                        for (var key in scope.models[0]) {
                            var _key = dictionaryFactory.fetchDictionary(_dictionary, key);
                            var _obj = { 'key': key, 'dictionary': _key };
                            scope.columns.push(_obj);
                        }
                    });
                }
            })
            //{1: m1, 3: m3}
            scope.trContianer = {};
            scope.trClick = function (m, index, evt) {
                m.trSelected = !m.trSelected;
                if (m.trSelected) {
                    scope.trContianer[m.indexid] = m;
                } else {
                    delete scope.trContianer[m.indexid];
                }
            }
        }
    }
})