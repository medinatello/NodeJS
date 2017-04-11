//'use strict';
//angular.module('MainApp', [
//    'Authentication',
//    'ngRoute',
//    'ngCookies',
//    'ngMessages'
//])
//    .config(['$routeProvider', function ($routeProvider) {
//        $routeProvider
//            .when('/monedalist', {
//            controller: 'monedaListControler',
//            templateUrl: '../views/listmoneda.html'
//        })
//            .otherwise({ redirectTo: '/login' });
//    }])

//  .controller('monedaListControler', [
//    '$scope', '$http', '$location',
//    function ($scope, $http, $location) {
//        $http.get('/moneda').success(function (data) {
//            $scope.users = data;
//            console.log(data);

//        });
        
        
//        $scope.RecargarLista = function () {
//            console.log('Recargar la lista');
//            $http.get('/moneda').success(function (data) {
//                $scope.users = data;
//                console.log(data);
//            });

//        };
//    }
//])



var scotchTodo = angular.module('scotchTodo', []);

function mainController($scope, $http) {
    $scope.formData = {};
    
    // when landing on the page, get all todos and show them
    $http.get('/api/todos')
		.success(function (data) {
        $scope.todos = data;
    })
		.error(function (data) {
        console.log('Error: ' + data);
    });

}
