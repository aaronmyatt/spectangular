(function(){
    "use strict";
    angular.module('app.service')
        .controller('serviceController', serviceController);

    serviceController.$inject = ['$scope', 'specialService'];
    function serviceController($scope, specialService){
        $scope.update = '';

        $scope.special = specialService;
        $scope.updateService = updateService;

        function updateService(){
            var data = $scope.update;
            if(data != ''){
                $scope.special.update(data);
            }
            $scope.update = '';
        }

    }
})();
