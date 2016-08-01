describe('Test runner', function () {

	angular.mock.module.sharedInjector();

	beforeAll(function () {
		angular.mock.module('app');
	});

	for (var i = 0; i < 1; i++) {
		describe('Test case', function () {
			var $rootScope;

			beforeEach(function () {
				angular.mock.inject(function (_$rootScope_) {
					$rootScope = _$rootScope_;
				});
			});

			it('Should create scope', function () {
				expect($rootScope.value).toBeDefined();
			});
		});
	}
});