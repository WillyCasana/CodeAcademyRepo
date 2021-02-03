app.controller('bookController',function($scope,bookService){
    console.log('en el bookController')
    bookService.then(function(response){
            $scope.entradas=response;
    })
})