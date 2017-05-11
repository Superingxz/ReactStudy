var globalapp = angular.module('globalapp', []);
//值
globalapp.value('baseUrl', function () {
    return "baseUrl";
    //return {
    //    calc: function (n1, n2) {
    //        return n1 * 1 + n2 * 1;
    //    }
    //};
})

//工厂模式
globalapp.factory('calcFactory', function () {
    return {
        calc: function (n1, n2) {
            return n1 * 1 + n2 * 1;
        }
    };
});
//过滤器
globalapp.filter('range', function () {
    return function (array, range) {
        //array => []
        range = parseInt(range);
        for (var i = 0; i < range; i++) {
            array.push(i);
        }
        return array;
    }
})
