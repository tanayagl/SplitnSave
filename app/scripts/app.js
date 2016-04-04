'use strict';

/**
 * @ngdoc overview
 * @name splitnSaveApp
 * @description
 * # splitnSaveApp
 *
 * Main module of the application.
 */
angular
    .module('splitnSaveApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/homepage.html',
                controller: 'HomepageCtrl',
                controllerAs: 'homepage'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .when('/books', {
                templateUrl:'views/books.html',
                controller:'BooksCtrl',
                controllerAs:'books',
            })
            .otherwise({
                redirectTo: '/'
            });
    });
