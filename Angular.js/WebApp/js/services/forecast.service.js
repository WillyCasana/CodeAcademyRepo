forecastModuleObj.factory('forecastService', function($http){
    return $http({
        url:'https://content.codecademy.com/courses/ltp4/forecast-api/forecast.json',
        method:'GET'
    }).then(function(response){
        return response.data;
    },function(error){
        return error.data;
    })
}

)