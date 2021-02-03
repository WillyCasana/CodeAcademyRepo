app.controller('bookDetalleController',function($scope,bookService,$routeParams){
    console.log('en bookDetalleController');
    bookService.then(function(response){
          $scope.bookSeleccionado= response[$routeParams.id];
          $scope.bookSeleccionado.index=$routeParams.id;

         
    },function(error){
        console.log(error);
    })
})

