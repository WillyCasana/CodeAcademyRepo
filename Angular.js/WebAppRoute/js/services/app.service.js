app.factory('services',function($http){

    var serviceObj =this;

    serviceObj.listar=
     $http({
       url:'https://content.codecademy.com/courses/ltp4/events-api/events.json',
       method:'GET'
            }).then(function(response){
                console.log(response.data);
                    return response.data;
            })
    return serviceObj;
})