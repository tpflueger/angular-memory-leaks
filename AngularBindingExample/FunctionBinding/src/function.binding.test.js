import $ from 'jquery';
import 'lodash';
import angular from 'angular';
import 'platform';
var Benchmark = require('benchmark');
Benchmark = Benchmark.runInContext({ _: _, process: process });
window.Benchmark = Benchmark;

var details = ['description', 'ua', 'os'];
angular.module('test', [])
    .controller('FunctionCtrl', function ($scope) {
        $scope.platforms = [];
        for (var key in Benchmark.platform) {
            if (Benchmark.platform.hasOwnProperty(key) && details.some(function (item) { return item === key; })) {
                $scope.platforms.push(key + " : " + Benchmark.platform[key]);
            }
        }
        $scope.items = [{ selected: false }, { selected: false }, { selected: false }, { selected: false }, { selected: false }, { selected: false }, { selected: false }, { selected: false }];
        $scope.showDiv = function () {
            return $scope.items.some(function (item) {
                return item.selected;
            });
        };
    });

angular.element(document).ready(function() {
    var functionScope = angular.element($('#Function')).scope();
    window.updateFunction = function () {
        functionScope.$digest();
    };
    var suite = new Benchmark.Suite;
    // add tests
    suite.add('Angular#FunctionBinding', function() {
        updateFunction();
    })
    // add listeners
    .on('cycle', function(event) {
        functionScope.performance = String(event.target);
        functionScope.$digest();
    })
    // run async
    .run({ 'async': false });
});
