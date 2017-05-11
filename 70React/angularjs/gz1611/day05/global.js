var globalapp = angular.module('globalapp', []);

globalapp.value('baseUrl', 'http://localhost/');

globalapp.value('pagerow', 5);

globalapp.value('lang', 'en');

globalapp.value('dictionary', {
	cn: {
		account: '帐号',
		createtime: '注册时间',
		indexid: '用户 ID',
		mail: '邮箱',
		phone: '手机',
		projectname: '项目名称',
		username: '用户名'
	},
	en: {
		account: 'Account',
		createtime: 'Create Time',
		indexid: 'Index ID',
		mail: 'Mail',
		phone: 'Phone',
		projectname: 'Project Name',
		username: 'User Name'
	}
});

var searchFactory = function(){
	return {
		filter: function(item, columnName, keyword){
			if(columnName && keyword && (item[columnName] + '').indexOf(keyword) > -1){
				return true;
			} else if(!columnName || !keyword) {
				return true;
			} 
			return false;
		}
	};
}

globalapp.factory('searchFactory', [function () {
	return {
		filter: function(item, columnName, keyword){
			if(columnName && keyword && (item[columnName] + '').indexOf(keyword) > -1){
				return true;
			} else if(!columnName || !keyword) {
				return true;
			} 
			return false;
		}
	};
}])

var searchService = function(){
	this.fitler = function(item, columnName, keyword){
		if(columnName && keyword && (item[columnName] + '').indexOf(keyword) > -1){
			return true;
		} else if(!columnName || !keyword) {
			return true;
		} 
		return false;
	}
}

globalapp.service('searchService', [function () {
	this.fitler = function(item, columnName, keyword){
		if(columnName && keyword && (item[columnName] + '').indexOf(keyword) > -1){
			return true;
		} else if(!columnName || !keyword) {
			return true;
		} 
		return false;
	}	
}])

globalapp.filter('range', function(){
	return function(array, range){
		if(!(array instanceof Array)){
			array = [];
		}
		if(typeof range != 'number' || parseInt(range) < 1){
			range = 1;
		}
		for(var i = 0; i < range; i++){
			array.push(i);
		}
		return array;
	}
});

globalapp.directive('dkgrid', function(){
	return {
		restrict: 'E',
		templateUrl: 'dkgrid.html?_=' + Math.random(),
		controller: function(){
			console.log(1);
		}

	}
})

globalapp.directive('repeatFinish', function () {
    return {
    	restrict: 'A',
        link: function (scope, element, attrs) {
        	// console.log(scope.$last);
            if (scope.$last === true) {
                scope.repeatFinish();
            }
        }
    }
})