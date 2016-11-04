(function () {
    'use strict';

    angular
        .module('app')
        .config(routeFunction);

    routeFunction.$inject = ['$routeProvider'];

    function routeFunction($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'index/template.html'
                // controller: 'IndexController',
                // controllerAs: 'vm'
                // resolve: {user: resolveUser}
            })
            .when('/s', {
                templateUrl: 'index/slide.html'
                // controller: 'IndexController',
                // controllerAs: 'vm'
                // resolve: {user: resolveUser}
            })
            .when('/more', {
                templateUrl: 'index/further_reading.html'
                // controller: 'IndexController',
                // controllerAs: 'vm'
                // resolve: {user: resolveUser}
            })
            .otherwise({
                redirectTo: '/'
            });
    }

    // resolveUser.$inject = ['authService'];
    //
    // function resolveUser(authService) {
    //     return authService.firebaseAuthObject.$requireSignIn();
    // }

})();
