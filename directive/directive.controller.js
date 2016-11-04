(function(){
    "use strict";
    angular.module('app.directive')
        .controller('directiveController', directiveController);

    directiveController.$inject = ['$scope'];
    function directiveController($scope){

        $scope.capitaliseVar = capitaliseVar;
        $scope.addToArray = addToArray;

        $scope.var1 = "Gardening, really?";
        $scope.arbitraryArray = [];

        function capitaliseVar(v){
            return v.toUpperCase();
        }

        function addToArray(){
            var num = $scope.arbitraryArray.length + 1;
            $scope.arbitraryArray.push(num);
        }
    }
})();
