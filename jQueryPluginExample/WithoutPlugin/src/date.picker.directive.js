window.$ = require('jquery');

angular.module('app').directive('datePicker', function () {
	return {
		restrict: 'A',
		link: function ($scope) {
			$scope.value = 'Hello, World!';
		}
	};
});
