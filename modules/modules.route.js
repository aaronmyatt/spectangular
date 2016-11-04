(function () {
    'use strict';

    angular
        .module('app.modules')
        .config(routeFunction);

    routeFunction.$inject = ['$routeProvider'];

    function routeFunction($routeProvider) {
        $routeProvider
            .when('/modules', {
                templateUrl: 'modules/template.html'
                // controller: 'modulesController',
                // controllerAs: 'vm'
                // resolve: {user: resolveUser}
            })
            .when('/modules/s', {
                templateUrl: 'modules/slide.html'
                // controller: 'SlideController',
                // controllerAs: 'vm'
                // resolve: {user: resolveUser}
            });
    }
})();
