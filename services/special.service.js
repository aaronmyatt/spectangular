(function(){
    'use strict';

    angular.module('app.special-service', [])
        .service('specialService', specialService);

    specialService.$inject = [];
    function specialService(){
        var content = ['this', 'service', 'contains', 'alot', 'of', 'important', 'spam'];

        var service = this;

        service.query = query;
        service.update = update;

        return service;

        function query(){
            return content;
        }

        function update(spam){
            content.push(spam);
            return content;
        }

    }

})();
