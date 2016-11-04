(function () {
    'use strict';

    angular
        .module('app.directive')
        .config(routeFunction);

    routeFunction.$inject = ['$routeProvider'];

    function routeFunction($routeProvider) {
        $routeProvider
            .when('/directive', {
                templateUrl: 'directive/template.html'
                // controller: 'directiveController',
                // controllerAs: 'vm'
                // resolve: {user: resolveUser}
            })
            .when('/directive/s', {
                templateUrl: 'directive/slide.html'
                // controller: 'SlideController',
                // controllerAs: 'vm'
                // resolve: {user: resolveUser}
            });
    }

})();
