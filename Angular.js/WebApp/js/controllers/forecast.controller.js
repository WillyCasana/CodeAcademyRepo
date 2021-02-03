forecastModuleObj.controller('forecastController',function($scope,forecastService){
    $scope.forecastListar=function(){

        forecastService.then(function(response){
                console.log(response);
                $scope.forecastListado=response;
        })
        console.log('ingreso');
    }
})