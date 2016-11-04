(function () {
    'use strict';

    angular
        .module('app.service')
        .config(routeFunction);

    routeFunction.$inject = ['$routeProvider'];

    function routeFunction($routeProvider) {
        $routeProvider
            .when('/service', {
                templateUrl: 'services/template.html'
                // controller: 'serviceController',
                // controllerAs: 'vm'
                // resolve: {user: resolveUser}
            })
            .when('/service/s', {
                templateUrl: 'services/slide.html'
                // controller: 'SlideController',
                // controllerAs: 'vm'
                // resolve: {user: resolveUser}
            });
    }

})();
