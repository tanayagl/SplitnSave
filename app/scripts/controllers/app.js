'use strict';
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
                controller: 'BooksCtrlList',
                controllerAs: 'books'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .when('/books', {
                templateUrl:'views/books.html',
                controller:'BooksCtrlList',
                controllerAs:'books',
            })
            .when('/login', {
                templateUrl:'views/login_modal.html',
                // controller:'BooksCtrlList',
                // controllerAs:'books',
            })
            .when('/post_product', {
                templateUrl:'views/post_product.html',
                controller:'PostProductCtrl',
                controllerAs:'product',
            })
            .when('/edit_profile', {
                templateUrl:'views/edit_profile.html',
                controller:'EditProfileCtrl',
                controllerAs:'EditProfileCtrlå',
            })

            .otherwise({
                redirectTo: '/'
            });
    });
