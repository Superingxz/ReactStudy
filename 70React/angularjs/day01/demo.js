//主要用到对数据的逻辑操作
//逻辑操作 => 增、删、改、查
//逻辑操作 => 可通过自定义对象或 ajax 请求数据
//依赖注入
var app = angular.module('myApp', ['ngSanitize']);
app.controller('myController', function($scope, $http){
    $scope.name = 'dk.lan';
    $scope.age = 18;
    $scope.aTag = '<a href="#">a标签</a>';
    $scope.imgSrc = 'img/3.jpg';
    $scope.isHide = true;
    $scope.isShow = false;
    $scope.click = function(evt){
        console.log(evt);
    }

    $http.get(url).success(function(data){
        $scope.items = data.data;
    })

    $.get(url, function(data){
        $scope.items = data.data;
        $scope.$apply();
    })

});

