(function () {
    'use strict';

    angular
        .module('app.setup')
        .config(routeFunction);

    routeFunction.$inject = ['$routeProvider'];

    function routeFunction($routeProvider) {
        $routeProvider
            .when('/setup', {
                templateUrl: 'setup/template.html'
                // controller: 'SetupController',
                // controllerAs: 'vm'
                // resolve: {user: resolveUser}
            })
            .when('/setup/s', {
                templateUrl: 'setup/slide.html'
                // controller: 'SlideController',
                // controllerAs: 'vm'
                // resolve: {user: resolveUser}
            });
    }

})();
