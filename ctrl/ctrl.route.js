(function () {
    'use strict';

    angular
        .module('app.ctrl')
        .config(routeFunction);

    routeFunction.$inject = ['$routeProvider'];

    function routeFunction($routeProvider) {
        $routeProvider
            .when('/ctrl', {
                templateUrl: 'ctrl/template.html'
                // controller: 'ctrlController',
                // controllerAs: 'vm'
                // resolve: {user: resolveUser}
            })
            .when('/ctrl/s', {
                templateUrl: 'ctrl/slide.html'
                // controller: 'SlideController',
                // controllerAs: 'vm'
                // resolve: {user: resolveUser}
            });
    }

})();
