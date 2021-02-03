app.factory('bookService',function($http){
    console.log('en el bookService');
    return $http({
        url:'https://content.codecademy.com/courses/ltp4/books-api/books.json',
        method:'GET'
    }).then(function(response){
        console.log(response.data);
        return response.data;
    },function(error){
        console.log(error);
        return error;
    })
})

