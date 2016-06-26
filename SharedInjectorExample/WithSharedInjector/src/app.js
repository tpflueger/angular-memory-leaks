angular.module('app', []).run(['$rootScope', function ($rootScope) {
	$rootScope.value = 'Hello, World!';
}]);