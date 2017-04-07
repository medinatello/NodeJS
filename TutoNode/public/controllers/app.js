'use strict';
angular.module('MainApp', [
    'Authentication',
    'ngRoute',
    'ngCookies',
    'ngMessages'
])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/monedalist', {
            controller: 'monedaListControler',
            templateUrl: 'views/listmoneda.html'
        })
            .otherwise({ redirectTo: '/login' });
    }])

  .controller('monedaListControler', [
    '$scope', '$http', '$location',
    function ($scope, $http, $location) {
        $http.get('/monedas').success(function (data) {
            $scope.users = data;
            console.log(data);

        });
        
        
        $scope.RecargarLista = function () {
            console.log('Recargar la lista');
            $http.get('/monedas').success(function (data) {
                $scope.users = data;
                console.log(data);
            });

        };
    }
])