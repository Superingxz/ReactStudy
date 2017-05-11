var common = common || {};
common.baseUrl = 'http://localhost/course/api/api/';

var commonApp = angular.module('commonApp', []);

commonApp.directive('dkRepeat', function () {
    return function (_scope) {
        console.log(_scope.columnName);
        console.log(_scope.dictionary);
    }
})

commonApp.directive('datagrid', function () {
    return {
        restrict: 'E',
        templateUrl: 'template/datagrid.html',
        scope: {},
        controller: function ($scope, $element, $attrs, $http) {
            $http.get($attrs.api).success(function (response) {
                $scope.students = response.data;
            });

            $scope.trClick = function (_tr, _index, _event) {
                if ($attrs.multiple == 'true') {
                    $(_event.target).closest('tr').toggleClass('tr-selected');
                } else {
                    $(_event.target).closest('tr').addClass('tr-selected').siblings('tr').removeClass('tr-selected');
                }
                
            }
        },
        link: function (_scope, _element, _attrs) {
        }
    }
})

commonApp.config(["$httpProvider", function ($httpProvider) {
    $httpProvider.interceptors.push(function ($rootScope, $q) {
        return {
            'request': function (config) {
                //请求执行
                if (!$('.mask')[0]) {
                    var _html = '<div class="mask item-hidden"><i class="fa fa-spinner fa-spin"></i></div>';
                    $(_html).appendTo($('body'));
                }
                $('.mask').removeClass('item-hidden');
                if (config.url.indexOf('.html') < 0 && config.url.indexOf('.txt') < 0) {
                    config.url = common.baseUrl + config.url;
                }
                config.params = $.extend(config.params, { '_': Math.random() });
                return config || $q.when(config);
            },
            'requestError': function (rejection) {
                //请求出错的时候执行
                return rejection;
            },
            'response': function (response) {
                //响应成功的回调函数
                $('.mask').addClass('item-hidden');
                return response || $q.when(response);
            },
            'responseError': function (response) {
                //响应失败的回调函数
                $.alert(response.status + ' - ' + response.statusText + '<br/>请求路径：<br/>' + response.config.url, '请求错误');
                $('.mask').addClass('item-hidden');
                return $q.reject(response);
            }
        };
    });
}]);