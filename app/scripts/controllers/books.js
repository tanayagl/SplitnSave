'use strict';

angular.module('splitnSaveApp')
    .controller('BooksCtrlList', function($scope) {
        $scope.books = [{
            'name': 'Nexus S',
            'title': 'Fast just got faster with Nexus S.'
        }, {
            'name': 'Nexus S',
            'title': 'Fast just got faster with Nexus S.'
        }, {
            'name': 'Motorola XOOM™ with Wi-Fi',
            'title': 'The Next, Next Generation tablet.'
        }, {
            'name': 'Motorola XOOM™ with Wi-Fi',
            'title': 'The Next, Next Generation tablet.'
        }, {
            'name': 'Motorola XOOM™ with Wi-Fi',
            'title': 'The Next, Next Generation tablet.'
        }, {
            'name': 'Motorola XOOM™ with Wi-Fi',
            'title': 'The Next, Next Generation tablet.'
        }, {
            'name': 'Motorola XOOM™ with Wi-Fi',
            'title': 'The Next, Next Generation tablet.'
        }, {
            'name': 'Motorola XOOM™ with Wi-Fi',
            'title': 'The Next, Next Generation tablet.'
        }, {
            'name': 'MOTOROLA XOOM™',
            'title': 'The Next, Next Generation tablet.'
        }, {
            'name': 'MOTOROLA XOOM™',
            'title': 'The Next, Next Generation tablet.'
        }];
        $scope.search = function(item) {
            if ($scope.searchText == undefined) {
                return true;
            } else {
                if (item.name.toLowerCase()
                    .indexOf($scope.searchText.toLowerCase()) != -1 ||
                    item.title.toLowerCase()
                    .indexOf($scope.searchText.toLowerCase()) != -1) {
                    return true;
                }
            }
            return false;
        };
        $scope.user={
        	username:"",
        	password:""
        }
        $scope.login_check = function()
        {
        	
        }
    });
