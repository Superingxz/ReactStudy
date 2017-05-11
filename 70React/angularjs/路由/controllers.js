var mainApp = angular.module('mainApp', []);
mainApp.controller('controller', function ($scope) {
    $scope.name = 'pagetab';
});
mainApp.controller('controller1', ['$scope', '$stateParams', function ($scope, $stateParams) {
    $scope.name = 'page1';
    console.log($stateParams);
}]);
mainApp.controller('controller2', function ($scope) {
    $scope.name = 'page2';
});
mainApp.controller('controller3', function ($scope) {
    $scope.name = 'page3';
});