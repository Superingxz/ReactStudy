var dkApp = angular.module('dkApp', ['globalApp']);
dkApp.controller('dkController', function ($scope, $http, $q, dictionaryFactory) {
    console.log($scope);
    $scope.ngClone = function () {
        for (var indexid in $scope.trContianer) {
            var obj = JSON.parse(JSON.stringify($scope.trContianer[indexid]));
            obj.trSelected = false;
            $scope.models.push(obj);
        }
    }
})