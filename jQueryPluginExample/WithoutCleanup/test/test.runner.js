describe('Test runner', function () {

	beforeEach(angular.mock.module('app'));

	for (var i = 0; i < 1000; i++) {
		describe('Test case', function () {
			var $rootScope;

			beforeEach(function () {
				angular.mock.inject(function (_$rootScope_, $compile) {
					$rootScope = _$rootScope_;
					$compile('<div date-picker></div>')($rootScope);
					$rootScope.$digest();
				});
			});

			it('Should create scope', function () {
				expect($rootScope.value).toEqual('Hello, World!');
			});
		});
	}
});
