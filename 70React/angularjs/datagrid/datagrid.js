var dkApp = angular.module('dkApp', ['commonApp']);

var dkController = dkApp.controller('dkController', ['$scope', '$http', 'baseUrl', 'searchFactory', function ($scope, $http, baseUrl, searchFactory) {
    $scope.highlight = 'highlight';

    $http.get(baseUrl + 'student/FetchAllStudent').success(function (response) {
        $scope.students = response.data;
        $scope.colspan = 0;
        for (var key in $scope.students[0]) {
            $scope.colspan += 1;
        }

        //每页显示 5 行
        $scope.pagerows = 5;
        $scope.pageindex = 1;
        $scope.pagecount = Math.ceil($scope.students.length / $scope.pagerows);
    })

    $scope.page = function (_index) {
        $scope.pageindex = _index;
    }
    
    $scope.datasource = $scope.students;

    $scope.updata = function (selectInput) {
        $scope.datasource = [];
        if (!$scope.keyWord.length > 0) {
            $scope.datasource = $scope.students;
        };

    };

    //$scope.dkformat = function (student) {
    //    var flag = true;
    //    if ($scope.selectInput.length > 0) {

    //        if (JSON.stringify(student[$scope.selectValue]).indexOf($scope.selectInput) > -1) {

    //            angular.forEach($scope.datasource, function (_value, _key) {

    //                if (_value["indexid"] == student["indexid"]) {
    //                    flag = false;
    //                };

    //            });
    //            if (flag) {
    //                $scope.datasource.push(student)
    //                $scope.pagecount = Math.ceil($scope.datasource.length / $scope.pagerows);
    //            };

    //            return student;
    //        }
    //    } else {
    //        $scope.pagecount = Math.ceil($scope.datasource.length / $scope.pagerows);
    //        return student;
    //    };
    //};


    //$scope.myselect = function (_students) {
    //    var num = 0;
    //    if ($scope.columName) {
    //        if (JSON.stringify(_students[$scope.columName]).indexOf($scope._text) > -1) {
    //            return _students;
    //        }
    //        pageNum();
    //        $scope.pagecount = Math.ceil(num / $scope.pagerows);
    //    } else {
    //        //页数
    //        $scope.pagecount = Math.ceil($scope.students.length / $scope.pagerows);
    //        return _students;
    //    }
    //    function pageNum() {
    //        for (var i = 0; i < $scope.students.length; i++) {
    //            if (JSON.stringify($scope.students[i][$scope.columName]).indexOf($scope._text) > -1) {
    //                num += 1;
    //            }
    //        }
    //        return num;
    //    }
    //};


    //if ($scope.columnName) {
    //    if (JSON.stringify(student[$scope.columnName]).indexOf($scope.keyWord) > -1) {

    //        $scope.pageNum += 1;
    //        $scope.pagecount = Math.ceil($scope.pageNum / $scope.pagerows) > Math.ceil($scope.students.length / $scope.pagerows) ? Math.ceil($scope.students.length / $scope.pagerows) : Math.ceil($scope.pageNum / $scope.pagerows);
    //        //{indexid: 106, account: "hbq", password: "32fda0647fa349904d2d6867d9cb1a43", phone: "18316556113",…}
    //        //indexid: [91,92,93,94,95]
    //        //last one => 95
    //        if (JSON.stringify($scope.students[$scope.students.length - 1][$scope.columnName]) == student['indexid'] ) {
    //            $scope.pageNum = 0;
    //        }
    //        return student;
    //    }
    //    else {
    //        console.log('进来了');
    //        console.log(student[$scope.columnName]);
    //        if (JSON.stringify($scope.students[$scope.students.length - 1][$scope.columnName]) == student['indexid']) {
    //            console.log(123);
    //            $scope.pageNum = 0;
    //        }
    //    }
    //} else {
    //    return student;
    //}

    $scope.myselt = function (student, index, students) {
        //[{indexid: 1, name: 'dk'}, {}]
        return searchFactory.doSearch(student, $scope.columnName, $scope.keyWord);
    }

    $scope.filterChange = function () {
        var _total = 0;
        //$scope.students = [{ name: 'dk1', age: 16 },{ name: 'dk1', age: 16 }]
        for (var i = 0; i < $scope.students.length; i++) {
            //$scope.columnName == 'name';
            if (($scope.students[i][$scope.columnName] + '').indexOf($scope.keyWord) > -1) {
                _total++;
            }
        }
        $scope.pagecount = Math.ceil(_total / $scope.pagerows);
    }
}]);