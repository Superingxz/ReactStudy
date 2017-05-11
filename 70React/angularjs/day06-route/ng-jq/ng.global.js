var globalApp = angular.module('globalApp', []);
/*
var baseObj = {$name: 'dk1', $pwd: 123456, $parent: null, name};

scope: false => var globalObj = {$name: 'dk1', $pwd: 123456l, $parent: null, name: 'global'}

scope: true => var globalObj = {$name: null, $pwd: null, $parent: baseObj, name: 'global'}; 

scope: {} = var globalObj = {$name: null, $pwd: null, $parent: {$name: 'dk1', $pwd: 123456, $parent: null}, name: 'global'}
*/

globalApp.config(["$httpProvider", function ($httpProvider) {
    $httpProvider.interceptors.push(function ($rootScope, $q) {
        return {
            'request': function (config) {
                return config || $q.when(config);
            },
            'requestError': function (rejection) {
                console.log('requestError');
                return rejection;
            },
            'response': function (response) {
                return response || $q.when(response);
            },
            'responseError': function (response) {
                $.alert(response.status + ' - ' + response.statusText + '<br/>请求路径：<br/>' + response.config.url, '请求错误');
                return $q.reject(response);
            }
        };
    });
}]);

globalApp.directive('dkgrid', function ($compile) {
    return {
        scope: {},
        template: '<h1 ng-bind="name"></h1>',
        controller: function ($scope, $http) {
            $scope.name = 'global';
            console.log($scope);
        },
        link: function (scope, element, attr) {//指令执行后对数据的操作
            console.log(scope);
            $compile(element.contents())(scope);//编译 dom 结构，把 scope 绑定
        }
    }
})