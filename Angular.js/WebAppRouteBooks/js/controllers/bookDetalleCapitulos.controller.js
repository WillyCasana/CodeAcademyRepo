app.controller('bookDetalleCapitulosController',function($scope,bookService
    ,$routeParams){
    console.log('En el bookDetalleCapitulosController')
    bookService.then(function(response){
        $scope.bookCapitulos=response[$routeParams.id];

        $scope.bookCapitulos.capTitle=$scope.bookCapitulos.chapters[$routeParams.capId].title;
        $scope.bookCapitulos.capSeleccionado=$scope.bookCapitulos.chapters[$routeParams.capId].paragraphs;
        $scope.bookCapitulos.capSeleccionado.index=$routeParams.capId;
        $scope.bookCapitulos.index=$routeParams.id;

    });

    $scope.capSiguiente=function(indexActual){
        indexActual = parseInt(indexActual) +1;

        var totCaps= parseInt($scope.bookCapitulos.chapters.length);

        if (indexActual < totCaps)
        {
            $scope.bookCapitulos.capTitle=$scope.bookCapitulos.chapters[indexActual].title;
            $scope.bookCapitulos.capSeleccionado=$scope.bookCapitulos.chapters[indexActual].paragraphs;
            $scope.bookCapitulos.capSeleccionado.index = indexActual;
        }else{
            document.location.href="#!/";
        }

      

    }

    $scope.capAnterior=function(indexActual){
        indexActual = parseInt(indexActual) -1;

        if (indexActual>=0)
        {
            $scope.bookCapitulos.capTitle=$scope.bookCapitulos.chapters[indexActual].title;
            $scope.bookCapitulos.capSeleccionado=$scope.bookCapitulos.chapters[indexActual].paragraphs;
            $scope.bookCapitulos.capSeleccionado.index = indexActual;
        }else{
            var id = $scope.bookCapitulos.index;
            console.log("al retroceder con indexActual=0");
            console.log(id);
            document.location.href="#!/book/" + id;
            console.log(document.location.href);
        }
      
    }

})