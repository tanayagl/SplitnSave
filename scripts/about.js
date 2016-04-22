var myapp = angular.module("myModule",['ngCookies']);
myapp.controller("Main",function($scope,$http,$cookies,$log){
$scope.show=false;
	$scope.init = function() {
		$scope.show=true;
		};
		$scope.signup = function()
        {
             $cookies.put('otherpage','laundry.html');
             window.location.href="signup.html";
        };
	});