describe('Test runner', function () {

	angular.mock.module.sharedInjector();

	beforeAll(function () {
		angular.mock.module('app');
	});

	for (var i = 0; i < 10000; i++) {
		describe('Test case', function () {
			var scope,
				$rootScope;

			beforeEach(function () {
				angular.mock.inject(function (_$rootScope_, $compile) {
					$rootScope = _$rootScope_;
					scope = $rootScope.$new();
					$compile('<div date-picker></div>')(scope);
					$rootScope.$digest();
				});
			});

			afterEach(function () {
				$rootScope.$destroy();
			});

			it('Should create scope', function () {
				expect(scope.value).toEqual('Hello, World!');
			});
		});
	}
});