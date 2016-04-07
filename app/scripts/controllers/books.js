'use strict';
var Books=[{
            'name': 'Nexus S',
            'title': 'Fast just got faster with Nexus S.',
            'price':'250',
            'location':'Ahmedabad',
            'host':'Chaitanya'
        }, {
            'name': 'Nexus S',
            'title': 'Fast just got faster with Nexus S.',
            'location':'Ahmedabad',
            'price':'250',
            'host':'Chaitanya'
        }, {
            'name': 'Motorola XOOM™ with Wi-Fi',
            'title': 'The Next, Next Generation tablet.',
            'location':'Ahmedabad',
            'price':'250',
            'host':'Chaitanya'
        }, {
            'name': 'Motorola XOOM™ with Wi-Fi',
            'title': 'The Next, Next Generation tablet.',
            'location':'Ahmedabad',
            'price':'250',
            'host':'Chaitanya'
        },{
            'name': 'Motorola XOOM™ with Wi-Fi',
            'title': 'The Next, Next Generation tablet.',
            'location':'Ahmedabad',
            'price':'250',
            'host':'Chaitanya'
        },  
        {
            'name': 'Motorola XOOM™ with Wi-Fi',
            'title': 'The Next, Next Generation tablet.',
            'location':'Ahmedabad',
            'price':'250',
            'host':'Chaitanya'
        }];
var user={
    Email:"",
    Password:""
};
var logged_in=false;
angular.module('splitnSaveApp')
    .controller('BooksCtrlList', function($scope) {
        $scope.books = Books;

        $scope.Search="Select Category";
        $scope.loadsearch = function (soc) {
          $scope.Search=soc;
        };
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
        $scope.user=user;
        $scope.onMouseLeave_Email_Result="";
        $scope.onMouseLeave_Password_Result="";
        $scope.onMouseLeave_Email=function($event)
        {
            if(user['Email']=="")
            {
                $scope.onMouseLeave_Email_Result="Email is required";
            }
            else if(!(validateEmail(user['Email'])))
            {
                 $scope.onMouseLeave_Email_Result="Email is not in valid format";
            }
            else
            {
                $scope.onMouseLeave_Email_Result="";
            }
        };
        $scope.onMouseLeave_Password = function ($event) {
            if(user['Password']=="")
            {
            $scope.onMouseLeave_Password_Result = "Password is required";
            }
            else if((user['Password'].length<6))
            {
            $scope.onMouseLeave_Password_Result = "Password length must be at least 6.";
            }
            else
            {
            $scope.onMouseLeave_Password_Result="";
            }
        };
        $scope.login_check = function($event)
        {
        	if(user['Email']=="abc")
            {
                $scope.onMouseLeave_Email_Result = "Authentic";
            }
            if(user['Password']=="abc")
            {
                $scope.onMouseLeave_Password_Result = "Authentic";
            }
            if($scope.onMouseLeave_Email_Result=="Authentic" && $scope.onMouseLeave_Password_Result=="Authentic")
            {
                logged_in = true;
                alert("Done");
            }
        }
        $scope.if_logged_in = function()
        {
            return logged_in;
        };
    });
    function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
