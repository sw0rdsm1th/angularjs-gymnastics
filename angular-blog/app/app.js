angular.module('app', ['ngRoute'])
    
    .config(['$routeProvider', function($routeProvider){
             
             $routeProvider.when('/', {
             
                templateUrl:'views/post.html',
                
             
             }).otherwise({
             
                redirectTo: '/'
             });
             
    }]);
