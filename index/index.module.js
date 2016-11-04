(function(){
    'use strict';

    angular.module('app', [
        'ngRoute',
        'ngMaterial',
        'app.special-service',

        'app.setup',
        'app.modules',
        'app.ctrl',
        'app.directive',
        'app.service'

    ]);

})();
