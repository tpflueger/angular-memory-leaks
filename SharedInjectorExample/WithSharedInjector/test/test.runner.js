describe('Test runner', function () {

	angular.mock.module.sharedInjector();

	beforeAll(function () {
		angular.mock.module('app');
	});

	for (var i = 0; i < 10000; i++) {
		describe('Test case', function () {
			var scope;

			beforeEach(function () {
				angular.mock.inject(function ($rootScope) {
					scope = $rootScope.$new();
				});
			});

			it('Should create scope', function () {
				expect(scope.value).toEqual('Hello, World!');
			});
		});
	}
});