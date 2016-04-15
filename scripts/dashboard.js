var myapp = angular.module("myModule",['ngCookies']);
var Users=[{
		First_Name:"Chaitanya",
		Last_Name:"Shah",
		User_Id:"1",
		Image_Link:"http://simpleicon.com/wp-content/uploads/user1.png"
	  },
	  {
		First_Name:"Zarana",
		Last_Name:"Parekh",
		User_Id:"2",
		Image_Link:"http://simpleicon.com/wp-content/uploads/user1.png"
	  },
	  {
		First_Name:"Chaitanya",
		Last_Name:"Shah",
		User_Id:"1",
		Image_Link:"http://simpleicon.com/wp-content/uploads/user1.png"
	  },
	  {
		First_Name:"Zarana",
		Last_Name:"Parekh",
		User_Id:"2",
		Image_Link:"http://simpleicon.com/wp-content/uploads/user1.png"
	  },
	  {
		First_Name:"Chaitanya",
		Last_Name:"Shah",
		User_Id:"1",
		Image_Link:"http://simpleicon.com/wp-content/uploads/user1.png"
	  },
	  {
		First_Name:"Zarana",
		Last_Name:"Parekh",
		User_Id:"2",
		Image_Link:"http://simpleicon.com/wp-content/uploads/user1.png"
	  },
	  {
		First_Name:"Chaitanya",
		Last_Name:"Shah",
		User_Id:"1",
		Image_Link:"http://simpleicon.com/wp-content/uploads/user1.png"
	  },
	  {
		First_Name:"Zarana",
		Last_Name:"Parekh",
		User_Id:"2",
		Image_Link:"http://simpleicon.com/wp-content/uploads/user1.png"
	  }];
var Notifications=[{
		Message:"New messages from Chaitanya",
		Type:"1",
		Product_Id:"2",
		User_Id:"1"
	  },
	  {
		Message:"Chaitanya is interested to share products with you",
		Type:"2",
		Product_Id:"2",
		User_Id:"1"
	  },
	  {
		Message:"Hey! accept your request",
		Type:"3",
		Product_Id:"2",
		User_Id:"1"
	  },
	  {
		Message:"Finally confirm deal",
		Type:"4",
		Product_Id:"2",
		User_Id:"1"
	  }];
var input={
	First_Name:"Riddhesh",
	Last_Name:"Markandeya",
	User_Id:'3',
	Image_Link:"http://simpleicon.com/wp-content/uploads/user1.png"
};
myapp.controller("Main",function($scope,$http,$cookies,$log){
$scope.show=false;
	$scope.init = function() {
		//$cookies.put('Email', "devarshsheth13@gmail.com");
		//$cookies.put('username', input['First_Name']);
		if($cookies.get('Email') == null) {
 		window.location.replace("homepage.html");
		}
		else
		{	
		var Email={
                    Email: $cookies.get('Email'),
                   };
		 $http({
		  method:'POST',
		  url:'https://splitnsave.pythonanywhere.com/api/dashboard',
		  data:JSON.stringify(Email),
		 })
            .then(successcallback,errorcallback);
           $http({
		  method:'POST',
		  url:'https://splitnsave.pythonanywhere.com/api/notifications',
		  data:JSON.stringify(Email),
		 })
            .then(successnotification,errornotification);
         }

  
};
 	//$scope.Users=Users;
    //$scope.input=input;
   	//$scope.Notifications= Notifications;
var successcallback = function (response) {
               	$log.info(response);
               	$scope.Users=response.data.users;
               	$scope.input=response.data.details;
               	$scope.show=true;
            	};
	var errorcallback = function(reason){
				alert("Server Problem");
				$log.info(reason);
				};
var successnotification = function (response) {
               	$log.info(response);
               	$scope.Confirmed=response.data.Confirmed;
               	$scope.Accepted=response.data.Accepted;
               	$scope.Requested=response.data.Requested;
               	$scope.show=true;
            	};
var errornotification = function(reason){
				alert("Server Problem");
				$log.info(reason);
				};
$scope.gotoprofile=function(userid)
	{
		//$cookies.put('otheruserid',userid);
		$cookies.put('otheruserid',userid);
		window.location.href="userprofile.html";
	};
$scope.gotonotification = function(notification)
{
	if(notification.Type==1)
	{
		alert("Chat with"+ notification.User_Id);
	}
	else if(notification.Type==2)
	{
		window.location.href="my_posts.html";
	}
	else if(notification.Type==3)
	{
		$cookies.put('productid',notification.Product_Id);
		window.location.href="product_detail.html";
	}
	else
	{
		window.location.href="transactions.html";
	}

}
$scope.changeColor = function(person, bool) {
    if(bool === true) {
        $scope.personColour = {background: 'red'};
    } else if (bool === false) {
        $scope.personColour = {background: 'white'}; //or, whatever the original color is
    }
};
$scope.changeGlyphicon = function(Type){
	if(Type=='1')
	{
		return "glyphicon glyphicon-user";
	}
	else if(Type=="3")
	{
		return "glyphicon glyphicon-shopping-cart";
	}
	else
	{
		return "glyphicon glyphicon-user";
	}
};
$scope.gotorequest = function(notification)
{
	window.location.href="my_posts.html";
}
$scope.gotoaccept(notification)=function(notification)
{
	window.location.href="product_detail.html";
}
$scope.gotoconfirm = function(notification)
{
	window.location.href="transactions.html";
}
 $scope.onMouseLeave_Submit = function ($event) {
	
};
var inputsuccesscallback = function (response) {
			$log.info(response);
			alert("Hey");
            };
var inputerrorcallback = function(reason){
		alert("Try Again");
		$log.info(reason);
		};
});
