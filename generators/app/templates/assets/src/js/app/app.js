(function (angular, window) {
	'use-strict';
    angular.module('filters', []);
    angular.module('services', ['ngResource']);
    angular.module('directives', []);
    angular.module('main', [
        'ngRoute',
        'ngSanitize',
        'ngMessages',
        'ngAria',
        'appTemplates',
        'services',
        'directives',
        'filters',
        'textAngular'
    ]).config(['$provide', function ($provide) {
        //$provide.decorator('taOptions', ['taRegisterTool', '$delegate', function(taRegisterTool, taOptions) {
        //    taOptions.forceTextAngularSanitize = true;
        //    return taOptions;
        //}]);
    }]);


})(angular, window);

