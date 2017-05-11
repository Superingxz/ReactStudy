var dkApp = angular.module('dkApp', []);
dkApp.controller('dkController', ['$scope', '$http', function ($scope, $http) {
    $scope.list = [];
    $scope.totalAmount = 0;
    $scope.selectedCount = 0;

    $http.get('product.json?_r' + Math.random()).success(function (response) {
        $scope.list = response;
    });

    $scope.liClick = function (m, indexdid, evt) {
        switch (evt.target.className) {
            case 'itemMinus':
                m.count -= 1;
                break;
            case 'itemAdd':
                m.count += 1;
                break;
            case 'itemRemove':
                $scope.list.splice(indexdid, 1);
                break;
            case 'itemSelected':
                m.selected = !m.selected;
                break;
        }
        caculation(m, evt.target.className);
    }

    $scope.selectAll = function () {
        for (var i = 0; i < $scope.list.length; i++) {
            var flag = $scope.selectedCount == $scope.list.length
            $scope.list[i].selected = !flag;
            if (i == $scope.list.length - 1) {
                if (flag) {
                    $scope.selectedCount = 0;
                } else {
                    $scope.selectedCount = $scope.list.length;
                }
            }
            caculation($scope.list[i]);
        }
    }

    var caculation = function (m, evtType) {
        $scope.totalAmount = 0;
        $scope.selectedCount = 0;
        for (var i = 0; i < $scope.list.length; i++) {
            if (!$scope.list[i].selected) {
                continue;
            }
            $scope.totalAmount += $scope.list[i].price * $scope.list[i].count;
            $scope.selectedCount += 1;
        }
    }
}])