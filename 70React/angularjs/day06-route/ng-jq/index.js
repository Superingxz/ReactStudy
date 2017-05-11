var dkApp = angular.module('dkApp', ['globalApp']);

dkApp.config(function ($controllerProvider, $compileProvider, $filterProvider, $provide) {
    dkApp.register = {
        controller: $controllerProvider.register,
        directive: $compileProvider.directive,
        filter: $filterProvider.register,
        factory: $provide.factory,
        service: $provide.service
    };
});
//scope 与依赖注入的关系在默认情况下为父子结构($parent)，当前 scope 为子，依赖注入为父
dkApp.controller('dkController', function ($scope, $http, $compile) {
    $scope.menu = [{ name: 'home', page: 'home.html' }, { name: 'user', page: 'user.html' }];
    $scope.name = 'dk';
    $http.get('home2.html?_' + Math.random()).success(function (response) {
        $compile($('.dk-contianer').html(response))($scope);
    });

    console.log($scope);
});

