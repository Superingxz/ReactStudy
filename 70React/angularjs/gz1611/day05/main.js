var dkApp = angular.module('dkApp', ['ui.router', 'globalapp']);

//配置路由映射表
dkApp.config(function($stateProvider, $urlRouterProvider){
	$stateProvider.state('homework', {
		url: '/homework',
		templateUrl: 'homework.html',
		controller: 'homeworkController'
	}).state('page1', {
		url: '/page1',
		templateUrl: 'page1.html',
		controller: 'page1Controller'
	})
})

dkApp.controller('homeworkController', ['$scope', '$http', 'baseUrl', function ($scope, $http, baseUrl) {
	$http.get(baseUrl + 'course/api/api/student/FetchAllStudent?account=杨世雄').success(function(response){
		$scope.dataSource = response.data;
	})		
}]);

dkApp.controller('page1Controller', ['$scope', '$http', 'baseUrl', function ($scope, $http, baseUrl) {
	$http.get(baseUrl + 'course/api/api/student/FetchAllStudent?account=卢本来').success(function(response){
		$scope.dataSource = response.data;
	})		
}]);

dkApp.controller('dkController', ['$scope', '$http', 'baseUrl', function ($scope, $http, baseUrl) {
	$scope.repeatFinish = function(){
		console.log('repeatFinish')
	}
}])