(function(){
    "use strict";
    angular.module('app.ctrl')
        .controller('ctrlController', ctrlController);

    ctrlController.$inject = ['$scope'];
    function ctrlController($scope){

        $scope.capitaliseVar = capitaliseVar;

        $scope.var1 = "Gardening, really?";
        $scope.var2 = "It sounded good in my head.";
        $scope.var3 = "yeah!";

        function capitaliseVar(v){
            return v.toUpperCase();
        }
    }
})();
