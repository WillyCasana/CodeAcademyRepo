app.controller('DayController',function($scope,services){
    $scope.title="hola";
    services.listar.then(function(response){
        console.log(response);
        $scope.day=response;
    })
})