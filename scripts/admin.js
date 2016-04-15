var input=[];

var post=[];
var myapp = angular.module("myModule",['ngCookies']);

myapp.controller("Main",function($scope,$cookies,$http,$log){
$scope.show = false;
 $scope.init = function() {
		//$cookies.put('Email', "devarshsheth13@gmail.com");
		//$cookies.put('username', "Admin");
		//$cookies.put('otheruserid',2);
		if($cookies.get('Email') == null) {
 		window.location.replace("signup.html");
		}
		else if($cookies.get('admin') != null)
		{	
		 window.location.replace("homepage.html");
        }
        else
        {
            $http({
            method:'POST',
            url:'https://splitnsave.pythonanywhere.com/api/admin',
            data:JSON.stringify(input),
           })
                  .then(adminsuccesscallback,adminerrorcallback);
        }

  
		};
    var adminsuccesscallback = function (response) {
              $log.info(response);
              $scope.show=true;
              $scope.Users=response.data.Users;
              $scope.Posts=response.data.Posts;
            };
    
    var adminerrorcallback = function(reason){
            alert("Try Again");
            $log.info(reason);
            };
//$scope.Users=input;
//$scope.Posts=post;
    $scope.searchuser = function(user) {
            if ($scope.searchUser == undefined) {
                return true;
            } else {
                if (user.First_Name.toLowerCase()
                    .indexOf($scope.searchUser.toLowerCase()) != -1 || user.Last_Name.toLowerCase()
                    .indexOf($scope.searchUser.toLowerCase()) != -1) {
                    return true;
                }
            }
            return false;
        };
    $scope.searchpost = function(post) {
            if ($scope.searchPost == undefined) {
                return true;
            } else {
                if (post.Title.toLowerCase()
                    .indexOf($scope.searchUser.toLowerCase()) != -1) {
                    return true;
                }
            }
            return false;
        };
});