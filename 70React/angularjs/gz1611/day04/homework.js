var homeworkApp = angular.module('homeworkApp', ['globalapp']);

homeworkApp.controller('homworkController', ['$scope', '$http', 'baseUrl', 'pagerow', 'lang', 'dictionary', 'searchFactory', 'searchService', function ($scope, $http, baseUrl, pagerow, lang, dictionary, searchFactory, searchService) {
	$scope.pagerow = pagerow;
	$scope.page = 1;
	$scope.lang = lang;
	$scope.dictionary = dictionary;

	document.getElementsByClassName('mask')[0].style.display = 'block';
	$http.get(baseUrl + 'student/FetchAllStudent').success(function(response){
		$scope.dataSource = response.data;
		$scope.rowcount = $scope.dataSource.length;
		$scope.pagecount = Math.ceil($scope.rowcount / $scope.pagerow);
		document.getElementsByClassName('mask')[0].style.display = 'none';
	})

	$scope.pagination = function(event){
		$scope.page = event.target.innerHTML;
	}

	$scope.myFilter = function(item){
		// return item;
		// var _obj = searchFactory();
		// return _obj.fitler(item, $scope.columnName, $scope.keyword);
		return searchService.fitler(item, $scope.columnName, $scope.keyword);
		return searchFactory.filter(item, $scope.columnName, $scope.keyword);
	}
}]);