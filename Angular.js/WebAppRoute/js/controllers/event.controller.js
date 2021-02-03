app.controller('eventController',function($scope,services,$routeParams){
    services.listar.then(function(response){

        console.log($routeParams.id);
        $scope.event= response.events[$routeParams.id];
    })
})