var app = angular.module('appCalendar',['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        controller:'DayController',
        templateUrl:'templates/day.html'
    })
    .when('/:id',{
        controller:'eventController',
        templateUrl:'templates/event.html'
    })
    .otherwise({
        redirectTo: '/'
    })
    
})