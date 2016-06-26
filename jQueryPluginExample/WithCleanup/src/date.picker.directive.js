window.$ = require('jquery');

angular.module('app').directive('datePicker', function () {
	return {
		restrict: 'A',
		link: function ($scope, $element) {
			$($element).datepicker();
			$scope.value = 'Hello, World!';

			$scope.$on('$destroy', function () {
				$($element).datepicker('destroy');
			});
		}
	};
});