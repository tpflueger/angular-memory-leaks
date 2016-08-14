angular.module('app', []).run(['$rootScope', 'mockData', function ($rootScope, mockData) {
	$rootScope.value = _.clone(mockData);
}]);