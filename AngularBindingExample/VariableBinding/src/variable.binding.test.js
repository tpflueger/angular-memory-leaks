import $ from 'jquery';
import 'lodash';
import angular from 'angular';
import 'platform';
var Benchmark = require('benchmark');
Benchmark = Benchmark.runInContext({ _: _, process: process });
window.Benchmark = Benchmark;

var details = ['description', 'ua', 'os'];
angular.module('test', [])
    .controller('VariableCtrl', function ($scope) {
        $scope.platforms = [];
        for (var key in Benchmark.platform) {
            if (Benchmark.platform.hasOwnProperty(key) && details.some(function (item) { return item === key; })) {
                $scope.platforms.push(key + " : " + Benchmark.platform[key]);
            }
        }
        $scope.items = [{ selected: false }, { selected: false }, { selected: false }, { selected: false }, { selected: false }, { selected: false }, { selected: false }, { selected: false }];
        $scope.showDiv = false;
    });

angular.element(document).ready(function() {
    var variableScope = angular.element($('#Variable')).scope();
    window.updateVariable = function () {
        variableScope.$digest();
    };

    var suite = new Benchmark.Suite;
    // add tests
    suite.add('Angular#VariableBinding', function() {
        updateVariable();
    })
    // add listeners
    .on('cycle', function(event) {
        variableScope.performance = String(event.target);
        variableScope.$digest();
    })
    // run async
    .run({ 'async': false });
});
