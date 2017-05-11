var commonApp = angular.module('commonApp', []);

commonApp.value('baseUrl', 'http://localhost/course/api/api/');


commonApp.config(function ($provide) {
    $provide.provider('searchProvider', function () {
        this.$get = function () {
            return {
                doSearch: function (student, columnName, keyWord) {
                    if (columnName) {
                        //{indexid:71 ,account: '',...} student['indexid']
                        if (JSON.stringify(student[columnName]).indexOf(keyWord) > -1) {
                            return student;
                        }
                    } else {
                        //$scope.pagecount = Math.ceil(students.length / $scope.pagerows);
                        return student;
                    }
                }
            };
        }
    })
})

commonApp.factory('searchFactory', function () {
    return {
        doSearch: function (student, columnName, keyWord) {
            if (columnName) {
                //{indexid:71 ,account: '',...} student['indexid']
                //var columnName = 'account';
                //var keyword = 'k';
                //student = {account: 'dk'}; student[columnName].indexOf(keyword) > -1
                //[{indexid: '', name: ''}]
                if (JSON.stringify(student[columnName]).indexOf(keyWord) > -1) {
                    return student;
                }
            } else {
                //$scope.pagecount = Math.ceil(students.length / $scope.pagerows);
                return student;
            }
        }
    }
})


commonApp.service('dkService', function () {
    
})
//service rely service
commonApp.service('searchServices', ['dkService', function (dkService) {
    this.doSearch  = function (student, columnName, keyWord) {
        if (columnName) {
            //{indexid:71 ,account: '',...} student['indexid']
            if (JSON.stringify(student[columnName]).indexOf(keyWord) > -1) {
                return student;
            }
        } else {
            //$scope.pagecount = Math.ceil(students.length / $scope.pagerows);
            return student;
        }
    }
}])
commonApp.factory('search3', function () { })

commonApp.filter('range', function () {
    return function (array, range) {
        for (var i = 1 ; i <= range; i++) {
            array.push(i);
        }
        return array;
    }
})
