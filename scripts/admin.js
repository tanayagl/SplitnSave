var input=[{
        First_Name:"Riddhesh",
        Last_Name:"Markandeya",
        Report_Number:"10",
        Image_Link:"http://simpleicon.com/wp-content/uploads/user1.png",
      	User_Id:'1'
		},
		{
        First_Name:"Riddhesh",
        Last_Name:"Markandeya",
        Report_Number:"40",
        Image_Link:"http://simpleicon.com/wp-content/uploads/user1.png",
      	User_Id:'1'
		},{
        First_Name:"Riddhesh",
        Last_Name:"Markandeya",
        Report_Number:"20",
        Image_Link:"http://simpleicon.com/wp-content/uploads/user1.png",
      	User_Id:'1'
		},{
        First_Name:"Riddhesh",
        Last_Name:"Markandeya",
        Report_Number:"0",
        Image_Link:"http://simpleicon.com/wp-content/uploads/user1.png",
      	User_Id:'1'
		},{
        First_Name:"Riddhesh",
        Last_Name:"Markandeya",
        Report_Number:"11",
        Image_Link:"http://simpleicon.com/wp-content/uploads/user1.png",
      	User_Id:'1'
		},{
        First_Name:"Riddhesh",
        Last_Name:"Markandeya",
        Report_Number:"12",
        Image_Link:"http://simpleicon.com/wp-content/uploads/user1.png",
      	User_Id:'1'
		}];

var post=[ 
		{
		Title:"Book",
        Report_Number:"10",
        Image_Link:"http://simpleicon.com/wp-content/uploads/user1.png",
      	Product_Id:'1'
		},
		{
		Title:"Book",
        Report_Number:"10",
        Image_Link:"http://simpleicon.com/wp-content/uploads/user1.png",
      	Product_Id:'1'
		},
		{
		Title:"Book",
        Report_Number:"10",
        Image_Link:"http://simpleicon.com/wp-content/uploads/user1.png",
      	Product_Id:'1'
		},
		{
		Title:"Book",
        Report_Number:"10",
        Image_Link:"http://simpleicon.com/wp-content/uploads/user1.png",
      	Product_Id:'1'
		}];
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
		else
		{	
		 $scope.show=true;
        }

  
		};
$scope.Users=input;
$scope.Posts=post;
 $scope.searchuser = function(user) {
            if ($scope.searchUser == undefined) {
                return true;
            } else {
                if (input.First_Name.toLowerCase()
                    .indexOf($scope.searchUser.toLowerCase()) != -1) {
                    return true;
                }
            }
            return false;
        };
});