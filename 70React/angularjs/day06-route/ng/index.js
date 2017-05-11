var dkApp = angular.module('dkApp', ['ui.router']);
dkApp.controller('dkController', function ($scope) {
});

dkApp.controller('homeController', function ($scope, $stateParams) {
    var username = $stateParams.username;
    var params = eval('(' + username + ')');
    console.log(params);
});

dkApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("", "/home/:username");

    //home.html?username=dk|{attr1: 123.....}
    //#/home/dk|{attr1: 123.....}
    $stateProvider.state('home', {
        url: '/home/:username',
        templateUrl: 'home.html?_' + Math.random(),
        controller: 'homeController'
    })
})